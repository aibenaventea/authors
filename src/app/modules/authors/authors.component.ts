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
  author: any = ({_id:'', authorName: '', authorQuotes: [{quote:'', vote:0}]})

  constructor(private _authorService: AuthorsApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.parameters = this._activatedRoute.params
    // console.log(this.parameters)
    this.authorId = this.parameters._value
    // console.log(this.authorId)
    this.callGetAllAuthors();
  }

  callGetAllAuthors(){
    const observable = this._authorService.getAllAuthors();
    observable.subscribe(data =>{
      this.dataAuthors = data;
    })
  };

  callDeleteAuthor(id: String){
    console.log(id)
    const observable = this._authorService.deleteAuthor(id);

    observable.subscribe(data =>{
      // this._router.navigate([`/authors`])
      window.location.reload()
    })
  }
}
