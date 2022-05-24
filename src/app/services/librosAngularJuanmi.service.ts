import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { librosAngularJuanmi } from '../models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class librosAngularJuanmiService {

  private dbPath = '/libros';

  librosAngularJuanmisRef: AngularFireList<librosAngularJuanmi>;

  constructor(private db: AngularFireDatabase) {
    this.librosAngularJuanmisRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<librosAngularJuanmi> {
    return this.librosAngularJuanmisRef;
  }

  create(librosAngularJuanmi: librosAngularJuanmi): any {
    return this.librosAngularJuanmisRef.push(librosAngularJuanmi);
  }

  update(key: string, value: any): Promise<void> {
    return this.librosAngularJuanmisRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.librosAngularJuanmisRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.librosAngularJuanmisRef.remove();
  }
}
