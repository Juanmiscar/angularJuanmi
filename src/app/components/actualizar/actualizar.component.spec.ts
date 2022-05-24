import { ComponentFixture, TestBed } from '@angular/core/testing';

import { librosAngularJuanmiDetailsComponent } from './actualizar.component';

describe('librosAngularJuanmiDetailsComponent', () => {
  let component: librosAngularJuanmiDetailsComponent;
  let fixture: ComponentFixture<librosAngularJuanmiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ librosAngularJuanmiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(librosAngularJuanmiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
