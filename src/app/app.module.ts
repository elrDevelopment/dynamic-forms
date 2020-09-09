import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynoFormsComponent } from './dyno-forms/dyno-forms.component';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms';

@NgModule({
  declarations: [
    AppComponent,
    DynoFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RxReactiveFormsModule,
    RxReactiveDynamicFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
