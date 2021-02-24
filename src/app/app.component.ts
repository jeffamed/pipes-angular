import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String = 'pipes';
  variables : String = "Jeffrey Moraga";
  empleados : String[] = ['Tony','Santi','Jeff','Les','Chel'];
  pi : number= Math.PI;
  porcentaje : number = 0.2594;
  salario : number = 12345.69;
  objeto : object = {foo:'bar', baz:'tuz', numero:[1,2,3,4,5], obj2:{foo2:'bar2',text:'hola Mundo'}}
}
