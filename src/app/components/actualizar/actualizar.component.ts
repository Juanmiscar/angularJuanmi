import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { librosAngularJuanmi } from 'src/app/models/libros.model';
import { librosAngularJuanmiService } from 'src/app/services/librosAngularJuanmi.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class librosAngularJuanmiDetailsComponent implements OnInit {

  @Input() librosAngularJuanmi?: librosAngularJuanmi;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentlibrosAngularJuanmi: librosAngularJuanmi = {
    title: '',
    autor: '',
    publicacion: false
  };
  message = '';

  constructor(private librosAngularJuanmiService: librosAngularJuanmiService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentlibrosAngularJuanmi = { ...this.librosAngularJuanmi };
  }

  updatepublicacion(status: boolean): void {
    if (this.currentlibrosAngularJuanmi.key) {
      this.librosAngularJuanmiService.update(this.currentlibrosAngularJuanmi.key, { publicacion: status })
      .then(() => {
        this.currentlibrosAngularJuanmi.publicacion = status;
        this.message = 'Ha sido actualizado correctamente!';
      })
      .catch(err => console.log(err));
    }
  }

  updatelibrosAngularJuanmi(): void {
    const data = {
      title: this.currentlibrosAngularJuanmi.title,
      autor: this.currentlibrosAngularJuanmi.autor
    };

    if (this.currentlibrosAngularJuanmi.key) {
      this.librosAngularJuanmiService.update(this.currentlibrosAngularJuanmi.key, data)
        .then(() => this.message = 'Ha sido actualizado correctamente!')
        .catch(err => console.log(err));
    }
  }

  deletelibrosAngularJuanmi(): void {
    if (this.currentlibrosAngularJuanmi.key) {
      this.librosAngularJuanmiService.delete(this.currentlibrosAngularJuanmi.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'Ha sido actualizado correctamente!';
        })
        .catch(err => console.log(err));
    }
  }

}
