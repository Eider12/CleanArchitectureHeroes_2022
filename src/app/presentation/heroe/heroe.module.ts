import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { MaterialModule } from '../../material/material.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeRoutingModule } from './heroe-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfirmarComponent,
    HeroeTarjetaComponent,
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroeRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HeroeModule { }
