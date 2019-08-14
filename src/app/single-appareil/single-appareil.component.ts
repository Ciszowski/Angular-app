import { Component, OnInit } from '@angular/core';
import { AppareilServices } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'appareils';
  status: string = "Status"
  constructor(private appServices: AppareilServices,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appServices.getAppareilById(+id).name;
    this.status = this.appServices.getAppareilById(+id).status;
  }

}
