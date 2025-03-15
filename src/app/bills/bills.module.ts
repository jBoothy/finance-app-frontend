import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './bills.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BillsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [BillsComponent]
})
export class BillsModule {}
