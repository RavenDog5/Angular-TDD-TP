import { Component } from '@angular/core';
import { AuthorService, Author } from './authors.service';
import { DocumentCollection } from 'ngx-jsonapi';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  public authors: DocumentCollection<Author>;

  constructor(private authorsService: AuthorService) {
    authorsService
      .all ({
        // include: ['']
      })
      .subscribe( authors => (this.authors = authors));
  }


}
