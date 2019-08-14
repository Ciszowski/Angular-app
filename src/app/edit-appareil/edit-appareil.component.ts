import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilServices } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {
  defaultOnOff = 'éteint';
  constructor(private appServices : AppareilServices,
              private route : Router) { }

  ngOnInit() {
  }
  onSubmit=(form : NgForm)=>{
    const name = form.value.name;
    const status = form.value.status;
    this.appServices.getNewApp(name , status);
    this.route.navigate(['appareils'])
  }
}
