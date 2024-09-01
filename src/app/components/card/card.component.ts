import { Component,Input } from '@angular/core';
import { Product } from '../../types/types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: Product = {
    name: '',
    price: 0,
    imageUrl: '',
    description: '',
  };
}
