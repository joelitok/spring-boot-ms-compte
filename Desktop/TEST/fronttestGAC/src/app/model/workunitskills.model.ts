import { Skills } from "./skills.model";
import { WorkUnit } from "./workunit.model";

export interface WorkUnitSkills {
    id:number,
    active:boolean,
    skill:Skills,
    workUnit:WorkUnit
}