//To import Angular router modules

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//To import components
import { HomeComponent } from './home/home.component';
import { ShoeComponent } from './shoe/shoe.component';
import { VideogameComponent } from './videogame/videogame.component';
import { CoursesComponent } from './courses/courses.component';
import { ExternalComponent } from './external/external.component';
import { ContactComponent } from './contact/contact.component';


//Routes array
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'shoes', component: ShoeComponent},
	{path: 'videogame', component: VideogameComponent},
	{path: 'courses', component: CoursesComponent},
	{path: 'courses/:name/:followers', component: CoursesComponent},
	{path: 'external', component: ExternalComponent},
	{path: 'external', component: ExternalComponent},
	{path: 'contact', component: ContactComponent},
	{path: '**', component: HomeComponent}
];


//To export the router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);