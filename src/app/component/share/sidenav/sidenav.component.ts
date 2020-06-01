import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

@Input() abrirSidenav;
@Output() cerrarSideNav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  cerrarSidenavmethod(){
    this.cerrarSideNav.emit(false)
  }

}
