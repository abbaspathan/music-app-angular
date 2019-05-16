import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main-page.routes';

@NgModule({
   declarations:[
       MainPageComponent
   ],
   imports:[
    BrowserModule,

    RouterModule.forChild(mainRoutes)
   ],
   exports:[
    MainPageComponent
   ]
})
export class MainPageModule{

}