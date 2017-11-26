import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BlogServiceService} from "./blog-service.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:"login",component:LoginComponent},
      {path:"home",component:BlogPageComponent},
      {path:"register",component:RegisterComponent},
      {path:"",component:BlogPageComponent}])
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
