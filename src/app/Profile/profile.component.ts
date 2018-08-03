import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/*Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
 const isSubmitted = form && form.submitted;
 return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
}
@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  export class ProfileComponent {
    title = 'Hello World!!!!...';
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
   ]);
  }