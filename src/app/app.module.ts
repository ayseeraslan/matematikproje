import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CozumComponent } from './cozum/cozum.component';
import { UslusayilarComponent } from './uslusayilar/uslusayilar.component';
import { KoklusayilarComponent } from './koklusayilar/koklusayilar.component';
import { CarpanComponent } from './carpan/carpan.component';
import { EsitsizlikComponent } from './esitsizlik/esitsizlik.component';
import { ObebokekComponent } from './obebokek/obebokek.component';
import { FaizproblemComponent } from './faizproblem/faizproblem.component';
import { FormsModule } from '@angular/forms';
import { SoruFilterPipe } from './pipes/soru-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    NavbarComponent,
    CozumComponent,
    UslusayilarComponent,
    KoklusayilarComponent,
    CarpanComponent,
    EsitsizlikComponent,
    ObebokekComponent,
    FaizproblemComponent,
    SoruFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'anasayfa', component:AnasayfaComponent},
      {path:'carpan', component:CarpanComponent},
      {path:'esitsizlik', component:EsitsizlikComponent},
      {path:'faizproblem', component:FaizproblemComponent},
      {path:'uslusayilar', component:UslusayilarComponent},
      {path:'koklusayilar', component:KoklusayilarComponent},
      {path:'obebokek', component:ObebokekComponent},
      { path: '**',   redirectTo: '/anasayfa', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
