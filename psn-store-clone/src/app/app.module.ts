import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/header/toolbar/toolbar.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { MenuBarComponent } from './components/header/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/header/nav-bar/dropdown/dropdown.component';
import { SearchBtnComponent } from './components/header/nav-bar/search-btn/search-btn.component';
import { ButtonHomeComponent } from './components/button-home/button-home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardGamesComponent } from './components/card-games/card-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    NavBarComponent,
    MenuBarComponent,
    HomeComponent,
    FooterComponent,
    DropdownComponent,
    SearchBtnComponent,
    ButtonHomeComponent,
    BannerComponent,
    CardGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
