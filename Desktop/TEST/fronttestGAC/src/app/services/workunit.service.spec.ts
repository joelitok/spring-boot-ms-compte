import { TestBed } from '@angular/core/testing';

import { WorkunitService } from './workunit.service';

describe('WorkunitService', () => {
  let service: WorkunitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkunitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
