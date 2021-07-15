import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {AboutMeComponent} from './core/components/about-me/about-me.component';
import {LoadingComponent} from './core/components/loading/loading.component';
import {SesionComponent} from './core/components/sesion/sesion.component';

// Services
import {SesionesService} from './services/sesiones.service';

const routes: Routes = [
  {path: '', component: LoadingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'sesion/:id', component: SesionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    LoadingComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [AngularFirestore, SesionesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
