import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { NebularModule } from './nebular/nebular.module';
import { HomeComponent } from './pages/home/home.component';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { InvitationsComponent } from './pages/home/invitations/invitations.component';
import { ProfileComponent } from './pages/home/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ProgressSpinnerComponent,
    DashboardComponent,
    HomeComponent,
    InvitationsComponent,
    ProfileComponent
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
    NbThemeModule.forRoot({ name: 'custom-theme' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email'
        })
      ],
      forms: {}
    }),
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
