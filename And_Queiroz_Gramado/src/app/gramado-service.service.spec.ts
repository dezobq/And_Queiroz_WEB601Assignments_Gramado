import { TestBed } from '@angular/core/testing';

import { GramadoServiceService } from './gramado-service.service';

describe('GramadoServiceService', () => {
  let service: GramadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GramadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
