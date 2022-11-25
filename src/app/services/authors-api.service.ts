import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsApiService {

  constructor(private _httpService: HttpClient) { }

  getAllAuthors(){
    let url = environment.urlServiceGetAll
    return this._httpService.get(url)
  };
  getAuthorById(id:String){
    let url = `${environment.urlServiceGetById}/${id}`
    return this._httpService.get(url)
  };
  createNewAuthor(jsondata:any){
    let url = environment.urlServiceCreateNew
    return this._httpService.post(url,jsondata)
  };
  updateAuthor(id:String, jsondata: any){
    let url = `${environment.urlServiceUpdate}/${id}`
    return this._httpService.put(url,jsondata)
  };
  deleteAuthor(id:String){
    let url = `${environment.urlServiceDelete}/${id}`
    return this._httpService.delete(url)
  };
}
