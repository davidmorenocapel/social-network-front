import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './containers/post/post.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { UserInfoComponent } from './containers/user-info/user-info.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'post', component:PostComponent},
  {path: 'timeline', component:TimelineComponent},
  {path: 'userinfo', component:UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
