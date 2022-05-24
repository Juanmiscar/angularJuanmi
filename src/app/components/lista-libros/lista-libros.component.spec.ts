import { ComponentFixture, TestBed } from '@angular/core/testing';

import { librosAngularJuanmisListComponent } from './lista-libros.component';

describe('librosAngularJuanmisListComponent', () => {
  let component: librosAngularJuanmisListComponent;
  let fixture: ComponentFixture<librosAngularJuanmisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ librosAngularJuanmisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(librosAngularJuanmisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
