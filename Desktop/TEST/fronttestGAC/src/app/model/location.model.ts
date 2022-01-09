import { WorkUnit } from "./workunit.model";

export interface Location {
    id:number,
    name:string,
    workUnit:WorkUnit
}