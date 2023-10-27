import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/@shared/material/material.module';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [MaterialModule]
})
export class RegistrationFormComponent  implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 @ViewChild('registrationModal') registrationModal: any;

  openRegistrationModal(){
    this.registrationModal.show()
  }

}
