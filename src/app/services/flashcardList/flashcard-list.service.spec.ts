import { TestBed } from '@angular/core/testing';

import { FlashcardListService } from './flashcard-list.service';

describe('FlashcardListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashcardListService = TestBed.get(FlashcardListService);
    expect(service).toBeTruthy();
  });
});
