import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../template/user.modele';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { 
    }
    
    ngOnInit() {
      this.initForm()
  }
    initForm() {
      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        drinkPref: ['', Validators.required],
        hobbies: this.formBuilder.array([])
      })
    }
  onSubmitForm = () => {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPref'],
      formValue['hobbies'] ? formValue['hobbies'] : [],

    );
    this.userService.addUser(newUser);
    this.router.navigate(['users'])
  }
  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl)
  }
}
