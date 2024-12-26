import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() state:any;
}