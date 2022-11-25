import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsApiService } from 'src/app/services/authors-api.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {

  author: any = ({authorName: ''})
  constructor(private _authorService: AuthorsApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let observable = this._authorService.createNewAuthor(this.author);
    observable.subscribe(data => {
      this._router.navigate(['/'])
    });
  }

}
