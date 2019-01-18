import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent} from './components/general/general.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { FormsComponent } from './components/forms/forms.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

export const ROUTING_DECLARATIONS = [
  HomeComponent,
  GeneralComponent,
  RolesComponent,
  UsersComponent,
  FormsComponent,
  EpisodesComponent
];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'general-settings', component: GeneralComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
