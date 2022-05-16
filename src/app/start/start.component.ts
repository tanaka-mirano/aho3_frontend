import { Component, Input, OnInit } from '@angular/core';
import { Init_num } from '../Init_num';
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
          alert("initializeAppend");
      });

/*初期化終了*/
  }

  ok(): void {
    //console.log(this.init_num.st_num);

    this.router.navigate(['/hyouji'], { queryParams: { start: this.init_num.st_num, end: this.init_num.end_num, bi: this.init_num.bi_num, like: this.init_num.like_num } });



  }
}