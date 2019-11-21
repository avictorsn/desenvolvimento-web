import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupFormComponent } from './flashcard-group-form.component';

describe('FlashcardGroupFormComponent', () => {
  let component: FlashcardGroupFormComponent;
  let fixture: ComponentFixture<FlashcardGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
