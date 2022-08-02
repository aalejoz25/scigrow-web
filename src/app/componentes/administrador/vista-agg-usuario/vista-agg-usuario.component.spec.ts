import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAggUsuarioComponent } from './vista-agg-usuario.component';

describe('VistaAggUsuarioComponent', () => {
  let component: VistaAggUsuarioComponent;
  let fixture: ComponentFixture<VistaAggUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAggUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAggUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
