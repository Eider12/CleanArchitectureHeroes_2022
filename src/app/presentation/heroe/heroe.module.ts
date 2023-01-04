import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeRoutingModule } from './heroe-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { GetHeroesUseCase } from 'src/app/domain/usecases/get-heroes.usecase';
import { HeroesRepository } from 'src/app/domain/repositories/heroes.repositories';
import { HeroeImplementationRepository } from 'src/app/data2/repositories/heroe/heroe-implementation.repository';
import { GetHeroePorIdUseCase } from 'src/app/domain/usecases/get-heroe-por-id.usecase';
import { BuscarHeroeUseCase } from 'src/app/domain/usecases/buscar-heroe.usecase';
import { AddHeroeUseCase } from 'src/app/domain/usecases/add-heroe.usecase';
import { ActualizarHeroeUseCase } from 'src/app/domain/usecases/actualizar-heroe.usecase';
import { DeleteHeroeUseCase } from 'src/app/domain/usecases/delete-heroe.usecase';



const getHeroesUseCaseFactory = (heroeRepo: HeroesRepository) => new GetHeroesUseCase(heroeRepo);
export const getHeroesUseCaseProvider = {
  provide: GetHeroesUseCase,
  useFactory: getHeroesUseCaseFactory,
  deps: [HeroesRepository],
};

const getHeroePorIdUseCaseFactory = (heroeRepo: HeroesRepository) => new GetHeroePorIdUseCase(heroeRepo);
export const getHeroePorIdUseCaseProvider = {
  provide: GetHeroePorIdUseCase,
  useFactory: getHeroePorIdUseCaseFactory,
  deps: [HeroesRepository],
};

const getSugerenciasUseCaseFactory = (heroeRepo: HeroesRepository) => new BuscarHeroeUseCase (heroeRepo);
export const getSugerenciasUseCaseProvider = {
  provide: BuscarHeroeUseCase,
  useFactory: getSugerenciasUseCaseFactory,
  deps: [HeroesRepository],
};

const agregarHeroeUseCaseFactory = (heroeRepo: HeroesRepository) => new AddHeroeUseCase(heroeRepo);
export const agregarHeroeUseCaseProvider = {
  provide: AddHeroeUseCase,
  useFactory: agregarHeroeUseCaseFactory,
  deps: [HeroesRepository],
};

const actualizarHeroeUseCaseFactory = (heroeRepo: HeroesRepository) => new ActualizarHeroeUseCase(heroeRepo);
export const actualizarHeroeUseCaseProvider = {
  provide: ActualizarHeroeUseCase,
  useFactory: actualizarHeroeUseCaseFactory,
  deps: [HeroesRepository],
};

const deleteHeroeUseCaseFactory = (heroeRepo: HeroesRepository) => new DeleteHeroeUseCase(heroeRepo);
export const deleteHeroeUseCaseProvider = {
  provide: DeleteHeroeUseCase,
  useFactory: deleteHeroeUseCaseFactory,
  deps: [HeroesRepository],
}

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
  ],
  providers: [
    getHeroesUseCaseProvider,
    getHeroePorIdUseCaseProvider,
    getSugerenciasUseCaseProvider,
    agregarHeroeUseCaseProvider,
    actualizarHeroeUseCaseProvider,
    deleteHeroeUseCaseProvider,
    { provide: HeroesRepository, useClass: HeroeImplementationRepository },
  ],
})
export class HeroeModule { }
