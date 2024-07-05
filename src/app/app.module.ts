import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAlphaComponent } from './component-alpha/component-alpha.component';
import { ComponentBetaComponent } from './component-beta/component-beta.component';
import { ComponentCharlieComponent } from './component-charlie/component-charlie.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAlphaComponent,
    ComponentBetaComponent,
    ComponentCharlieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
