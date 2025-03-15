import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BillsModule } from './bills/bills.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, HttpClientModule, MatTableModule, MatButtonModule, BillsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
