import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRepository } from '../domain/repositories/heroes.repositories';
import { GetHeroesUseCase } from '../domain/usecases/get-heroes.usecase';
import { HeroeImplementationRepository } from './repositories/heroe/heroe-implementation.repository';





// const getHeroesUseCaseFactory = (heroeRepo: HeroesRepository) => new GetHeroesUseCase(heroeRepo);
// export const getHeroesUseCaseProvider = {
//   provide: GetHeroesUseCase,
//   useFactory: getHeroesUseCaseFactory,
//   deps: [HeroesRepository],
// };





@NgModule({
  providers: [
    // getHeroesUseCaseProvider,
    // { provide: HeroesRepository, useClass: HeroeImplementationRepository },
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataModule { }
