//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
//material
import { MaterialModule } from './material/material.module'

//services
import { AuthGuard } from './services/auth-guard.service';
import { AppareilServices } from './services/appareil.service'
import { AuthServices } from './services/auth.services';
import { UserService } from './services/user.service';

//Component
import { AppComponent } from './app.component';
import { NewCompoComponent } from './new-compo/new-compo.component';
import { CustomerComponent } from './customer/customer.component';
import { AppareiComponent } from './apparei/apparei.component';
import { AuthComponent } from './auth/auth.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';


const appRoutes : Routes = [
  {path: "users", canActivate: [AuthGuard], component: CustomerComponent},
  {path: "new-users", canActivate: [AuthGuard], component: NewCustomerComponent},
  {path : 'appareils',  canActivate:[AuthGuard] , component : NewCompoComponent },
  {path: 'appareils/:id', canActivate:[AuthGuard] , component: SingleAppareilComponent},
  {path: 'edit',   canActivate:[AuthGuard] ,component: EditAppareilComponent},
  {path: 'check', component: CheckFormComponent},
  {path : 'auth' , component: AuthComponent},
  {path : "not-found" , component : NotFoundComponentComponent},
  {path : "**" , redirectTo : '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    NewCompoComponent,
    CustomerComponent,
    AppareiComponent,
    AuthComponent,
    MainNavComponent,
    SingleAppareilComponent,
    NotFoundComponentComponent,
    EditAppareilComponent,
    CheckFormComponent,
    NewCustomerComponent,    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true }),
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    AppareilServices,
    AuthServices,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
