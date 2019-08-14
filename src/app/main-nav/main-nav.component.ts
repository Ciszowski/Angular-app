import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx'


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {
  seconds : number;
  counterSubscription: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        console.log('result', result)
       return result.matches}),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
      ngOnInit(){
        const counter = Observable.interval(1000)
        this.counterSubscription =  counter.subscribe(
          (value: number)=>{
          this.seconds = value;
        },(error : any)=>{
          console.log('une erreur s est produite')
        },()=>{
          console.log('l"observable est complété')
        }
        )
      }
    ngOnDestroy=()=>{ //detruit les fonctionnnalités lancé a la fin du composant
      this.counterSubscription.unsubscribe();
    }
}
