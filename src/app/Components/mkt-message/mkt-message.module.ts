import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktMessageComponent } from '../mkt-message/mkt-message.component';


@NgModule({
  declarations: [MktMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [MktMessageComponent]
})
export class MktMessageModule { }