import { ticketDetails } from "./ticketDetails.model";

export interface railTicket {
    ArrStnFull: string;
    ArrTime: string;
    DepStnFull: string;
    DepTime: string;
    TKTs: Array<ticketDetails>;
}
