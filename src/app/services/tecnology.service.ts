import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TecnologyService {
  private technologySubject = new BehaviorSubject<Product[]>([]);
  technology$ = this.technologySubject.asObservable();

  constructor(private http: HttpClient) { }

  getTechnology(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products-tecnology').pipe(
      delay(100),
      tap((technology: Product[]) => this.technologySubject.next(technology))
    );
  }

  refreshTechnology(): void {
    this.getTechnology().subscribe();
  }
}
