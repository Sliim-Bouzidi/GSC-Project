import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { OverviewComponent } from './Overview/Overview.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [	
    AppComponent,
      OverviewComponent
=======
import { NavBarComponent } from './NavBar/NavBar.component';

@NgModule({
  declarations: [	
    AppComponent,
      NavBarComponent
>>>>>>> 30491ed1a51f950fbd6232ca6aed4e4cf5036d4c
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
