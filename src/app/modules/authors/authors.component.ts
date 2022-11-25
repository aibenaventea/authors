import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsApiService } from 'src/app/services/authors-api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  dataAuthors: any;
  parameters: any;
  authorId: any;

  constructor(private _authorService: AuthorsApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.parameters = this._activatedRoute.params
    this.authorId = this.parameters._value
    this.callGetAllAuthors();
  }

  callGetAllAuthors(){
    const observable = this._authorService.getAllAuthors();
    observable.subscribe(data =>{
      this.dataAuthors = data;
    })
  };

  callDeleteAuthor(id: String){
    const observable = this._authorService.deleteAuthor(id);
    observable.subscribe(data =>{
      this._router.navigate(['/'])
    })
  }
}
