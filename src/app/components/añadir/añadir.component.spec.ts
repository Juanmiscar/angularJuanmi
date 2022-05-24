import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibrosAngularJuanmiComponent } from './añadir.component';

describe('AddlibrosAngularJuanmiComponent', () => {
  let component: AddlibrosAngularJuanmiComponent;
  let fixture: ComponentFixture<AddlibrosAngularJuanmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlibrosAngularJuanmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlibrosAngularJuanmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
