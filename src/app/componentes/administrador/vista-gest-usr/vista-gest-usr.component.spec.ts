import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGestUsrComponent } from './vista-gest-usr.component';

describe('VistaGestUsrComponent', () => {
  let component: VistaGestUsrComponent;
  let fixture: ComponentFixture<VistaGestUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaGestUsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaGestUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
