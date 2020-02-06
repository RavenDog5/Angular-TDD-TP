import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import {AuthorService} from './authors/authors.service';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
    })
  ],
  providers: [
    AuthorService,
    {provide: APP_BASE_HREF, useValue: '/my/app'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
