import { Resource, DocumentCollection, Autoregister, Service } from 'ngx-jsonapi';
import { Injectable } from '@angular/core';
import { Book } from '../book.service';
export class Author extends Resource {
    public attributes = {
        name : 'default name',
        date_of_birth: ''
    };

    public relationships = {
        books: new DocumentCollection<Book>()
    };
}

@Injectable()
export class AuthorService extends Service<Author> {
    public resource = Author;
    public type = 'authors';
}
