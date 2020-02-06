import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {AuthorsComponent} from './authors.component';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {AuthorService, Author} from './authors.service';
import { By } from '@angular/platform-browser';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      imports: [
        NgxJsonapiModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        })
      ],
      providers: [AuthorService, Author],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('show all the authors', inject([AuthorService], async () => {
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    timeout(1500).then((v) => {
      expect(authorElements.length).toBeGreaterThan(3);
    });
  }));
});
