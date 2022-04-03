import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { MainComponent } from './components/main/main.component';
import { TopScoresComponent } from './components/top-scores/top-scores.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'game', component: GameComponent },
  { path: 'score', component: TopScoresComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
