import { TestBed } from '@angular/core/testing';

import { MusicserviceService } from './musicservice.service';

describe('MusicserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicserviceService = TestBed.get(MusicserviceService);
    expect(service).toBeTruthy();
  });
});
