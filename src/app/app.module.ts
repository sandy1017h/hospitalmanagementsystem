import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './@shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HospitalRoutingModule } from './hospital/hospital-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HospitalHomeComponent } from './hospital/hospital-home/hospital-home.component';




@NgModule({
  declarations: [
    AppComponent,
    HospitalHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule,
    HospitalRoutingModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('user');
        },
        allowedDomains: ['http://localhost:4200/'],
      },
    }),




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
