import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPlanejamentoComponent } from './criar-planejamento.component';

describe('CriarPlanejamentoComponent', () => {
  let component: CriarPlanejamentoComponent;
  let fixture: ComponentFixture<CriarPlanejamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPlanejamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
