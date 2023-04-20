import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioNombreyapellidoComponent } from './ejercicio-nombreyapellido.component';

describe('EjercicioNombreyapellidoComponent', () => {
  let component: EjercicioNombreyapellidoComponent;
  let fixture: ComponentFixture<EjercicioNombreyapellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioNombreyapellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioNombreyapellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
