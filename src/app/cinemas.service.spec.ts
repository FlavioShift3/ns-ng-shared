import { TestBed, inject } from '@angular/core/testing';

import { CinemasService } from './cinemas.service';

describe('CinemasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemasService]
    });
  });

  it('should be created', inject([CinemasService], (service: CinemasService) => {
    expect(service).toBeTruthy();
  }));
});
