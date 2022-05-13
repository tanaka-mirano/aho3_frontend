import { TestBed } from '@angular/core/testing';

import { SoundmusicService } from './soundmusic.service';

describe('SoundmusicService', () => {
  let service: SoundmusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundmusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
