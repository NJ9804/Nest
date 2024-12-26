import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StatesComponent } from './page/states/states.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { CardComponent } from './page/card/card.component';
import { SingleStateComponent } from './page/single-state/single-state.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'card', component: StatesComponent },
  { path: 'contact', component: ContactComponent },
  {path:'states/:id',component:SingleStateComponent}

];
