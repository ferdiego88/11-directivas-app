import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  mensaje1:string = 'Fernando Herrera';
  color = 'red';
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }


  isValid(campo: string): boolean {

    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.mensaje1 = 'Diego Santillan';
  }

  cambiarColor(){
    this.color = 'green';
  }

}
