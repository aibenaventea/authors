import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './modules/authors/authors.component';
import { AddAuthorsComponent } from './modules/add-authors/add-authors.component';
import { EditAuthorsComponent } from './modules/edit-authors/edit-authors.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'authors', component: AuthorsComponent},
  {path: 'authors/new', component: AddAuthorsComponent},
  {path: 'authors/edit/:id', component: EditAuthorsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'authors'},
  {path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
