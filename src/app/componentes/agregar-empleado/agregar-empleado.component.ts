import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {

  formularioDeEmpleados: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudServices: CrudService,
    private ruteador: Router,
  ) {
    
    this.formularioDeEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  // any funciona para recepcionar cualquier tipo de dato que se envia
  enviarDatos(): any{
    console.log("Precionado");
    console.log(this.formularioDeEmpleados.value);

    this.crudServices.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe((response) => {
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }

}
