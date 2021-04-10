import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Routes  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowresultsComponent } from './showresults/showresults.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowresultsComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,FormsModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
