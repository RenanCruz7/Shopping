import { Component, HostListener, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PromotionsService } from '../../services/promotions.service';
import { Product } from '../../types/types';
import { TecnologyService } from '../../services/tecnology.service';
import { HeaderComponent } from "../../components/header/header.component";
import { CartService } from '../../services/cart.service';
import { CartComponent } from "../../components/cart/cart.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, HeaderComponent, CartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  promotionsData$: Product[] = [];
  technologyData: Product[] = [];
  isCartOpen = false;

  constructor(private promotionService: PromotionsService, private technologyService: TecnologyService, private cartService: CartService) {
    this.promotionService.promotions$.subscribe(promotions => {
      this.promotionsData$ = promotions;
    });
    this.technologyService.technology$.subscribe(technology => {
      this.technologyData = technology;
    });
  }
  ngOnInit(): void {
    this.promotionService.refreshPromotions();
    this.technologyService.refreshTechnology();
  }
  onBuyProduct(product: Product): void {
    this.cartService.addToCart(product);
  }
  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const cartElement = document.querySelector('.cart-container');
    if (this.isCartOpen && cartElement && !cartElement.contains(event.target as Node)) {
      this.isCartOpen = false;
    }
  }
}
