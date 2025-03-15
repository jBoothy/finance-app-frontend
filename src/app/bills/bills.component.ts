import { Component, OnInit } from '@angular/core';
import { BillsService } from '../services/bills.service';

@Component({
  selector: 'app-bills',
  standalone: false,
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: any[] = [];

  constructor(private billsService: BillsService) {}

  ngOnInit() {
    this.loadBills();
  }

  loadBills() {
    this.billsService.getAllBills().subscribe((data) => {
      this.bills = data;
    });
  }

  markAsPaid(id: number) {
    this.billsService.markBillAsPaid(id).subscribe(() => {
      this.loadBills(); // Refresh the list after marking as paid
    });
  }
}
