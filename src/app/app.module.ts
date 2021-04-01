import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './@shared/components/modal/modal.component';
import { HeaderComponent } from './@shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
