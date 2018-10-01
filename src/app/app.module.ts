import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routes";
import {NotFoundComponent} from "./notFound/notFound.component";
import {HomeComponent} from "./main/home/home.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MainComponent} from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'albright-lions'}),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
