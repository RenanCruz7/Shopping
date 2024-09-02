import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Product } from '../../types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
  @Output() buy = new EventEmitter<Product>();
  
  onBuy(): void {
    this.buy.emit(this.product);
  }
}
