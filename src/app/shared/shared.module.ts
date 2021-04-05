import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [NavbarComponent, MessageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    MessageComponent
  ]
})
export class SharedModule { }
