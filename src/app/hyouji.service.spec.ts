import { TestBed } from '@angular/core/testing';

import { HyoujiService } from './hyouji.service';

describe('HyoujiService', () => {
  let service: HyoujiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyoujiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
