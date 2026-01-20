import { Routes } from '@angular/router';
import { FrontPage } from './components/pages/front-page/front-page';
import { LoginPage } from './components/pages/login-page/login-page';
import { RegisterPage } from './components/pages/register-page/register-page';
import { Dashboard } from './components/pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: FrontPage
    }
    ,
    {
        path: 'login',
        component: LoginPage
    }
    ,
    {
        path: 'register',
        component: RegisterPage
    }
    ,
    {
        path: 'dashboard',
        component: Dashboard
    }
];
