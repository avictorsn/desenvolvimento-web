import { TestBed } from '@angular/core/testing';

import { SelectFlashcardGroupService } from './select-flashcard-group.service';

describe('SelectFlashcardGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectFlashcardGroupService = TestBed.get(SelectFlashcardGroupService);
    expect(service).toBeTruthy();
  });
});
