import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,

    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
