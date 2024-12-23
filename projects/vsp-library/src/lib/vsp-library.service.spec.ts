import { TestBed } from '@angular/core/testing';

import { VspLibraryService } from './vsp-library.service';

describe('VspLibraryService', () => {
  let service: VspLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VspLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
