import { NgModule } from '@angular/core';
import { UnauthenticatedComponent } from './pages/unauthenticated/unauthenticated.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/unauthenticated/login/login.component';
import { SignUpComponent } from './pages/unauthenticated/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/unauthenticated/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'unauthenticated' },
  {
    path: 'unauthenticated',
    component: UnauthenticatedComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
