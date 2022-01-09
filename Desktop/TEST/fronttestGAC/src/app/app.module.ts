import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './components/employes/employes.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkunitComponent } from './components/workunit/workunit.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    WorkunitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
