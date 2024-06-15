import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { OverviewComponent } from './Overview/Overview.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [	
    AppComponent,
      NavBarComponent,
      OverviewComponent
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
