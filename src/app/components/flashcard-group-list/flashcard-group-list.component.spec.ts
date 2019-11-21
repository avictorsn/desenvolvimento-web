import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupListComponent } from './flashcard-group-list.component';

describe('FlashcardGroupListComponent', () => {
  let component: FlashcardGroupListComponent;
  let fixture: ComponentFixture<FlashcardGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
