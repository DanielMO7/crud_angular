import { Component } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent {

  Empleados: any;

  constructor(
    private crudService: CrudService
  ) { }
  
  ngOnInit(): void{
    this.crudService.ObtenerEmpleados().subscribe(respuesta => {
      console.log(respuesta);
      this.Empleados = respuesta;
    })
  }
  borrarRegistro(id: any, idControl: any) {
    console.log(id);
    console.log(idControl);
    if (window.confirm("¿Deseas borrar el Registro?")) {
      this.crudService.BorrarEmpleado(id).subscribe((respuesta) => {
      this.Empleados.splice(idControl, 1);
      })
    }
  }

}
