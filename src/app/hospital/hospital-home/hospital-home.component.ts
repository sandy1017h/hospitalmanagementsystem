import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef, ComponentFactoryResolver, Type, AfterViewInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { UtilityServiceService } from 'src/app/utility-service.service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

declare var $: any; // Declare jQuery to use it in Angular (if not already declared)

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent implements OnInit, AfterViewInit {
  title: string = 'hospitalmanagementsystem';

  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(public utilityService: UtilityServiceService, private navigationService: NavigationService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // You can perform initialization logic here
  }

  openRegisterModal(): void {
    // Ensure jQuery is loaded before trying to use it
    if (typeof $().modal !== 'undefined') {
      $('#openRegisterModal').modal('show');
    } else {
      console.error('jQuery or Bootstrap may not be properly loaded.');
    }
  }
  openLoginModal(): void {
    if (typeof $().modal !== 'undefined') {
      $('#anotherLoginModal').modal('show');
    } else {
      console.error('jQuery or Bootstrap may not be properly loaded.');
    }
  }
  closeModal(): void {
    // Ensure jQuery is loaded before trying to use it
    if (typeof $().modal !== 'undefined') {
      $('#openRegisterModal').modal('hide');
    } else {
      console.error('jQuery or Bootstrap may not be properly loaded.');
    }
  }
  closeModal2(): void {
    // Ensure jQuery is loaded before trying to use it
    if (typeof $().modal !== 'undefined') {
      $('#anotherLoginModal').modal('hide');
    } else {
      console.error('jQuery or Bootstrap may not be properly loaded.');
    }
  }




}
