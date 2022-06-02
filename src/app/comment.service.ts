import { Injectable } from '@angular/core';
import { user_info } from './user_info';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { com_info } from './get_comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {constructor(
  private http: HttpClient,
) { }

private commentUrl = 'https://tranquil-crag-27137.herokuapp.com/comments';    //変更１：http://localhost:8000/comments
private likeUrl = 'https://tranquil-crag-27137.herokuapp.com/likes';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

    /**新規投稿 */
postnewComment(user_name: string, user_id: string, comment: string): Observable<any> {

  return this.http.post(this.commentUrl,{user_name:user_name,user_id:user_id,comment:comment},this.httpOptions);

  //返すものがないときは、postの後ろに<>いらない。Observableはanyにしておくことで、何が返ってきても大丈夫になる。
  
}

postreplyComment(user_name: string, user_id: string, comment: string, parent_id:number): Observable<any> {

  return this.http.post(this.commentUrl,{user_name:user_name,user_id:user_id,comment:comment,parent_id:parent_id},this.httpOptions);

  //返すものがないときは、postの後ろに<>いらない。Observableはanyにしておくことで、何が返ってきても大丈夫になる。
  
}

    /**コメント取得 */
getComment(user_id:string): Observable<com_info[]>{
  //const url = `${this.commentUrl}/${user_id}`;
  return this.http.get<com_info[]>(`${this.commentUrl}/?user_id=${user_id}`);

}

getreplyComment(com_id:number,user_id:string): Observable<com_info[]>{
  //const url = `${this.commentUrl}/${user_id}`;
  return this.http.get<com_info[]>(`${this.commentUrl}/?com_id=${com_id}&user_id=${user_id}`);

}

deleteComment(com_id:number,user_id:string): Observable<any>{
  //const url = `${this.commentUrl}/${user_id}`;
  return this.http.delete(`${this.commentUrl}/?com_id=${com_id}&user_id=${user_id}`);

}

putComment(com_id:number,user_id:string,comment:string): Observable<any>{
  //const url = `${this.commentUrl}/${user_id}`;
  return this.http.put(this.commentUrl,{com_id:com_id,user_id:user_id,comment:comment},this.httpOptions);

}

postLike(com_id:number,user_id:string,push_b:boolean): Observable<any>{
  //const url = `${this.commentUrl}/${user_id}`;
  return this.http.post(this.likeUrl,{com_id:com_id,user_id:user_id,push_b:push_b},this.httpOptions);

}



}

