import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanejamentoComponent } from './lista-planejamento.component';

describe('ListaPlanejamentoComponent', () => {
  let component: ListaPlanejamentoComponent;
  let fixture: ComponentFixture<ListaPlanejamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanejamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
