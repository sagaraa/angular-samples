import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListenerComponent } from './listener/listener.component';
import { ScoreKeeperComponent } from './score-keeper/score-keeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListenerComponent,
    ScoreKeeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
