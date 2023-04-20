import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color = 'red';
  private _mensaje = 'Este campo es Requerido';




  htmlElement: ElementRef<HTMLElement>;

  @Input() set valido(valor:boolean ) {

      if (valor) {
        this.htmlElement.nativeElement.classList.add('hidden');
      } else {
        this.htmlElement.nativeElement.classList.remove('hidden');
      }
}


  @Input() set color(valor:string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor:string ) {
      this._mensaje = valor;
      this.setMensaje();
  }

  constructor(private el: ElementRef<HTMLElement>) {

   this.htmlElement = el;
  }


  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


  ngOnInit(): void {


    this.setClass();
    this.setColor();
    this.setMensaje();


  }

  ngOnChanges(changes: SimpleChanges){


    /*

    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
*/
    //console.log(changes);



  }


}
