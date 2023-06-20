import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContComponent } from './components/cont/cont.component';
import { PantarikshComponent } from './pantariksh/pantariksh.component';
import { ConstructionComponent } from './construction/construction.component';
import { RightOverlayComponent } from './components/right-overlay/right-overlay.component';
import { LeftOverlayComponent } from './components/left-overlay/left-overlay.component';
const routes: Routes=[
 { path:'',
  component :AboutusComponent
},
{ path:'contact',
component :ContactusComponent
},
{
  path:"pantariksh",
  component: PantarikshComponent
},
{
  path:"construction",
  component: ConstructionComponent
}



];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutusComponent,
    NewsletterComponent,
    ContactusComponent,
    NavbarComponent,
    ContComponent,
    PantarikshComponent,
    ConstructionComponent,
    RightOverlayComponent,
    LeftOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
