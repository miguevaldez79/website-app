import { Component, OnInit } from '@angular/core';
import {
  Provincia,Municipio,Regiones,MacroRegiones, Tipo

} from "./../../../../../src/types/territorio.types";
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EMPTY, Observable, Subject, map } from "rxjs";
import {takeUntil, catchError } from "rxjs/operators";
import { DropDown } from "./../../../../../src/types/dropdown.types";



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];


  
  private _unsubscribeAll: Subject<void> = new Subject();


  private _previousFilters: any = {
    fechaFinal: "",
    fechaInicial: "",
    idProvincia: "0",
    idRegion: "0",
    idMacroregion: "0",
    idMunicipio: "0",
    tipo: "",
  };


  private _params: any = {
    // fechaInicial: "",
    // fechaFinal: "",
    // idProvincia: "0",
    // idRegion: "0",
    // idMacroregion: "0",
    // idMunicipio: "0",
    tipo: 2
  };

  public levantamiento$?: Observable<any>; 
  public provincias$!: Observable<DropDown<Provincia>[]>;
  public tipo$!: Observable<DropDown<Tipo>[]>;
  public municipios$!: Observable<DropDown<Municipio>[]>;
  public regiones$!: Observable<DropDown<Regiones>[]>;
  public macroregiones$!: Observable<DropDown<MacroRegiones>[]>;
  public favoriteColor = '#26ab3c';
  public dropdown:any = [];

  constructor(
    ) {
  }

  ngOnInit(): void {

 
  
  }

  


  
}
