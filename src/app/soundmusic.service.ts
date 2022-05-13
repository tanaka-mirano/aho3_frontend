import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundmusicService {

  constructor() { }

  playAudio(): void {
    const audio = new Audio();
    audio.src = 'assets/sound/background.mp3';
    audio.load();
    audio.play();
  }

  playAudio2(): void {
    const audio2 = new Audio();
    audio2.src = 'assets/sound/ahomusic.mp3';
    audio2.load();
    audio2.play();
  }

  playAudio3(): void {
    const audio3 = new Audio();
    audio3.src = 'assets/sound/omoro.mp3';
    audio3.load();
    audio3.play();
  }
}