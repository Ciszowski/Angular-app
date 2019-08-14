import { Component, Input, OnInit } from '@angular/core';
import { AppareilServices}  from '../services/appareil.service'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-new-compo',
  templateUrl: './new-compo.component.html',
  styleUrls: ['./new-compo.component.css']
})
export class NewCompoComponent implements OnInit {
  statusClient = 'Endormi';
  client : string;
  lastUpdate = new Promise((response, error)=>{
    const date = new Date();
    setTimeout(()=>{
      response(date)
    },2000)
  })

  appareil = []
  appareilSubscription: Subscription;
  constructor(private AppServices : AppareilServices, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.appareilSubscription = this.AppServices.appareilSubject.subscribe(
      (appareil : [] ) =>{
        this.appareil = appareil;
      }
      );
      this.AppServices.emitAppareilSubject();

  }
  getStatus =()=>{
    return this.statusClient;
  }
  onSave(){
    this.AppServices.saveApp()
  }
  onFetch(){
    this.AppServices.getApp();
  }
}
