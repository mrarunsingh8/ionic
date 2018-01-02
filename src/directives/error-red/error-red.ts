import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the ErrorRedDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[error-red]' // Attribute selector
})
export class ErrorRedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#f53d3d';
  }



}
