import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AccountComponent } from './components/pages/account/account.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'catalogo', component: CatalogComponent},
  {path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
