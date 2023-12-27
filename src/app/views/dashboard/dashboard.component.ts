import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Provincia,Municipio,Regiones,MacroRegiones, Tipo

} from "./../../../../src/types/territorio.types";
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EMPTY, Observable, Subject, map } from "rxjs";
import {takeUntil, catchError } from "rxjs/operators";
import { DropDown } from "./../../../../src/types/dropdown.types";
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ConsultasService } from "../../../../src/services/consultas.service";

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public form:FormGroup;
  public cedulado:any;

  private _unsubscribeAll: Subject<void> = new Subject();


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
    private chartsData: DashboardChartsData,
    private ConsultasService: ConsultasService,
   private formBuilder:FormBuilder

    ) {
      this.form = this.formBuilder.group({
        cedula: ['', [Validators.minLength(11), Validators.required]]
      });
  }


  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    this._getLevantamiento();
  
  }



  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }


  getCedulado(){

    if (this.form.controls["cedula"].invalid) {
      return
    }

    this.ConsultasService.getLevantamiento(this.form.controls["cedula"].value).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.cedulado = data
        },

        error: (error) => {
          console.log(error)
        }
      })
  }


 
  private _getLevantamiento() {
    this.levantamiento$ = this.ConsultasService.getLevantamiento(this._params).pipe(
      takeUntil(this._unsubscribeAll),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }


setParams(params: any) {
  this._params = {
    fechaInicial: params.fechaInicial,
    fechaFinal: params.fechaFinal,
    idProvincia: params.idProvincia,
    idRegion: params.idRegion,
    idMunicipio: params.idMunicipio,
    idMacroregion: params.idMacroregion,
    tipo: params.tipo
  };
}


}

  



