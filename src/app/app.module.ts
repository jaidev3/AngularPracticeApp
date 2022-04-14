import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { TodoComponent } from './todo/todo.component';
import { LoginService } from './login.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    WelcomeComponent,
    AdminComponent,
    TodoComponent,
  ],
  imports: [BrowserModule,HttpClientModule,AppRoutingModule,FormsModule],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
