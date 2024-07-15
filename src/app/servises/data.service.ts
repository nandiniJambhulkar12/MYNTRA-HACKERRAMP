import { Injectable } from '@angular/core';
import { Orders } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  orderDetails: Orders[] = [];
  typeDetails: string = '';
  nameSelected: string = '';
  isDeatil: boolean = false;
  constructor() { }

  resetOrders(){
    this.orderDetails = [
      {id:1,type:'ledies',brand:'other',category:'Saree',path:'malika34.jpg',price:499,size:'L',name:'Heeramandi Malika saree',rating:5,inventoryStatus:'INSTOCK'},
      {id:1,type:'ledies',brand:'other',category:'Saree',path:'malika_saree.jpg',price:679,size:'L',name:'Heeramandi Malika saree',rating:5,inventoryStatus:'INSTOCK'},
      {id:1,type:'ledies',brand:'other',category:'Saree',path:'malik_saree2.jpg',price:1020,size:'L',name:'Heeramandi Malika saree',rating:5,inventoryStatus:'INSTOCK'},
      
      {id:2,type:'ledies',brand:'other',category:'Ethnic wear',path:'alam_saree1.jpg',price:521,size:'M',name: 'Heeramandi Alam dress',rating:4,inventoryStatus:'LOWSTOCK'},
       {id:2,type:'ledies',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'alam_2.jpg',price:889,size:'L',name:'Heeramandi Alam dress',rating:3.6,inventoryStatus:'INSTOCK'},
       {id:2,type:'ledies',brand:'HERE&NOW',category:'Ethnic wear',path:'alam3.jpg',price:759,size:'M',name:'Heeramandi Alam dress',rating:4.4,inventoryStatus:'OUT OF STOCK'},

       {id:1,type:'ledies',brand:'HERE&NOW',category:'Ethnic wear',path:'faridan45.jpg',price:1499,size:'S',name:'Heeramandi Fareedan dress',rating:4,inventoryStatus:'INSTOCK'},
       {id:1,type:'ledies',brand:'HERE&NOW',category:'Ethnic wear',path:'faridan.jpg',price:899,size:'L',name:'Heeramandi Fareedan dress',rating:5,inventoryStatus:'LAST TWO'},
       {id:1,type:'ledies',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'faridan2.jpg',price:780,size:'M',name:'Heeramandi Fareedan dress',rating:2,inventoryStatus:'INSTOCK'},
      
      {id:1,type:'ledies',brand:'Vbuyz',category:'Ethnic wear',path:'bibbo1.jpg',price:999,size:'L',name:'Heeramandi Bibbojaan dress',rating:5,inventoryStatus:'INSTOCK'},
      {id:1,type:'ledies',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'bibbo3.jpg',price:1499,size:'L',name:'Heeramandi Bibbojaan dress',rating:4.1,inventoryStatus:'FEW LEFT'},
      {id:1,type:'ledies',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'bii.jpg',price:499,size:'L',name:'Heeramandi Bibbojaan dress',rating:5,inventoryStatus:'INSTOCK'},

      

      {id:1,type:'ledies',brand:'Sangria',category:'Ethnic wear',path:'lajo1 (1).jpg',price:799,size:'ONE SIZE',name:'Heeramandi Lajjo dress',rating:5,inventoryStatus:'INSTOCK'},
      {id:1,type:'ledies',brand:'KALINI',category:'Saree',path:'lajo2.jpg',price:699,size:'ONE SIZE',name:'Heeramandi Lajjo saree',rating:4.4,inventoryStatus:'INSTOCK'},
      {id:1,type:'ledies',brand:'VEECHIS',category:'Saree',path:'lajo3.jpg',price:499,size:'ONE SIZE',name:'Heeramandi Lajjo saree',rating:5,inventoryStatus:'OUT OF STOCK'},

      


      // festive look for her
     {id:1,type:'festival her',brand:'Sangria',category:'nauvari Saree',path:'nauvari saree ganesh.jpg',price:799,size:'ONE SIZE',name:'ganesh festive saree',rating:5,inventoryStatus:'INSTOCK'},
     {id:1,type:'festival her',brand:'KALINI',category:'nauvari Saree',path:'nauvari saree ganesh2.jpg',price:699,size:'ONE SIZE',name:'ganesh festive saree',rating:4.4,inventoryStatus:'INSTOCK'},
     {id:1,type:'festival her',brand:'Tankori',category:'nauvari saree',path:'nauvari saree ganesh3.jpg',price:1499,size:'ONE SIZE',name:'ganesh festive saree',rating:2,inventoryStatus:'INSTOCK'},
    //  eid
    {id:1,type:'festival her',brand:'Vbuyz',category:'Ethnic wear',path:'eid1.jpg',price:999,size:'L',name:'Eid wear',rating:5,inventoryStatus:'INSTOCK'},

{id:1,type:'festival her',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'eid2.jpg',price:1499,size:'L',name:'Eid wear',rating:4.1,inventoryStatus:'FEW LEFT'},

{id:1,type:'festival her',brand:'anayna',category:'Ethnic wear',path:'eid3.jpg',price:1499,size:'L',name:'Eid wear',rating:4.2,inventoryStatus:'INSTOCK'},
// garba
{id:1,type:'festival her',brand:'Vbuyz',category:'Ethnic wear',path:'garba look1.jpg',price:999,size:'L',name:'Garba wear',rating:5,inventoryStatus:'INSTOCK'},

{id:1,type:'festival her',brand:'Melange by Lifestyle',category:'Ethnic wear',path:'garba look2.jpg',price:1499,size:'L',name:'Garba wear',rating:4.1,inventoryStatus:'FEW LEFT'},

{id:1,type:'festival her',brand:'anayna',category:'Ethnic wear',path:'garba look3.jpg',price:1499,size:'L',name:'Garba wear',rating:4.2,inventoryStatus:'INSTOCK'},

// diwali look
{id:1,type:'men',brand:'Manyavar',category:'Ethnic wear',path:'diwali_look1.jpg',price:889,size:'L',name:'Diwali fashion',rating:3.6,inventoryStatus:'INSTOCK'},
{id:1,type:'men',brand:'Raymond',category:'Ethnic wear',path:'diwali_look2.jpg',price:759,size:'M',name:'Diwali fashion',rating:4.4,inventoryStatus:'OUT OF STOCK'},
{id:1,type:'men',brand:'Raymond',category:'Ethnic wear',path:'diwali_look3.jpg',price:999,size:'XS',name:'Diwali fashion',rating:5,inventoryStatus:'INSTOCK'},
// holi

{id:1,type:'men',brand:'Peter England ',category:'kurta',path:'holi1.jpg',price:889,size:'L',name:'holi style',rating:3.6,inventoryStatus:'INSTOCK'},
{id:1,type:'men',brand:'Peter England',category:'shirt',path:'holi2.jpg',price:759,size:'M',name:'holi style',rating:4.4,inventoryStatus:'OUT OF STOCK'},
{id:1,type:'men',brand:'Peter England',category:'kurta',path:'holi3.jpg',price:999,size:'XS',name:'holi style',rating:5,inventoryStatus:'INSTOCK'},

// onam
{id:1,type:'men',brand:'Fabindia',category:'Ethnic wear',path:'onam1.jpg',price:899,size:'L',name:'onam look',rating:5,inventoryStatus:'LAST TWO'},
{id:1,type:'men',brand:'Manyavar',category:'Ethnic wear',path:'onam2.jpg',price:780,size:'M',name:'onam look',rating:2,inventoryStatus:'INSTOCK'},
{id:1,type:'men',brand:'Raymond',category:'Ethnic wear',path:'onma3.jpg',price:899,size:'L',name:'onam look',rating:5,inventoryStatus:'INSTOCK'},

// fresh fashion
{id:10,type:'fashion',brand:'Club-l',category:'One piece',path:"navya1.jpg",price:399,size:'L',name: 'Navya party wear',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'fashion',brand:'H & M',category:'One piece',path:"navya2.jpg",price:899,size:'M',name: 'Navya party wear',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'fashion',brand:'Club-l',category:'One piece',path:"navya3.jpg",price:599,size:'S',name: 'Navya party wear',rating:3,inventoryStatus:'LAST ONE'},

{id:10,type:'fashion',brand:'Raymond',category:'Casual',path:"rohu1.jpg",price:299,size:'L',name: 'Rohit style casuals',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'fashion',brand:'Manyavar',category:'Casual',path:"rohu2.jpg",price:899,size:'M',name: 'Rohit style casuals',rating:3,inventoryStatus:' OUT OF STOCK'},
{id:10,type:'fashion',brand:'Fabindia',category:'Casual',path:"rohu8.jpg",price:300,size:'S',name: 'Rohit style casuals',rating:3,inventoryStatus:'INSTOCK'},
//
{id:10,type:'fashion',brand:'Ramyond',category:'Jeans',path:"jq1.jpg",price:890,size:'L',name: 'Airport look',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'fashion',brand:'Raymond',category:'Jeans',path:"jq2.jpg",price:658,size:'M',name: 'Airport look',rating:3,inventoryStatus:'LAST TWO'},
{id:10,type:'fashion',brand:'Fabindia',category:'Casual wear',path:"jq3.jpg",price:300,size:'XL',name: 'Airport look',rating:3,inventoryStatus:'INSTOCK'},

{id:10,type:'fashion',brand:'Ramyond',category:'Shacket',path:"sidarth1.jpg",price:390,size:'S',name: 'Siddarth shacket look',rating:3,inventoryStatus:'LAST ONE'},
{id:10,type:'fashion',brand:'Raymond',category:'Shacket',path:"sidarth2.jpg",price:799,size:'XL',name: 'Siddarth shacket look',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'fashion',brand:'Fabindia',category:'Shacket',path:"sidarth3.jpg",price:599,size:'L',name: 'Siddarth shacket look',rating:3,inventoryStatus:'INSTOCK'},

{id:10,type:'film',brand:'Raymond',category:'T-Shirt',path:"ran1.jpg",price:299,size:'L',name: 'Ranveer T-shirt from Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'film',brand:'Manyavar',category:'T-Shirt',path:"ran2.jpg",price:899,size:'M',name: 'Ranveer T-shirt from Dil Dhadakane Do',rating:3,inventoryStatus:' OUT OF STOCK'},
{id:10,type:'film',brand:'Fabindia',category:'T-Shirt',path:"ran3.jpg",price:300,size:'S',name: 'Ranveer T-shirt from Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},

{id:10,type:'film',brand:'Raymond',category:'Crop-shirt',path:"pp1.jpg",price:299,size:'S',name: 'Priyanka look in Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'film',brand:'Manyavar',category:'Jump-suit',path:"pp2.jpg",price:908,size:'M',name: 'Priyanka look in Dil Dhadakane Do',rating:3,inventoryStatus:' INSTOCK'},
{id:10,type:'film',brand:'Fabindia',category:'Jump-suit',path:"pp3.jpg",price:300,size:'S',name: 'Priyanka look in Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},

{id:1,type:'film',brand:'Fabindia',category:'Crop-top',path:'anushka1.jpg',price:899,size:'L',name:'Anushka dress in Dil Dhadakane Do',rating:5,inventoryStatus:'LAST TWO'},
{id:1,type:'film',brand:'Manyavar',category:'Shirt',path:'anushka2.jpg',price:780,size:'M',name:'Anushka dress in Dil Dhadakane Do',rating:2,inventoryStatus:'INSTOCK'},
{id:1,type:'film',brand:'Raymond',category:'Short dress',path:'anushka3.jpg',price:899,size:'L',name:'Anushka dress in Dil Dhadakane Do',rating:5,inventoryStatus:'INSTOCK'},

{id:10,type:'film',brand:'Ramyond',category:'Jacket',path:"hy11.jpg",price:390,size:'S',name: 'Farhan Jacket in Dil Dhadakane Do',rating:3,inventoryStatus:'LAST ONE'},
{id:10,type:'film',brand:'Raymond',category:'Jacket',path:"hy22.jpg",price:799,size:'XL',name: 'Farhan Jacket in Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'film',brand:'Fabindia',category:'Jacket',path:"hy33.jpg",price:599,size:'L',name: 'Farhan Jacket in Dil Dhadakane Do',rating:3,inventoryStatus:'INSTOCK'},

// bollywood
{id:1,type:'bollywood',brand:'Manyavar',category:'Kurta',path:'sahid_look1.jpg',price:889,size:'L',name:'Jab We Met Recreate',rating:3.6,inventoryStatus:'INSTOCK'},
{id:1,type:'bollywood',brand:'Raymond',category:'Patiyala',path:'geet_look2.jpg',price:759,size:'M',name:'Jab We Met Recreate',rating:4.4,inventoryStatus:'OUT OF STOCK'},
{id:1,type:'bollywood',brand:'Raymond',category:'Sweat-Shirt',path:'shaid_look3.jpg',price:999,size:'XS',name:'Jab We Met Recreate',rating:5,inventoryStatus:'INSTOCK'},

{id:10,type:'bollywood',brand:'Raymond',category:'Saree',path:"mumt1.jpg",price:299,size:'S',name: 'Mumtaz Saree Recreate',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'bollywood',brand:'Manyavar',category:'Saree',path:"mumt2.jpg",price:908,size:'M',name: 'Mumtaz Saree Recreate',rating:3,inventoryStatus:' INSTOCK'},
{id:10,type:'bollywood',brand:'Fabindia',category:'Saree',path:"mumt3.jpg",price:300,size:'S',name: 'Mumtaz Saree Recreate',rating:3,inventoryStatus:'INSTOCK'},

{id:1,type:'bollywood',brand:'Fabindia',category:'kuta',path:'piku1.jpg',price:899,size:'L',name:'Piku-Recreate',rating:5,inventoryStatus:'LAST TWO'},
{id:1,type:'bollywood',brand:'Manyavar',category:'kurta',path:'pim2.jpg',price:780,size:'M',name:'Piku-Recreate',rating:2,inventoryStatus:'INSTOCK'},
{id:1,type:'bollywood',brand:'Raymond',category:'kurta',path:'pim4.jpg',price:899,size:'L',name:'Piku-Recreate',rating:5,inventoryStatus:'INSTOCK'},

{id:10,type:'bollywood',brand:'Raymond',category:'jacket',path:"y2k1.jpg",price:299,size:'S',name: 'K-pop Recreate',rating:3,inventoryStatus:'INSTOCK'},
{id:10,type:'bollywood',brand:'Manyavar',category:'jacket',path:"y2k2.jpg",price:999,size:'M',name: 'K-pop Recreate',rating:3,inventoryStatus:' INSTOCK'},
{id:10,type:'bollywood',brand:'Fabindia',category:'jacket',path:"y2k3.jpg",price:350,size:'XL',name: 'K-pop Recreate',rating:3,inventoryStatus:'INSTOCK'},

    ];
    
  }
}
