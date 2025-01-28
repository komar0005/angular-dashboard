import { Routes } from '@angular/router';
import { LoginComponent } from './sections/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './sections/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    title: 'Dashboard',
    children: [{ path: '', component: HomeComponent }],
  },
];
