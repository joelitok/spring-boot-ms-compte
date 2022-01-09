import { Component, OnInit } from '@angular/core';
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
  constructor(private workUnit:WorkunitService) { }

  ngOnInit(): void {
    this.getAllWorkUnit();
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
 this.workunits$=this.workUnit.getAllWorkUnit().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
     
  ) 


console.log(this.workunits$);


}
}
