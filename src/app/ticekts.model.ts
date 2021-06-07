export interface TicketData {
    id: number;
    ArrDate: string;
    DepDate: string;
    ArrStnFull: string;
    ArrTime: string;
    DepStnFull: string;
    DepTime: number;
    AdtPrice: string;
    TicketCode: string | null;
    ForRouteLEGTicket: string | null;
    TicketDescription: string;
  }