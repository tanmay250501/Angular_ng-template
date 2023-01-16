import { Component, OnInit, TemplateRef } from '@angular/core';
import {  FormBuilder,FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  
  modalRef?: BsModalRef;
  doctor: any = [
    {
      
      doctorName: "Tanmay ",
      doctorPost: "Pediatrician",
      doctorId: "tanmay@gmail.com",
      doctorPhone: "9067554300",
      
    },
    {
      doctorName: "Ritik",
      doctorPost: "Dermatologists",
      doctorId: "ritik@gmail.com",
      doctorPhone: "9123546789",
      
    },
    {
      
      doctorName: "Hrushikesh",
      doctorPost: "Ophthalmologists",
      doctorId: "hrushikesh@gmail.com",
      doctorPhone: "7634298750",
      
    },
    {
      
      doctorName: "Sumeet",
      doctorPost: "Gynecologists",
      doctorId: "sumeet@gmail.com",
      doctorPhone: "7275384309",
      
    },
    
   
    ];
  doctorName = "";
  doctorPost = "";
  doctorId = "";
  doctorPhone = "";

  selectedIndex = "";


  deletedoctor(index: any) {
    this.doctor.splice(index, 1)
  }
  doctorForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private modalService: BsModalService) {
    this.doctorForm = this.formBuilder.group({
      doctorName: [''],
      doctorPost: [''],
      doctorId: [''],
      doctorPhone: [''],
      

    })
  }
  

  openModal1(template: TemplateRef<any>,index:any) {
    console.log('index',index)
    

    if(index != null){ //employee
      this.doctorForm.patchValue(
        {
          doctorName : this.doctor[index].doctorName,
          doctorPost : this.doctor[index].doctorPost,
          doctorId : this.doctor[index].doctorId,
          doctorPhone : this.doctor[index].doctorPhone,
        }
        )
      this.selectedIndex = index;
    }
    this.modalRef = this.modalService.show(template);

  }

  updatedoctor(){

    this.doctor[this.selectedIndex].doctorName = this.doctorForm.value.doctorName;
    this.doctor[this.selectedIndex].posdoctorPostt = this.doctorForm.value.doctorPost;
    this.doctor[this.selectedIndex].doctorId = this.doctorForm.value.doctorId;
    this.doctor[this.selectedIndex].doctorPhone = this.doctorForm.value.doctorPhone;
    
    this.clear();
    this.modalRef?.hide();
  }

  submitdoctor() {


    this.doctor.push(this.doctorForm.value);
    console.log('this',this.doctor)
    this.doctorName = "";
    this.doctorPost = "";
    this.doctorId = "";
    this.doctorPhone = "";
    this.modalRef?.hide();
  }

  
  closedoctor(){
    this.doctorForm = this.formBuilder.group({
      doctorName: [''],
      doctorPost: [''],
      doctorId: [''],
      doctorPhone: [''],
      

    })
    this.modalRef?.hide();
  }

  clear(){
    this.doctorForm = this.formBuilder.group({
      doctorName: [''],
      doctorPost: [''],
      doctorId: [''],
      doctorPhone: [''],
      

    })
  }


  ngOnInit(): void {
  }

}
