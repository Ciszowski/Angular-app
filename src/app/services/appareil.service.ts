import { Subject } from 'rxjs/Subject';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilServices{
  
  appareilSubject = new Subject<any[]>()
  
  private appareil = [
        {
          id: 1,
          name : 'ordi',
          status: "allumé"
        },
        {
          id: 2,
          name: 'frigo',
          status :  'allumé'
        },
        {
          id: 3,
          name: 'TV',
          status: 'éteint'
        }
      ]
      constructor(private httpClient: HttpClient){}

      emitAppareilSubject(){
        this.appareilSubject.next(this.appareil.slice()) //la methode subject & next permet d'envoyer les donnees privées
      }


    onPutOn = (idx : number) =>{
      console.log('on', idx)
      this.appareil[idx].status = 'allumé' 
      this.emitAppareilSubject();
    }
    onPutOff = (idx: number) =>{
      console.log('off', idx)
      this.appareil[idx].status = 'éteint';
      this.emitAppareilSubject();    
  }
  getAppareilById = (id) =>{
    return this.appareil.find((x) => x.id === id)
  }
  getNewApp = (name: string , status : string) =>{
   const appObj = {
     id : 0,
     name: '',
     status: ''
   }
    appObj.name = name;
    appObj.status = status;
    appObj.id = this.appareil[(this.appareil.length -1 ) ].id + 1
    this.appareil.push(appObj)
    this.emitAppareilSubject();
  }
  saveApp =()=>{

    this.httpClient
      .put('https://firstangularapp-2a7b7.firebaseio.com/appareils.json',this.appareil)
      .subscribe(()=>{
        console.log('saved')
      },(error)=> {
        console.log('erreur de sauvegarde',error)
      })
    }
  getApp = () =>{
    this.httpClient
    .get<any[]>('https://firstangularapp-2a7b7.firebaseio.com/appareils.json')
    .subscribe((response)=>{
      this.appareil = response
      this.emitAppareilSubject();
    },(error)=> {
      console.log('erreur de chargement',error)
    })
  }
}