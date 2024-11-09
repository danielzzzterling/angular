import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>

    @for (game of games; track game.id){
      <li>{{ game.name }}</li>
    }

    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  games= [
    {
      id: 1,
      name: 'Dragon Ball'
    },
    {
      id: 2, 
      name: 'CoD'
    },
    {
      id: 3,
      name: 'Gta'
    },
    {
      id: 4,
      name: 'Minecraft'
    }
    
  ]

}
