import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TopSectionComponent } from './top-section/top-section.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ACCESSORIESComponent } from './accessories/accessories.component';
import { OurNewsComponent } from './our-news/our-news.component';
@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    FooterComponent,
    ProductsComponent,
    ContactUsComponent,
    ACCESSORIESComponent,
    OurNewsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
