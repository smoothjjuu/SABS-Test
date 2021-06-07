import { Component, OnInit } from '@angular/core';
import { railResults } from '../model/railResults.model';
import { ticketSortDB } from '../model/ticket-sort-data';
import { TicketSort } from '../model/ticket-sort.model';
import { ticketDetails } from '../model/ticketDetails.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit {

  tickets: railResults[] = [];
  txtToggleSort : string = "Time";
  ticketSorts = ticketSortDB;
  selectedValue: string = " Choose option to sort by";

  constructor( private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => { 
      this.tickets = tickets;
      for(let ticket of this.tickets ){
        let fullTickets: ticketDetails[] = [];
        ticket.totalTime = this.calTotalTime(ticket);
        for (let legDetails of ticket.Legs){
          let index = 0;
          for (let individualTicket of legDetails.TKTs){
            if(individualTicket.ForRouteLEGTicket){
              let matchCode = individualTicket.ForRouteLEGTicket.slice(4);
              let temp = this.matchTickets(matchCode, fullTickets);
              if (temp)
              {
                legDetails.TKTs[index] = temp;
              }
            } else {
              fullTickets.push(individualTicket);            
            }
            index++;
          }
        }
      }
    });
  }

  matchTickets(routeCode: string, fullTickets : ticketDetails[]): ticketDetails | null{
    for(let individualFullticket of fullTickets ){
      if(individualFullticket.TicketCode?.includes(routeCode)){
        return individualFullticket;
      }
    }
    return null;
  }

  calTotalTime(calTicket: railResults): number {
    let min = (this.subString(calTicket.ArrDate, calTicket.ArrTime).getTime() - 
    this.subString(calTicket.DepDate, calTicket.DepTime).getTime()) /1000/60;
    return min;
  }

  subString(date: string, time: string): Date{
    let year = Number(date.substr(0,2));
    let month = Number(date.substr(2,4));
    let day = Number(date.substr(4,6));
    let hour = Number(time.substr(0,2));
    let min = Number(time.substr(2));    
    let temp=new Date(year, month, day, hour, min);
    return temp;
  }
  sortSelected(sortOption: TicketSort): void{     
    this.selectedValue =  sortOption.sortText;
    this.tickets = sortOption.sortFunction(this.tickets);
  }
}
