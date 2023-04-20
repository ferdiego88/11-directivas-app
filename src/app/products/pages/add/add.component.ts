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
  color = 'green';
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }


  isValid(campo: string): boolean {

    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.mensaje1 = Math.random().toString();
  }

  cambiarColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
