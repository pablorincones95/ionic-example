import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductInterface } from 'src/app/core/interfaces/prodcut.interface';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ProductListPage implements OnInit {
  public products: ProductInterface[] = [];

  private productsSrv = inject(ProductsService);
  async ngOnInit() {
    console.log('product list');
    try {
      const response = await this.productsSrv.getAll();
      this.products = response.results;
    } catch (error) {
      alert(error);
    }
  }
}
