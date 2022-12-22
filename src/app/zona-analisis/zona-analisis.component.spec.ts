import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAnalisisComponent } from './zona-analisis.component';

describe('ZonaAnalisisComponent', () => {
  let component: ZonaAnalisisComponent;
  let fixture: ComponentFixture<ZonaAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
