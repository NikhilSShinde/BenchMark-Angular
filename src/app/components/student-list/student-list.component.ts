import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Student:any = [];
  Amount:any = [];
  title: String;
  names: any;
  selectedAll: any;
  masterSelected = false;
  primeSelect = true;


  constructor(private apiService: ApiService) {

    this.getStudent();

    this.getAmt();
    
   }

   getStudent(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Student = data;
    })    
  }

  getAmt(){
    this.apiService.getAmount().subscribe((data) => {
     this.Amount = data;
    })    
  }

 
  checkUncheckAll() {

    let data = [];

    for (var i = 0; i < this.Student.length; i++) {

      //corner case
      if (this.Student[i].id < 2) 
      this.Student[i].isSelected = this.masterSelected;
      
      // Check from 2 to n-1 
      for ( var $k = 2; $k < this.Student[i].id; $k++) {
        
        if (this.Student[i].id % $k == 0) 
        {
          this.Student[i].isSelected = this.masterSelected;
        }
    }
  }
}
  
  isAllSelected() {
    this.masterSelected = this.Student.every(function(item:any) {
        return item.isSelected == this.masterSelected;
      })
  }

 
  ngOnInit(): void {
  }

}
