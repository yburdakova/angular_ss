import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', component: SearchPageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'profile', component: ProfilePageComponent}
  ]}
]
