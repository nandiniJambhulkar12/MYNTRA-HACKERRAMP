import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../servises/data.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  orderDetailsList: any = [];
  layout: string = 'list';
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  @ViewChild('dv') elementRef: ElementRef | undefined;
  

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.resetOrders();
    const orderDetails: any = this.dataService.orderDetails;
    const sortedList = orderDetails ? orderDetails.sort((a: any, b: any) => a.name > b.name) : [];
    if(this.dataService.typeDetails !== ''){
      let typeData: any = [];
      sortedList.forEach((details:any) => {
        if(details.type === this.dataService.typeDetails) {
          typeData.push(details);
        }
      });
      this.orderDetailsList = typeData;
    } else if(this.dataService.nameSelected !== '') {
      let typeData: any = [];
      sortedList.forEach((details:any) => {
        if(details.name === this.dataService.nameSelected) {
          typeData.push(details);
        }
      });
      this.orderDetailsList = typeData;
    }
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  getSeverity(order: any) {
    switch (order.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return 'danger';
    }
  }

  /* onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  } */
}
