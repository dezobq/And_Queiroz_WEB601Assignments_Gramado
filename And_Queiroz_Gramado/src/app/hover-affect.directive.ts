import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverAffect]'
})
export class HoverAffectDirective {
  @Input() hoverAffect: string = '';

  constructor(private el: ElementRef) {}


/*   on hover underline content.type. bold individualy content.tag and change the border of the content-card and when it leaves back to the original firstlclass */

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverAffect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'underline';
    } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    } else if (this.hoverAffect === 'border') {
      this.el.nativeElement.style.border = '2px solid blue';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverAffect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'none';
    } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'normal';
    } else if (this.hoverAffect === 'border') {
      this.el.nativeElement.style.border = '1px solid black';
    }
  }
}





 /*  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverAffect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'underline';
    } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverAffect === 'underline') {
      this.el.nativeElement.style.textDecoration = 'none';
    } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
} */
