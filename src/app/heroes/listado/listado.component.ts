import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Goku'];
  heroeBorrado: string ='';

  borraHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
