import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interface/empleado.interfaces';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  msg:string = 'Uso del ngFor';
  listaEmpleado:IEmpleado[] =[
    {profecion:'Mecanico', telefono:'7342-1231', puesto:'Gerente', edad:25},
    {profecion:'Soldador', telefono:'7673-4567', puesto:'Contador',  edad:35},
    {profecion:'Ingeniero', telefono:'2344-1231', puesto:'Ordenanza',  edad:22},
    {profecion:'Doctor', telefono:'7123-3465', puesto:'Sub Gerente',  edad:28},
    {profecion:'Dentist', telefono:'7524-1200', puesto:'Administrador',edad:29}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
