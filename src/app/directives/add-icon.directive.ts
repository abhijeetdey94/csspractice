import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddIcon]'
})
export class AddIconDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) { }

}
