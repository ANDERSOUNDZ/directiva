import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }
  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

<<<<<<< HEAD
<<<<<<< HEAD
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres ;`
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Este campo necesita dominio de correo';
=======
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres ;`;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText =
        'Este campo necesita dominio de correo';
>>>>>>> f3471c0 (Agregando cambios a la directiva desde dev)
=======
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres ;`;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText =
        'Este campo necesita dominio de correo';
>>>>>>> f3471c0ed4e07f53fbe00a5a98dd698f48bbacf5
      return;
    }
  }
}
