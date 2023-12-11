import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleComponent } from './single/single.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MoreCocktailsComponent } from './more-cocktails/more-cocktails.component';
import { SelectComponent } from './select/select.component';
import { nonAlcoholicPipe } from './pipes/non-alcoholic.pipe';
import { categoryPipe } from './pipes/category.pipe';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ImageComponent } from './image/image.component';
@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SingleComponent,
    HomeComponent,
    LoaderComponent,
    InputSearchComponent,
    MoreCocktailsComponent,
    InputSearchComponent,
    SelectComponent,
    nonAlcoholicPipe,
    categoryPipe,
    SkeletonComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
