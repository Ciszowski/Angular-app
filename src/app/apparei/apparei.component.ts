import { Component, Input} from '@angular/core';
import {AppareilServices} from '../services/appareil.service';
@Component({
  selector: 'app-apparei',
  templateUrl: './apparei.component.html',
  styleUrls: ['./apparei.component.css']
})
export class AppareiComponent{
  @Input() name : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;
  @Input() id: number;
  isAuth = false 
  constructor(private appServices : AppareilServices) {
    setTimeout(() =>{
      this.isAuth = true
    },5000)
  }
  
  Connect = () => {
    return this.appServices.onPutOn(this.indexOfAppareil)
  }
  Disconnect = () => {
    return this.appServices.onPutOff(this.indexOfAppareil)
  }
  getColor= ()=>{
    if(this.appareilStatus === 'allumé'){
      return 'green'; 
    }
    return "red";
  }
}
