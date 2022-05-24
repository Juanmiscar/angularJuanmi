import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { bbdd } from '../bbdd/bbdd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlibrosAngularJuanmiComponent } from './components/añadir/añadir.component';
import { librosAngularJuanmiDetailsComponent } from './components/actualizar/actualizar.component';
import { librosAngularJuanmisListComponent } from './components/lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    AddlibrosAngularJuanmiComponent,
    librosAngularJuanmiDetailsComponent,
    librosAngularJuanmisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(bbdd.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
