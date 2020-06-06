import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { FollowedComponent } from './component/followed/followed.component';
import { FollowingComponent } from './component/following/following.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { RegisterComponent } from './component/register/register.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UsersComponent } from './component/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FollowedComponent,
    FollowingComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PublicationsComponent,
    RegisterComponent,
    SidebarComponent,
    TimelineComponent,
    UserEditComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
