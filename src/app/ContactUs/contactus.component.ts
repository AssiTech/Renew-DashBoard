import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
  import {ErrorStateMatcher} from '@angular/material/core';

   /*Error when invalid control is dirty, touched, or submitted. */
   export class MyErrorStateMatcher implements ErrorStateMatcher {
   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface State {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
  })
  export class ContactUsComponent {
    title = 'Hello World!!!!...';
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
   ]);

    matcher = new MyErrorStateMatcher();
    states: State[] = [
    {value: 'ap-0', viewValue: 'Andhra Pradesh'},
    {value: 'assam-1', viewValue: 'Assam'},
    {value: 'bihar-2', viewValue: 'Bihar'},
    {value: 'gujarat-3', viewValue: 'Gujarat'},
    {value: 'kerala-4', viewValue: 'Kerala'},
    {value: 'maharashtra-5', viewValue: 'Maharashtra'},
    {value: 'odisa-6', viewValue: 'Odisa'},
    {value: 'westB-7', viewValue: 'West Bengal'},
    {value: 'karnataka-8', viewValue: 'Karnataka'},
   {value: 'telangana-9', viewValue: 'Telangana'}
  ];
  }