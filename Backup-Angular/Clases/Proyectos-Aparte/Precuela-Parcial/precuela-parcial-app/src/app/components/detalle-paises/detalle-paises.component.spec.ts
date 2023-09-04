import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisesComponent } from './detalle-paises.component';

describe('DetallePaisesComponent', () => {
  let component: DetallePaisesComponent;
  let fixture: ComponentFixture<DetallePaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
