import { WorkUnitSkills } from "./workunitskills.model";

export interface WorkUnit{
    id:number,
    name:string,
    activeUntil:Date,
    displayName:String,
    port:number,
    location:Location,
    workUnitSkills:WorkUnitSkills[],
    additionalSkills:string
}