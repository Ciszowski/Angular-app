import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Detail } from '../template/detail.modele';
import { IncrementCounter, DecrementCounter } from '../../reducer/app.action';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  total = 0;
  titre : string;
  allDetails : Detail[];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('appState')) //s'abonner au store en important select (=map), et le nom de l'objet dans forRoot
          .subscribe((data)=>{
            this.total = data.count;
            this.titre = data.title;
            this.allDetails= data.details
          })
  }


  increment(){
    this.store.dispatch( new IncrementCounter(1))
  }
  decrement(){
    this.store.dispatch( new DecrementCounter(1))
  }

}
