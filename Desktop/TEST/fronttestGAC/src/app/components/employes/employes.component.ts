import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Employe } from 'src/app/model/employe.model';
import { EmployesService } from 'src/app/services/employes.service';
import { AppDataState, DataStateEnum} from 'src/app/state/employe.state';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  panelNum:any=1;
  employes$:Observable<AppDataState<Employe[]>> |null=null
  //employes$:Observable<Employe[]> |null=null;
  readonly DataStateEnum= DataStateEnum;

  employes?:Employe[];
  constructor( private employeService:EmployesService) { }



    ngOnInit(): void {
      
          this.getAllEmployes();
                      }


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
 getAllEmployes(){
 this.employes$=this.employeService.getAllEmployes().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
     
  ) 
  
 
 /*
     this.employeService.getAllEmployes().subscribe(
       data=>{
         this.employes=data;
         console.log(this.employes);
       },err=>{
         console.log(err);
       }
      )*/
   
}


//search Employees
onSearch(dataForm:any){
  this.employes$=this.employeService.searchEmployes(dataForm.keyword).pipe(
    map(data=>({dataState:DataStateEnum.LOADED, data:data})),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
)

}




//delete employer
onDelete(employe:Employe){
  var c =confirm("Etes vous sur de vouloir supprimer?")
  if(c==true)
  this.employeService.deleteEmploye(employe).subscribe(
    data=>{
      this.getAllEmployes();
    }
  )

}







/*
 getNewEmploye(){

 }*/







}
