import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ListItemComponent } from '@components/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { InputSearchComponent } from '@app/components/input-search/input-search.component';
@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    InputSearchComponent
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
