import { Component, OnInit } from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { DataService } from '../../servises/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  

  filmsList: any = [];actorsList: any = [];
  featureActorsList: any = [];
  festiveList: any = [];
  festiveList2: any = [];
  ledies: any = [];
  ddlList: any = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.filmsList = [{ path: 'Dilwale final.jpg' }, { path: 'the archies-final.jpg' }, { path: 'chhochore-final.jpg' }];
    this.actorsList = [{ path: 'geet & aditya-final.jpg' }, { path: 'sarukh bts-final.jpg' }, { path: 'mumtaz-final.jpg' }, { path: 'piku-final.jpg' }];
    this.featureActorsList = [{ path: 'navya_final.jpg' }, { path: 'rohit saraf final.....jpg' }, { path: 'jaquline-final.jpg' }, { path: 'sid_fina;l.jpg' }];
    this.festiveList = [{ path: 'GUJRATLOOK.jpg' }, { path: 'Ramadhan.jpg' }, { path: 'GANAPATI_FINAL.gif' }];
    this.festiveList2 = [{ path: 'diwali-final.jpg' }, { path: 'HOLI GR.jpg' }, { path: 'pongalGIF.gif' }];
    this.ledies = [{ path: 'MALLIKA_FINAL.jpg' }, { path: 'AA.jpg' }, { path: 'FF.jpg' }, { path: 'BB.jpg' }, { path: 'WAHIDA-FINAL.jpg' }, { path: 'LAJOO-FINAL.jpg' }];
    this.ddlList = [{ path: 'rs.jpg' }, { path: 'priya.jpg' }, { path: 'sharma.jpg' }, { path: 'sidarth-ff.jpg' }];
  }

  getByCategort(name: string){
    this.dataService.isDeatil = true;
    this.dataService.typeDetails = name;
    this.dataService.nameSelected = '';
  }


  
}
