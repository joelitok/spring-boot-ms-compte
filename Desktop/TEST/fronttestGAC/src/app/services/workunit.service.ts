import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkUnit } from '../model/workunit.model';

@Injectable({
  providedIn: 'root'
})
export class WorkunitService {

  constructor(private http:HttpClient) { }

  
  //get All list WorkUnit
  getAllWorkUnit():Observable<WorkUnit[]>{
    let host=environment.host;
    return this.http.get<WorkUnit[]>(host+"/workunits?_sort=id&_order=desc");
    
  }

  //delete WorkUnit specify
  deleteWorkUnit(wk:WorkUnit):Observable<void>{
    let host= environment.host;
    return this.http.delete<void>(host+"/workunits/"+wk.id);
  }

  //register WorkUnit
  registerWorkUnit(wk:WorkUnit):Observable<WorkUnit>{
    let host=environment.host;
    return this.http.post<WorkUnit>(host+"/workunits",wk);
  }

  //search WorkUnit
  searchWorkUnit(keyword:string):Observable<WorkUnit[]>{
    let host =environment.host;
    return this.http.get<WorkUnit[]>(host+"/workunits?name_like="+keyword);
  }

    getOneWorkUnit(id:number):Observable<WorkUnit>{
    let host =environment.host;
    return this.http.get<WorkUnit>(host+"/workunits/"+id);
  }

  updateWorkUnit(wk:WorkUnit):Observable<WorkUnit>{
    let host=environment.host;
    return this.http.put<WorkUnit>(host+"/workunits"+wk.id, wk); 
}




  //



}
