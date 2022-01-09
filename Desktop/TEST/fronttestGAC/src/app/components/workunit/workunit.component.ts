import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { WorkUnit } from 'src/app/model/workunit.model';
import { WorkunitService } from 'src/app/services/workunit.service';
import { AppDataState, DataStateEnum } from 'src/app/state/workunit.model';

@Component({
  selector: 'app-workunit',
  templateUrl: './workunit.component.html',
  styleUrls: ['./workunit.component.css']
})
export class WorkunitComponent implements OnInit {
  
  //variable to new form nav
  panelNum:any=1;
  
  //state manager of app
  workunits$:Observable<AppDataState<WorkUnit[]>> |null=null;
  readonly DataStateEnum= DataStateEnum;


  //variable to register form
  employeFormGroup!:FormGroup;

  constructor(
    private workUnitService:WorkunitService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllWorkUnit();


    //init form
    this.employeFormGroup=this.fb.group({

      //start section 1 control  
      name:["", Validators.required],
      displayName:["", Validators.required],
      port:[0, Validators.required],
      workSite:["", Validators.required],
      activeUntil:[new Date, Validators.required],
      activeTrought:[new Date, Validators.required],
      //end section 1  control

      //start section 2 control
      employeIdCode:["", Validators.required],
      namelocation:["", Validators.required],
      description:["", Validators.required],
      //end section 2 control

      //start section 3  control
      employeSkill:["", Validators.required],
      additionalSkills:["", Validators.required],
       //end section 3 control


        //start section 4  control
        position:["", Validators.required],
        shiftTime1:["", Validators.required],
        shiftTime2:["", Validators.required],
        mealTime1:["", Validators.required],
        mealTime2:["", Validators.required],
        rdocheck1:[true, Validators.required],
        rdocheck2:[true, Validators.required],
        rdocheck3:[false, Validators.required],
        rdocheck4:[true, Validators.required],
        rdocheck5:[false, Validators.required],
        rdocheck6:[true, Validators.required],
        rdocheck7:[true, Validators.required],
        staggerRdo:["", Validators.required],
       //end section 4 control
    })
  }



  //using to modal form 
        displayStyle = "none";
        openPopup() {
          this.displayStyle = "block";
        }
        closePopup() {
          this.displayStyle = "none";
      }




// start direction button
next() { 
  if (this.panelNum < 4) this.panelNum++; else this.panelNum = 1;
 }

 prev(){
  if (this.panelNum > 1) this.panelNum--; else this.panelNum = 4;
 }
// end direction button

//get all employees
 getAllWorkUnit(){
 this.workunits$=this.workUnitService.getAllWorkUnit().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
     
  ) 


console.log(this.workunits$);


}


onSaveNewWorkUnit(){
  this.workUnitService.registerWorkUnit(this.employeFormGroup?.value).subscribe(
    dat=>{
      alert("Success saving employees");
    }
  )
}
}
