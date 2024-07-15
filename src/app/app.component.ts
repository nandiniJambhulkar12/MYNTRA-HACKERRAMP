import { Component, OnInit } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { DataService } from './servises/data.service';
import { Orders } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'trendz';

  searchValue: any;
  filterSearch: any[] = [];
  searchList: any = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.resetOrders();
    const orderDetails: any = this.dataService.orderDetails;
    const sortedList = orderDetails ? orderDetails.sort((a: any, b: any) => a.name > b.name) : [];
    let dataList: any = [];
    if(sortedList){
      sortedList.forEach((data: any) => {
        dataList.push(data.name);
      })
    }
    this.searchList = dataList;
  }

  filterSearchData(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.searchList as any[]).length; i++) {
      let searchPar = (this.searchList as any[])[i];
      if (searchPar.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(searchPar);
      }
    }

    this.filterSearch = filtered;
  }

  getByFilter() {
    if(this.dataService.isDeatil) {
      this.dataService.isDeatil = false;
      this.dataService.typeDetails = '';
      this.dataService.nameSelected = '';
      this.searchValue = '';
    } else {
      this.dataService.isDeatil = true;
      this.dataService.typeDetails = '';
      this.dataService.nameSelected = this.searchValue;
    }
    
  }
}
