import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }

}
