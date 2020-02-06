import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorsComponent} from './authors.component';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {AuthorService} from './authors.service';
import { By } from '@angular/platform-browser';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      imports: [NgxJsonapiModule],
      providers: [AuthorService]
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
  it('show all the authors', async () => {
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    expect(authorElements.length).toBeGreaterThan(3);
  });
});
