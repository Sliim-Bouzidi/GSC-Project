import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './Overview/Overview.component'; 
import { MonthComponent } from './Month/Month.component';
const routes: Routes = [
  { path: 'Clients/:id', component: OverviewComponent },
  { path: '', component: MonthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
