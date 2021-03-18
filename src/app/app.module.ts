import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './@shared/components/modal/modal.component';
import { HeaderComponent } from './@shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './@shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
