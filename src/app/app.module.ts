import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';
import { TopScoresComponent } from './components/top-scores/top-scores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

///material
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CellComponent } from './components/game/cell/cell.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FinalScoreDialogComponent } from './components/game/final-score-dialog/final-score-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameComponent,
    TopScoresComponent,
    CellComponent,
    FinalScoreDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [FinalScoreDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
