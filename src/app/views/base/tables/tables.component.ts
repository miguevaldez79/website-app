import { ConsultasService } from 'src/services/consultas.service';


import { Component, OnInit } from '@angular/core';
import {
  Provincia,Municipio,Regiones,MacroRegiones, Tipo

} from "./../../../../../src/types/territorio.types";
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EMPTY, Observable, Subject, map } from "rxjs";
import {takeUntil, catchError } from "rxjs/operators";
import { DropDown } from "./../../../../../src/types/dropdown.types";



@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  
  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];


  
  private _unsubscribeAll: Subject<void> = new Subject();


  constructor(

    private ConsultasService: ConsultasService,

    ) {
  }

  ngOnInit(): void {

 
  
  }




}
