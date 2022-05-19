import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { SoundmusicService } from '../soundmusic.service';

@Component({
  selector: 'app-omoro',
  templateUrl: './omoro.component.html',
  styleUrls: ['./omoro.component.css']
})
export class OmoroComponent implements OnInit {

  constructor(
    //private OmoroSound: HTMLAudioElement = new Audio('sound/omoro.mp3')
    private soundmusicService: SoundmusicService
  ) { }

  end_voice: string = "オモロー";
  img_src: any;
  r_button:Number=0;
  good_num:number=0;

  ngOnInit(): void {
    var random = Math.random() * 4;
    var integer = Math.floor(random);
    this.img_src = `assets/img/end/${integer}.jpg`;
    this.soundmusicService.playAudio3();


  }

  reply(): void {
    this.r_button=1;
  }

  good(): void {
    this.good_num=this.good_num+1;
  }

}
