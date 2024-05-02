import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IFood } from '../../interfaces/food.interface';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [ NgIf, MatCardModule ],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent implements OnInit {
  /*@0Input() food: IFood = {
    "id": 1,
    "nome": "Bacon Bad",
    "ingredientes": "Hambúrguer bovino - queijo mussarela - bacon - alface - tomate - maionese artesanal",
    "preço": 23.50,
    "referencia": "Breaking Bad"
  };*/
  @Input() food?: IFood;
  @Output() addFoodToKart: EventEmitter<void> = new EventEmitter();

  constructor(){

  }

  ngOnInit(){
    //console.log(this.food); 
  }

  addToShoppingKart(){
    this.addFoodToKart.emit();
    console.log("Sanduiche adicionado ao carrinho com sucesso!");
  }
}
