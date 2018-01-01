import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent},
      { path: "menu", component: MenuComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
