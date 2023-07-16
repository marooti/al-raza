import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberModule } from "primeng/inputnumber";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { MatStepperModule } from '@angular/material/stepper';
import { ScrollTopModule } from 'primeng/scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { PrimengModule } from './shared/primeng.module';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './header/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavTextComponent } from './layout/nav-text/nav-text.component';
import { LandingComponent } from './landing/landing/landing.component';
import { PropertyCardComponent } from './popular-property/property-card/property-card.component';
import { CardListComponent } from './popular-property/card-list/card-list.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { FooterComponent } from './footer/footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, LayoutComponent,NavTextComponent, LandingComponent, PropertyCardComponent, CardListComponent, AboutUsComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    RatingModule,
    MatStepperModule,
    ScrollTopModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatIconModule,
    InputNumberModule,
    DropdownModule,
    


    // MatDatepickerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
