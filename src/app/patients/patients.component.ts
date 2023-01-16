import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {  FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  
  modalRef?: BsModalRef;
  paitents: any = [
    {
      
      paitentsName: "Roshan Kolte ",
      paitentsPost: "DWM",
      paitentsId: "roshan01@gmail.com",
      paitentsPhone: 1234567890,
      
    },
    {
      
      paitentsName: "Harish Gorewar",
      paitentsPost: "CSS",
      paitentsId: "harish01@gmail.com",
      paitentsPhone: 1234567890,
      
    },
    {
      
      paitentsName: "Nilesh Khorde",
      paitentsPost: "AI",
      paitentsId: "nilesh01@gmail.com",
      paitentsPhone: 1234567890,
      
    },
    {
      paitentsName: "Sunanda Khandait ",
      paitentsPost: "MC",
      paitentsId: "sunanda01@gmail.com",
      paitentsPhone: 1234567890,
      
    },

    ];

  paitentsName = "";
  paitentsPost = "";
  paitentsId = "";
  paitentsPhone = "";
  

  selectedIndex = "";


  deletepaitents(index: any) {
    this.paitents.splice(index, 1)
  }

  paitentsForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private modalService: BsModalService) {
    this.paitentsForm = this.formBuilder.group({
      paitentsName: [''],
      paitentsPost: [''],
      paitentsId: [''],
      paitentsPhone: [''],
      

    })
  }

  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)
    

    if(index != null){ //employee
      this.paitentsForm.patchValue(
        {
          paitentsName : this.paitents[index].paitentsName,
          paitentsPost : this.paitents[index].paitentsPost,
          paitentsId : this.paitents[index].paitentsId,
          paitentsPhone : this.paitents[index].paitentsPhone,
        }
        )
      this.selectedIndex = index;
    }

    this.modalRef = this.modalService.show(template);

  }

  updatepaitents(){

    this.paitents[this.selectedIndex].paitentsName = this.paitentsForm.value.paitentsName;
    this.paitents[this.selectedIndex].paitentsPost = this.paitentsForm.value.paitentsPost;
    this.paitents[this.selectedIndex].paitentsId = this.paitentsForm.value.paitentsId;
    this.paitents[this.selectedIndex].paitentsPhone = this.paitentsForm.value.paitentsPhone;
    
    this.clear();
    this.modalRef?.hide();
  }

  
  submitpaitents() {


    this.paitents.push(this.paitentsForm.value);
    console.log('this',this.paitents)
    this.paitentsName = "";
    this.paitentsPost = "";
    this.paitentsId = "";
    this.paitentsPhone = "";
    this.modalRef?.hide();
  }

  closepaitents(){
    this.paitentsForm = this.formBuilder.group({
      paitentsName: [''],
      paitentsPost: [''],
      paitentsId: [''],
      paitentsPhone: [''],
      

    })
    this.modalRef?.hide();
  }
  clear(){
    this.paitentsForm = this.formBuilder.group({
      paitentsName: [''],
      paitentsPost: [''],
      paitentsId: [''],
      paitentsPhone: [''],
      

    })
    
  }


  ngOnInit(): void {
  }

}
