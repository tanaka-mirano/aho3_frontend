import { Injectable } from '@angular/core';
import { Init_num } from './Init_num';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { aORn } from './ahoORno';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HyoujiService {

  constructor(
    private http: HttpClient,
    //private heroesUrl = 'api/heroes';  // Web APIのURL
  ) { }
  private hyoujiUrl = 'https://tranquil-crag-27137.herokuapp.com/';
  //proxy.confで設定しないときは8080にする
  //このとき、springboot側では/appでRequestMapping

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  AhoNo(st_num: number, end_num: number, bi_num: number, like_num: number): Observable<aORn[]> {

    return this.http.get<aORn[]>(`${this.hyoujiUrl}/?start=${st_num}&end=${end_num}&bi=${bi_num}&like=${like_num}`)
  }


  //<>内は型を合わせる。インターフェースaORnが配列だから配列にする→[]をつける

  //結果を入れる配列を作ってHeroのとこにする（ahoimg、number）

}

/*
//proxy.confでコメントできないのでここに記述
{
    "/app": {
      "target": "http://localhost:8080",
      "pathRewrite": {"^/app": ""}
    }
  }

  // /appで指定したところがtarget で指定したurlに変わるから、springbootのRequestMappingで/appではなく/で指定

*/

