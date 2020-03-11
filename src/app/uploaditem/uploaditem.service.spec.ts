import { TestBed } from '@angular/core/testing';

import { UploaditemService } from './uploaditem.service';

describe('UploaditemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploaditemService = TestBed.get(UploaditemService);
    expect(service).toBeTruthy();
  });
});
