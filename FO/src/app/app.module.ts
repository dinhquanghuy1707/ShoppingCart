import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './core/layout/navbar';
import { SharedModule } from './shared'
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),

    NavbarModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
