import { Component, OnInit } from '@angular/core';
import { librosAngularJuanmiService } from 'src/app/services/librosAngularJuanmi.service';
import { librosAngularJuanmi } from 'src/app/models/libros.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class librosAngularJuanmisListComponent implements OnInit {

  librosAngularJuanmis?: librosAngularJuanmi[];
  currentlibrosAngularJuanmi?: librosAngularJuanmi;
  currentIndex = -1;
  title = '';

  constructor(private librosAngularJuanmiService: librosAngularJuanmiService) { }

  ngOnInit(): void {
    this.retrievelibrosAngularJuanmis();
  }

  refreshList(): void {
    this.currentlibrosAngularJuanmi = undefined;
    this.currentIndex = -1;
    this.retrievelibrosAngularJuanmis();
  }

  retrievelibrosAngularJuanmis(): void {
    this.librosAngularJuanmiService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.librosAngularJuanmis = data;
    });
  }

  setActivelibrosAngularJuanmi(librosAngularJuanmi: librosAngularJuanmi, index: number): void {
    this.currentlibrosAngularJuanmi = librosAngularJuanmi;
    this.currentIndex = index;
  }

  removeAlllibrosAngularJuanmis(): void {
    this.librosAngularJuanmiService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
