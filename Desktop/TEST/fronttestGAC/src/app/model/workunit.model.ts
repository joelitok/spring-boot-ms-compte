import { WorkUnitSkills } from "./workunitskills.model";

export interface WorkUnit{
     //start section 1 control 
     id:number, 
     name?:string,
     displayName:string,
     port:number,
     workSite:string,
     activeUntil:Date,
     activeTrought:Date,
     //end section 1  control

     //start section 2 control
     employeIdCode:string,
     namelocation:string,
     description:string,
     //end section 2 control

     //start section 3  control
     employeSkill:string,
     additionalSkills:string,
      //end section 3 control


       //start section 4  control
       position:string,
       shiftTime1:string,
       shiftTime2:string,
       mealTime1:string,
       mealTime2:string,
       rdocheck1:boolean,
       rdocheck2:boolean,
       rdocheck3:boolean,
       rdocheck4:boolean,
       rdocheck5:boolean,
       rdocheck6:boolean,
       rdocheck7:boolean,
       staggerRdo:string,
      //end section 4 control
    
      
      
      
      
      
}