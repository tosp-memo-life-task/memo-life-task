import { NgModule } from '@angular/core';
import { UnauthenticatedComponent } from './pages/unauthenticated/unauthenticated.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/unauthenticated/login/login.component';
import { SignUpComponent } from './pages/unauthenticated/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/unauthenticated/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';
import { InvitationsComponent } from './pages/home/invitations/invitations.component';
import { ProfileComponent } from './pages/home/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'unauthenticated' },
  {
    path: 'unauthenticated',
    component: UnauthenticatedComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'invitations', component: InvitationsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: NbLoginComponent
      },
      {
        path: 'register',
        component: NbRegisterComponent
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
