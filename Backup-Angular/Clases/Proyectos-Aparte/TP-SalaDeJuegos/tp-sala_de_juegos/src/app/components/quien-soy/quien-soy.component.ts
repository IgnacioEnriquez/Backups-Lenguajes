import { AfterViewInit, Component, ElementRef } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements AfterViewInit {
   
  backgroundColor : string = "";

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.backgroundColor = this.elementRef.nativeElement.ownerDocument
    .body.style.background;

    this.elementRef.nativeElement.ownerDocument
        .body.style.background = "rgb(122, 122, 122)"
}

ngOnDestroy()
{
  this.elementRef.nativeElement.ownerDocument
  .body.style.background = this.backgroundColor ;
}

}
