import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionGanadoComponent } from './ubicacion-ganado.component';

describe('UbicacionGanadoComponent', () => {
  let component: UbicacionGanadoComponent;
  let fixture: ComponentFixture<UbicacionGanadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionGanadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionGanadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
