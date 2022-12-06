import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { AccountComponent } from './components/pages/account/account.component';
import { LoginComponent } from './components/pages/login/login.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { SneakersService } from './services/sneakers.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [SneakersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
