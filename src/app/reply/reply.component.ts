import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  r_button:Number=0;
  good_num:number=0;
  submit_r:Number=0;
  reply_com:String="返信コメント";

  constructor() { }

  ngOnInit(): void {
  }

  reply(): void {
    this.r_button=1;
    this.submit_r=0;
  }

  good(): void {
    this.good_num=this.good_num+1;
  }

  do_reply():void{
    this.submit_r=1;
  }

  delete(): void {
    this.good_num=this.good_num+1;
  }


}
