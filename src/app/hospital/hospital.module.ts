import { MaterialModule } from './../@shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
  declarations: [
    RegistrationFormComponent

  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

  ]
})
export class HospitalModule { }
