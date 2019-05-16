import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { AdminComponent } from '../admin/admin.component';



export const mainRoutes : Routes = [
  { path:"main", component:MainPageComponent},
  { path:"home", component:MainPageComponent},
  { path:"adminhome", component:AdminComponent},
]