
import {
  Provincia,

} from "./../../../../../src/types/territorio.types";
import { Component } from '@angular/core';
import {OnInit } from "@angular/core";
import { EMPTY, Observable, Subject, map } from "rxjs";
import { DropDown } from "./../../../../../src/types/dropdown.types";


@Component({
  selector: 'app-form-controls',
    templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  public provincias$!: Observable<DropDown<Provincia>[]>;
  public favoriteColor = '#26ab3c';
  public dropdown:any = [];


  constructor(
  ) { }

  ngOnInit(): void {

  }


}


