import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './determinante/home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { UbicacionGanadoComponent } from './ubicacion-ganado/ubicacion-ganado.component';
import { ZonaAnalisisComponent } from './zona-analisis/zona-analisis.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        UbicacionGanadoComponent,
        ZonaAnalisisComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
