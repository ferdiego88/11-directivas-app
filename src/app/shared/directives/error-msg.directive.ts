import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color:string = 'red';
  @Input() mensaje: string = 'Este campo es requerido';

  constructor(private el: ElementRef<HTMLElement>) {

   this.htmlElement = el;
  }


  setColor(){
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


  ngOnInit(): void {

    this.setColor();
    this.setMensaje();
    this.setClass();

  }

  ngOnChanges(changes: SimpleChanges){


    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }

    console.log(changes);



  }


}
