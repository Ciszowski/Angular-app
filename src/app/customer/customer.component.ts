import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../template/user.modele';
import {Subscription}  from 'rxjs/Subscription';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  
  users : User[];
  userSubscription : Subscription;

  constructor(private userService : UserService) {}

  ngOnInit() {
    console.log('je passe ici non? ')
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[])=>{
        this.users = users;
      }
    )
    this.userService.emitSubject()
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
