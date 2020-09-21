import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  submitted = false;
  employeeForm: FormGroup;

  constructor(

    public fb: FormBuilder,
    private router: Router,
    private apiService: ApiService

  ) {
    this.mainForm();
   }

  ngOnInit(): void {
  }

  mainForm() {
    this.employeeForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pocketmoney: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    console.log(this.employeeForm);
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return ;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Record successfully created!')
          this.router.navigateByUrl('/list-student')
        }, (error) => {
          console.log(error);
        });
    }
  }

}
