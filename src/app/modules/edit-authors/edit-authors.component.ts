import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsApiService } from 'src/app/services/authors-api.service';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
  author: any = ({authorName: ''})
  parameters: any;
  authorId: any;

  constructor(private _authorService: AuthorsApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.parameters = this._activatedRoute.params
    this.authorId = this.parameters._value
    this.callGetAuthorById(this.authorId.id);
  }

  callGetAuthorById(id: String){
    let observable = this._authorService.getAuthorById(id);
    observable.subscribe(data => {
      this.author = data;
    });
  }

  onSubmit(){
    const id = this.authorId.id;
    let observable = this._authorService.updateAuthor(id, this.author);
    observable.subscribe(data => {
      this._router.navigate([`/authors`])
    });
  }
}
