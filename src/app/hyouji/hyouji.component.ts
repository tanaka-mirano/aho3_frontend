import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HyoujiService } from '../hyouji.service';
import { Observable } from 'rxjs';
import { aORn } from '../ahoORno';
import { Router } from '@angular/router';
import { SoundmusicService } from '../soundmusic.service';


@Component({
  selector: 'app-hyouji',
  templateUrl: './hyouji.component.html',
  styleUrls: ['./hyouji.component.css']
})
export class HyoujiComponent implements OnInit {

  //an: aORn | undefined;
  an: aORn[] = [];
  //配列で受け取るから、配列で定義する

  img_src: any;
  count: number = 0;
  ahoCount = false;
  noCount = false;
  likeCount = false;
  heart=false;

  errorHappen = false;
  error: string = "";



  constructor(private route: ActivatedRoute,
    private hyoujiService: HyoujiService,
    private router: Router,
    private soundmusicService: SoundmusicService
  ) { }

  ngOnInit(): void {
    //console.log(100);
    this.AHOorNO();
  }

  AHOorNO(): void {
    this.route.queryParamMap.subscribe(params => { //startcomponentからのクエリパラメータ取得
      const st_num = Number(params.get('start'));
      const end_num = Number(params.get('end'));
      const bi_num = Number(params.get('bi'));
      const like_num = Number(params.get('like'));

      this.hyoujiService.AhoNo(st_num, end_num, bi_num, like_num)
        .subscribe(an => {  //返ってきたものanでこれから処理するよ
          this.an = an;

          this.soundmusicService.playAudio();

          var that = this;
          let k = 0;
          let si = setInterval(() => {

            that.likeCount = false;
            that.ahoCount = false;
            that.noCount = false;
            that.heart=false;


            var random = Math.random() * 4;
            var integer = Math.floor(random);

            switch ((that.an[k]).img) {

              case 'error':
                that.errorHappen = true;
                that.error = ("ERROR:各数字を適切に設定してください");
              break;

              case 'ahoimg':
                that.count = (that.an[k]).i;
                that.ahoCount = true;
                this.soundmusicService.playAudio2();
                if(((that.an[k-1]).img)=="ahoimg"){
                  that.img_src = `assets/img/aho/${integer}.jpeg`;
                }else{
                  that.img_src = `assets/img/aho/1.jpeg`;
                }
              break;

              case 'aholikeimg':
                that.count = (that.an[k]).i;

                that.heart = true;
                that.ahoCount = true;
                this.soundmusicService.playAudio2();
                that.img_src = `assets/img/aho/1.jpeg`;
              break;

              case 'likeimg':
                that.count = (that.an[k]).i;
                that.noCount = true;
                that.likeCount = true;
                that.img_src = `assets/img/like/1.jpeg`;
              break;

              case 'noimg':
                that.count = (that.an[k]).i;
                that.noCount = true;
                that.img_src = `assets/img/no/1.jpeg`;
              break;

              case 'omoro':
                this.router.navigate(['/omoro']);
              break;

            }

            k++;

            if ((k == (end_num - st_num) + 2) || (that.errorHappen == true)) {  //最後にオモローを表示させる分を入れてるから    
              clearInterval(si)
            }
          }, 800)
        });

  
      });
    }
  
  }
  
/*
            if ((that.an[k]).img == "error" || typeof ((that.an[k]).img) == undefined) {
              that.errorHappen = true;
              that.error = ("ERROR:開始数・終了数・倍数は0以外の数字で入力してください");


            } else if ((that.an[k]).img == "ahoimg") {
              console.log("aho");
              that.count = (that.an[k]).i;
              that.likeCount = false;
              that.noCount = false;
              that.ahoCount = true;
              //console.log(that.ahoCount);

              this.soundmusicService.playAudio2();
              var random = Math.random() * 13;
              var integer = Math.floor(random);
              that.img_src = `assets/img/aho/${integer}.jpeg`;

            } else if ((that.an[k]).img == "noimg") {
              console.log("no");
              that.count = (that.an[k]).i;
              that.likeCount = false;
              that.ahoCount = false;
              that.noCount = true;

              that.img_src = `assets/img/no/1.jpeg`;

            } else if ((that.an[k]).img == "likeimg") {
              console.log("like");
              that.count = (that.an[k]).i;
              that.noCount = false;
              that.ahoCount = false;
              that.likeCount = true;
              var random = Math.random() * 12;
              var integer = Math.floor(random);
              that.img_src = `assets/img/aho/${integer}.jpeg`;

            } else if ((that.an[k]).img == "omoro") {
              this.router.navigate(['/omoro']);
            }

            k++;
            if ((k == (end_num - st_num) + 2) || (that.errorHappen == true)) {  //最後にオモローを表示させる分を入れてるから    
              clearInterval(si)
            }
          }, 1000)
          });

        // 
  
      });
    }
  
  }

          
*/


 
