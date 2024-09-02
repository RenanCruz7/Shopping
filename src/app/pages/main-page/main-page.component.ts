import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PromotionsService } from '../../services/promotions.service';
import { Product } from '../../types/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TecnologyService } from '../../services/tecnology.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  promotionsData$: Product[] = [];
  technologyData: Product[] = [];

  constructor(private promotionService: PromotionsService, private technologyService: TecnologyService) {
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
}
