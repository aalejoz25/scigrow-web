import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProyectosUsuarioComponent } from './vista-proyectos-usuario.component';

describe('VistaProyectosUsuarioComponent', () => {
  let component: VistaProyectosUsuarioComponent;
  let fixture: ComponentFixture<VistaProyectosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProyectosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaProyectosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
