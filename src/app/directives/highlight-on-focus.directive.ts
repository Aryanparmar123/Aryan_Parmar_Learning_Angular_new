import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus = '';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.setHighlight(this.appHighlightOnFocus || 'lightgreen');
  }

  @HostListener('blur') onBlur() {
    this.setHighlight('');
  }

  private setHighlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;

  }
}
