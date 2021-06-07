import { railResults } from "./railResults.model";
import { TicketSort } from "./ticket-sort.model";

export const ticketSortDB: TicketSort[] = [{    
        sortText: "Price: High to Low",
        sortFunction : function(tickets: railResults[]){            
            for(let ticket of tickets ){
                for (let legDetails of ticket.Legs){
                   legDetails.TKTs= legDetails.TKTs.sort((a, b) => ( a.AdtPrice < b.AdtPrice? 1 : -1 ));
                }
            }
            return tickets;
        }
    },
    {    
        sortText: "Price: Low to High",
        sortFunction : function(tickets: railResults[]){            
            for(let ticket of tickets ){
                for (let legDetails of ticket.Legs){
                   legDetails.TKTs= legDetails.TKTs.sort((a, b) => ( a.AdtPrice > b.AdtPrice? 1 : -1 ));
                }
            }
            return tickets;
        }
    },
    {        
        sortText: "Time: Faster to Slower",
        sortFunction : function(tickets: railResults[]){    
            return tickets.sort((a, b) => a.totalTime > b.totalTime? 1 : -1 );
        }
    },
    {        
        sortText: "Time: Slower to Faster",
        sortFunction : function(tickets: railResults[]){    
            return tickets.sort((a, b) => a.totalTime < b.totalTime? 1 : -1 );
        }
    }
];