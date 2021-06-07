import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-btn-scroll',
  templateUrl: './btn-scroll.component.html'
})
export class BtnScrollComponent {
  btnScroll = false;
  
  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    this.btnScroll = window.pageYOffset >=200 ? true : false;
  } 

  constructor(){
  }
  
  scrollTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
