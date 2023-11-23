import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleComponent } from './single/single.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SkelettonListItemComponent } from './components/skeletton-list-item/skeletton-list-item.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MoreCocktailsComponent } from './more-cocktails/more-cocktails.component';
@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SingleComponent,
    HomeComponent,
    LoaderComponent,
    SkelettonListItemComponent,
    InputSearchComponent,
    MoreCocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
