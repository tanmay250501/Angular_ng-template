import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name1 = '';
  password = '';

  logIn: any = [
    {
      name1: '',
      password: '',
    },
  ];

  login(index: any) {
    console.log('index', this.logIn);
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, index: any) {
    console.log('index', index);

    this.modalRef = this.modalService.show(template);
  }

  clear() {
    this.modalRef?.hide();
  }

  

}
