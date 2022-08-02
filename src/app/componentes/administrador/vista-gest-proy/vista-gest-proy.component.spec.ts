import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGestProyComponent } from './vista-gest-proy.component';

describe('VistaGestProyComponent', () => {
  let component: VistaGestProyComponent;
  let fixture: ComponentFixture<VistaGestProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaGestProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaGestProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
