import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeAboutComponent } from './bike-about/bike-about.component';
import { BikeHomeComponent } from './bike-home/bike-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bikes',
    pathMatch: 'full' 
  },
  {
    path: 'bikes', 
    component: BikeHomeComponent
  },
  {
    path: 'about', 
    component: BikeAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
