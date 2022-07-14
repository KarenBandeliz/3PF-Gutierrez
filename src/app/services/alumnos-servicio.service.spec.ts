import { TestBed } from '@angular/core/testing';

import { AlumnosServicioService } from './alumnos-servicio.service';

describe('AlumnosServicioService', () => {
  let service: AlumnosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
