import { TestBed } from '@angular/core/testing';

import { PlasmaService } from './plasma.service';

describe('PlasmaService', () => {
  let service: PlasmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlasmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
