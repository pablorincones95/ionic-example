import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductInterface } from '../interfaces/prodcut.interface';
import { firstValueFrom } from 'rxjs';

type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: ProductInterface[];
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    return firstValueFrom(
      this.http.get<ApiResponse>('https://peticiones.online/api/products')
    );
  }
}
