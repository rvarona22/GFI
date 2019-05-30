import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login.component';
import { PelisComponent } from './components/pelis.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: LoginComponent},
    {path: 'pelis', component: PelisComponent},
    {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
