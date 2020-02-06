import { Injectable } from '@angular/core';
import { Resource } from 'ngx-jsonapi';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
}

export class Book extends Resource {
  public attributes = {
      title : 'default name',
      date_published: '',
      isbn: 0
  };

}
