import { TestBed } from '@angular/core/testing';

import { librosAngularJuanmiService } from './librosAngularJuanmi.service';

describe('librosAngularJuanmiService', () => {
  let service: librosAngularJuanmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(librosAngularJuanmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
