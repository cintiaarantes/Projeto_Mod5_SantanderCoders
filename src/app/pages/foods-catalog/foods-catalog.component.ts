import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { FoodCardComponent } from '../../components/food-card/food-card.component';
import { IFood } from '../../interfaces/food.interface';

@Component({
  selector: 'app-foods-catalog',
  standalone: true,
  imports: [ NgIf, NgFor, FoodCardComponent],
  templateUrl: './foods-catalog.component.html',
  styleUrl: './foods-catalog.component.css'
})
export class FoodsCatalogComponent {
  @Output() addFoodToKart: EventEmitter<IFood> = new EventEmitter();

  foodsList: IFood[] = [
    {
      "id": 1,
      "nome": "Bacon Bad",
      "ingredientes": "Hambúrguer bovino - queijo mussarela - bacon - alface - tomate - maionese artesanal",
      "preço": 23.50,
      "referencia": "Breaking Bad",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 2,
      "nome": "BLEND PICANHA - House Of Carnes",
      "ingredientes": "Hambúrguer de picanha 160g - queijo mussarela - bacon - calabresa - frango desfiado - ovo - molho barbecue",
      "preço": 31.99,
      "referencia": "House of Dragons",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 3,
      "nome": "Demoliburguer",
      "ingredientes": "hambúrguer bovino - cheddar - hambúrguer bovino - cheddar - bacon - alface - tomate - cebola caramelizada - maionese artesanal",
      "preço": 29.99,
      "referencia": "Demolidor",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 4,
      "nome": "Dracarys",
      "ingredientes": "hambúrguer bovino 180g recheado com queijo mussarela - bacon caramelizado - alface - tomate - pimenta de cheiro - pimenta biquinho - molho Big Tasty (picante)",
      "preço": 34.99,
      "referencia": "Game of Thrones",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 5,
      "nome": "Game of Fomes",
      "ingredientes": "hambúrguer bovino - queijo mussarela - bacon - ovo - calabresa - frango desfiado - alface - tomate - maionese artesanal",
      "preço": 29.99,
      "referencia": "Game of Thrones",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 6,
      "nome": "La Carne sem Papel",
      "ingredientes": "Hambúrguer de costela 160g cheddar cremoso calabresa frango desfiado alface tomate cebola caramelizada maionese artesanal",
      "preço": 30.49,
      "referencia": "Game of Thrones",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 7,
      "nome": "Stranger Burguer",
      "ingredientes": "Hambúrguer bovino - queijo mussarela - bacon - ovo - calabresa - frango desfiado - abacaxi - cebola caramelizada - alface - tomate - maionese artesanal",
      "preço": 31.99,
      "referencia": "Stranger Things",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 8,
      "nome": "The Walking Eggs",
      "ingredientes": "Hamburguer bovino - cheddar - dois ovos - alface - tomate - maionese artesanal.",
      "preço": 22.99,
      "referencia": "The Walking Dead",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 9,
      "nome": "The Vegetarian Diaries",
      "ingredientes": "Hambúrguer de soja 160g - ovo - queijo mussarela - picles - alface - tomate",
      "preço": 22.99,
      "referencia": "The Vampire Diaries",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
    {
      "id": 10,
      "nome": "Tyrion Burgers - 04 minis burgers",
      "ingredientes": "Hambúrguer bovino - queijo mussarela - bacon - alface - tomate",
      "preço": 26.99,
      "referencia": "Game of Thrones - Tyrion Lannister",
      "totalEstoque": 20,
      "totalAddCarrinho": 0,
    },
  ];

  warnAboutAddFoodToKard(food: IFood){
    console.log("Olá, clicou no botão de compra!")
    console.log(food);
    this.addFoodToKart.emit(food);
  }
  

}
