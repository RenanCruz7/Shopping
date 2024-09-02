import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PromotionsService } from '../../services/promotions.service';
import { Product } from '../../types/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent,HttpClientModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  promotionsData: Product[] = [];

  constructor(private promotionService: PromotionsService ) { }
  ngOnInit(): void {
    this.getPromotions();
  }

  getPromotions() {
    this.promotionService.getPromotions().subscribe(promotions => {
      this.promotionsData = promotions;
    });
  }
}
