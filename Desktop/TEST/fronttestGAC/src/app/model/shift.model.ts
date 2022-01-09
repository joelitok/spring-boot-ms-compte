import { WorkUnit } from "./workunit.model";

export interface Shift{
    id:number,
    name:string,
    shiftStart:number,
    shiftEnd:number,
    position:number,
    mealStart:number,
    mealEnd:number,
    RDOs:string[],
    straggerRDO:number,
    workUnit:WorkUnit
}