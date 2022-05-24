import { Component, OnInit } from '@angular/core';
import { librosAngularJuanmi } from 'src/app/models/libros.model';
import { librosAngularJuanmiService } from 'src/app/services/librosAngularJuanmi.service';

@Component({
  selector: 'app-añadir',
  templateUrl: './añadir.component.html',
  styleUrls: ['./añadir.component.css']
})
export class AddlibrosAngularJuanmiComponent implements OnInit {

  librosAngularJuanmi: librosAngularJuanmi = new librosAngularJuanmi();
  submitted = false;

  constructor(private librosAngularJuanmiService: librosAngularJuanmiService) { }

  ngOnInit(): void {
  }

  savelibrosAngularJuanmi(): void {
    this.librosAngularJuanmiService.create(this.librosAngularJuanmi).then(() => {
      this.submitted = true;
    });
  }

  newlibrosAngularJuanmi(): void {
    this.submitted = false;
    this.librosAngularJuanmi = new librosAngularJuanmi();
  }

}
