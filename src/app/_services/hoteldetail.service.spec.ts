import { TestBed } from '@angular/core/testing';

import { HoteldetailService } from './hoteldetail.service';

describe('HoteldetailService', () => {
  let service: HoteldetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteldetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
