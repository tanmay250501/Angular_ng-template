import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  name1 = '';
  price = 0;
  img = "https://www.shutterstock.com/image-vector/line-medicine-icon-blue-gradient-260nw-1244517397.jpg";

  carList: any = [

    {
      img: 'https://prescriptiongiant.com/wp-content/uploads/2018/06/acy1.jpg',
      name1: 'Acyclovir',
      price: 75

    },
    {
      img: 'https://drugsdetails.com/wp-content/uploads/2016/05/Azithromycin-tabs-250mg.jpg',
      name1: 'Azithromycin',
      price: 50
    },
    {
      img: 'https://5.imimg.com/data5/SELLER/Default/2021/7/UM/WN/RL/132560091/selzentry-maraviroc-tablets-500x500-250x250.png',
      name1: 'Maraviroc (Selzentry®)',
      price: 80
    },
    {
      img: 'https://4.imimg.com/data4/NJ/OH/MY-18813536/tenvir-500x500.jpg',
      name1: 'APegfilgrastim ',
      price: 99
    },
    {
      img: 'https://orders.lifelinepharm.com/media/images/items/Package_23613.jpg',
      name1: 'Sacubitril (Entresto®)',
      price: 340
    },

  ]


  cartList: any = []
  kitchen: any = []
  totalCount = 0;

  sum = 0;

  deleteMed(index: any) {
    this.carList.splice(index, 1)
  }
  selectItem(i: any) {


    this.totalCount += this.carList[i].price;
    this.cartList.push(this.carList[i]);
    console.log(this.totalCount)



  }


  delete1(i: any) {
    this.totalCount = this.totalCount - this.cartList[i].price;
    this.cartList.splice(i, 1)
  }
  placeOrder() {

    this.kitchen = this.cartList;
    this.sum = this.totalCount
    this.cartList = [];
    this.totalCount = 0;
  }

  submit1() {
    let object = {
      img: this.img,
      name1: this.name1,
      price: this.price,
    }
    this.carList.push(object)
    this.clear1();
    
    console.log('i am here', object)
    this.modalRef?.hide();

  }
  clear1() {
    this.name1 = "";
    this.price = 0;
  }
  carImg ="";
  carName = "";
  carPrice = "";


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)
    

    if(index != null){
      
      this.carImg = this.carList[index].img;
      this.carName = this.carList[index].name1;
      this.carPrice = this.carList[index].price;
      
  
    }
    this.modalRef = this.modalService.show(template);
  }

  clear(){
    this.modalRef?.hide();
  }

  ngOnInit(): void {
  }

}


