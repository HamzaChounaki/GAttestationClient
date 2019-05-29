import { TestBed } from '@angular/core/testing';

import { typecompteService } from './typecompte.service';

describe('typecompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const typecompte: typecompteService = TestBed.get(typecompteService);
    expect(typecompte).toBeTruthy();
  });
});
