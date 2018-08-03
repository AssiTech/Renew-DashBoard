import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
   
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  
];

@Component({
    selector: 'basictable',
    templateUrl: './basictable.component.html',
    styleUrls: ['./basictable.component.css']
  })
  export class BasicTableComponent {
    displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
    columnsToDisplay: string[] = this.displayedColumns.slice();
    data: PeriodicElement[] = ELEMENT_DATA;
    dataSource = ELEMENT_DATA;
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // dataSource: any;
  
    // ngOnInit() {
    //   this.dataSource.paginator = this.paginator;
    // }
    addColumn() {
      const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
      this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
  
    removeColumn() {
      if (this.columnsToDisplay.length) {
        this.columnsToDisplay.pop();
      }
    }
  
    shuffle() {
      let currentIndex = this.columnsToDisplay.length;
      while (0 !== currentIndex) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // Swap
        let temp = this.columnsToDisplay[currentIndex];
        this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
        this.columnsToDisplay[randomIndex] = temp;
      }
    }
  }