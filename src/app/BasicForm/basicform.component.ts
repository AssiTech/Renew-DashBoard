import { Component } from '@angular/core';

export interface Name {
    value: string;
    viewValue: string;
  }
@Component({
    selector: 'basicform',
    templateUrl: './basicform.component.html',
    styleUrls: ['./basicform.component.css']
  })
  export class BasicFormComponent {

    names: Name[] = [
    {value: 'm-0', viewValue: 'Miss'},
    {value: 'm-1', viewValue: 'Mrs'},
    {value: 'm-2', viewValue: 'Mr'},
  ];
  }
