import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PromotionsService } from '../../services/promotions.service';
import { Product } from '../../types/types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TecnologyService } from '../../services/tecnology.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent,HttpClientModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  promotionsData: Product[] = [];
  technologyData: Product[] = [];

  constructor(private promotionService: PromotionsService, private technologyService: TecnologyService ) { }
  ngOnInit(): void {
    this.getPromotions();
    this.getTechnology();
  }

  getPromotions() {
    this.promotionService.getPromotions().subscribe(promotions => {
      this.promotionsData = promotions;
    });
  }

  getTechnology() {
    this.technologyService.getTechnology().subscribe(technology => {
      this.technologyData = technology;
  });
  }
}
