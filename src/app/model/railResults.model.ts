import { railTicket } from "./railTicket.model";

export interface railResults {
    ArrDate: string;
    ArrStationCodeFull: string;
    ArrTime: string;
    DepDate: string;
    DepStationCodeFull: string;
    DepTime: string;
    DistanceTravelled: number;
    totalTime: number;
    Legs: Array<railTicket>;
}
