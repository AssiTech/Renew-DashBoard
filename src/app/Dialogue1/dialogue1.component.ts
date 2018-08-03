import {Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../Dialogue/dialogue.component';


@Component({
    selector: 'dialogue1',
    templateUrl: './dialogue1.component.html',
  })
  export class Dialogue1Component{
  
    constructor(
      public dialogRef: MatDialogRef<Dialogue1Component>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }