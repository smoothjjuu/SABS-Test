import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { railResults } from './model/railResults.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private dataLocation = "../../assets/results.json";
  constructor(private http: HttpClient) {} 

  getTickets():Observable<railResults[]>{
    return this.http.get<railResults[]>(this.dataLocation)
    .pipe(   
      tap(data => console.log("Data has fetched"))
    );
  }  

}
