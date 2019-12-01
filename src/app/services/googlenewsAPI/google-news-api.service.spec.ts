import { TestBed } from '@angular/core/testing';

import { GoogleNewsApiService } from './google-news-api.service';

describe('GoogleNewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleNewsApiService = TestBed.get(GoogleNewsApiService);
    expect(service).toBeTruthy();
  });
});
