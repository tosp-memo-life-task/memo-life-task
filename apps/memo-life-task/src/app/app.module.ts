import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UnauthenticatedComponent } from './pages/unauthenticated/unauthenticated.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/unauthenticated/login/login.component';
import { SignUpComponent } from './pages/unauthenticated/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/unauthenticated/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './common/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
