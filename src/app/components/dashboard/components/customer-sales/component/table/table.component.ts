import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dtOptions: any = {};

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  tableData: {date: Date, software: string, shop: string, value: number}[] = [
    { date: new Date(2022, 11, 9), software: 'Easy PosLite', shop: 'NSH', value: 30000 },
    { date: new Date(2021, 5, 15), software: 'Adobe Photoshop', shop: 'Best Buy', value: 20099 },
    { date: new Date(2022, 3, 30), software: 'Windows 10 Pro', shop: 'Microsoft Store', value: 19999 },
    { date: new Date(2022, 10, 12), software: 'Easy PosLite', shop: 'Shop 1', value: 28000 },
    { date: new Date(2022, 2, 1), software: 'Easy PosLite', shop: 'Naivas', value: 29500 },
    { date: new Date(2021, 5, 20), software: 'Easy PosLite', shop: 'Chandarana', value: 31000 },
    { date: new Date(2021, 10, 31), software: 'Easy PosLite', shop: 'Carrefour', value: (255 * 123) },
    { date: new Date(2021, 12, 25), software: 'Easy PosLite', shop: 'QuickMart', value: 99000 },
    { date: new Date(2022, 7, 15), software: 'Easy PosLite', shop: 'Uchumi', value: 55300 },
    { date: new Date(2022, 8, 2), software: 'Easy PosLite', shop: 'Game', value: (1000 * 123) },
    { date: new Date(2022, 9, 1), software: 'Easy PosLite', shop: 'Shoprite', value: 100000 },
    { date: new Date(2022, 3, 26), software: 'Easy PosLite', shop: 'Tuskeys', value: 20800 },
    { date: new Date(2022, 11, 9), software: 'Easy PosLite', shop: 'Walmart', value: Math.floor(Math.random() * 100000) },
    { date: new Date(2021, 5, 15), software: 'Adobe Photoshop', shop: 'Best Buy', value: Math.floor(Math.random() * 100000) },
    { date: new Date(2022, 3, 30), software: 'Windows 10 Pro', shop: 'Target', value: Math.floor(Math.random() * 100000) },
    { date: new Date(2022, 10, 12), software: 'Easy PosLite', shop: 'Costco', value: Math.floor(Math.random() * 100000) },
    { date: new Date(2022, 2, 1), software: 'Easy PosLite', shop: 'Tesco', value: Math.floor(Math.random() * 100000) },
    { date: new Date(2021, 5, 20), software: 'Easy PosLite', shop: 'M&S', value: Math.floor(Math.random() * 100000) },    

  ];
  currentSort: string = "date";
  sortDirection: string = "asc";

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0, 'asc']],
      // responsive: true
    };
  }
  
  sortTable(col: string): void {
    if(this.currentSort === col) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
        this.currentSort = col;
        this.sortDirection = "asc";
    }
    this.dtOptions.order = [[this.tableData.findIndex(item => item.hasOwnProperty(col)), this.sortDirection]];
  }
}
