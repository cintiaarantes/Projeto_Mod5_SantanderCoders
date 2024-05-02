import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FoodsCatalogComponent } from './pages/foods-catalog/foods-catalog.component';
import { FoodsKartComponent } from './components/foods-kart/foods-kart.component';
import { IFood } from './interfaces/food.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSidenavModule,
    MatIconModule, 
    HeaderComponent, 
    FoodsCatalogComponent,
    FoodsKartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'restaurante-ecommerce';
  addedFoodsList: IFood[] = [];

  findOrAddFood(food: IFood){
    for (let i=0; i<this.addedFoodsList.length; i++){
      if (food.id === this.addedFoodsList[i].id){
        this.addedFoodsList[i].totalAddCarrinho++;
        return;
      }
    }

    food.totalAddCarrinho = 1;
    this.addedFoodsList.push(food);
  }


  addFoodToKart(food: IFood) {
    console.log("Deu certo. O seu sanduiche já vai ser preparado e será add no carrinho!");
    
    this.findOrAddFood(food);
    this.addedFoodsList = [...this.addedFoodsList];
    
    console.log(this.addedFoodsList);
  }
}
