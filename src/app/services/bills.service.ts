import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private apiUrl = 'http://localhost:3000/bills'; // Backend API

  constructor(private http: HttpClient) {}

  getAllBills(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  markBillAsPaid(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/pay`, {});
  }
}
