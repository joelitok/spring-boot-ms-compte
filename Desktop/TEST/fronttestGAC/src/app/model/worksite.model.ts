import { WorkUnit } from "./workunit.model";

export interface WorkSite{
    id:number,
    name:string,
    workUnits:WorkUnit[],
}

