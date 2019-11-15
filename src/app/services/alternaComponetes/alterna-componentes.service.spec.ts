import { TestBed } from '@angular/core/testing';

import { AlternaComponentesService } from './alterna-componentes.service';

describe('AlternaComponentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlternaComponentesService = TestBed.get(AlternaComponentesService);
    expect(service).toBeTruthy();
  });
});
