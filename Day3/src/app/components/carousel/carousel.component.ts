import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true, // Marking the component as standalone
  imports: [CommonModule], // Ensure CommonModule is imported for ngFor
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images=[
    {
      "id": 1,
      "image_url": "https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt_text": "..."
    },
    {
      "id": 2,
      "image_url": "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt_text": "..."
    },
    {
      "id": 3,
      "image_url": "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt_text": "..."
    }
  ]
  
}
