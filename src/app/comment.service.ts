import { Injectable } from '@angular/core';
import { user_info } from './user_info';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {constructor(
  private http: HttpClient,
) { }

private commentUrl = 'https://tranquil-crag-27137.herokuapp.com/comments';


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

newComment(user_name: string, user_id: string, comment: string): Observable<any> {


  return this.http.post(this.commentUrl,{user_name:user_name,user_id:user_id,comment:comment},this.httpOptions);

  //返すものがないときは、postの後ろに<>いらない。Observableはanyにしておくことで、何が返ってきても大丈夫になる。
  
}



}

