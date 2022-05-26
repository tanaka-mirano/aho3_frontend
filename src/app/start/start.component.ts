import { Component, Input, OnInit } from '@angular/core';
import { Init_num } from '../Init_num';
import { user_info } from '../user_info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  defaultLiffId = "1657029236-35JEK0VO";



  init_num: Init_num = {
    st_num: 1,
    end_num: 40,
    bi_num: 3,
    like_num: 3

  };



  constructor(private router: Router) { }

  reply_button=false;
  good_num=0;
  
  reply_com:String="返信コメントがここに表示されます。100文字以内です。返信に対する返信も可能です。しかし、一番上の階層にある返信コメントと同時に見ることはできません。これはたぶん80もじ";
  i=1;
  delete_com=false;
  reply_all=false;  //返信コメントを表示するかしないか

  user_name="";

  ngOnInit(): void {


    /**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
    (window as any).liff
      .init({
        liffId: this.defaultLiffId
      })
      .then(() => {
        // start to use LIFF's api
        //initializeApp();
        //alert("initializeAppend");
        //console.log((window as any).liff.getLanguage());
      });

      

    /*初期化終了*/
  }

  ok(): void {
    //console.log(this.init_num.st_num);

    this.router.navigate(['/hyouji'], { queryParams: { start: this.init_num.st_num, end: this.init_num.end_num, bi: this.init_num.bi_num, like: this.init_num.like_num } });
  }

  submit_userinfo(input_name:string){
    this.user_name=input_name;
    console.log(this.user_name);


  }

  reply(): void { 
    this.reply_button=true;
  }

  good(): void {
    this.good_num=this.good_num+1;
  }

  submit_reply():void{
    this.reply_button=false;
  }

  delete(): void {
    this.delete_com=true;
  }

  appear_rep(): void{
    this.reply_all=true;  //返信コメントを表示する

  }

}