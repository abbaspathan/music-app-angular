import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MusicModule } from './music/music.module';
import { UserModule } from './user/user.module';
import { MainPageModule } from './main-page/main-page.module';
import { appRoutes } from './app.routes';
import { WelcomeComponent } from './welcome.component';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    MusicModule,
    RouterModule,
    UserModule,
    MainPageModule,
    AdminModule,




    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
