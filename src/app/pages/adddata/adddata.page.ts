import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';
import { Observable, throwError } from 'rxjs';



@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.page.html',
  styleUrls: ['./adddata.page.scss'],
})
export class AdddataPage implements OnInit {

  dData: any[] = [];
  id: number;
  modelng: StaffAll;


  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService,
    public http: HttpClient,

  ) {

    this.modelng = new StaffAll();

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
    // this.modelng.ID = id;
    console.log(this.id);
    // get item details using id
    this.http.get<any>('http://203.158.144.140/APIchart/dataupdate/show/' + this.id).subscribe(result => {
      console.log(result);
      this.dData = result;
      this.modelng = result.staffall;
      console.log(JSON.stringify(this.dData));
    });
  }

  // updateItem(id, item): Observable<StaffAll> {
  //   return this.http
  //     .put<StaffAll>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // update() {
  //   //Update item by taking id and updated data object
  //   this.http.put<modelng>('http://203.158.144.140/APIchart/dataupdate/show/update').subscribe(response => {
  //     this.router.navigate(['list']);
  //   })
  // }

}
