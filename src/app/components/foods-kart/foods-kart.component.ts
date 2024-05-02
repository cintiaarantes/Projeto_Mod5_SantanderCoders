import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { IFood } from '../../interfaces/food.interface';


@Component({
  selector: 'app-foods-kart',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './foods-kart.component.html',
  styleUrl: './foods-kart.component.css'
})
export class FoodsKartComponent implements OnInit, OnChanges{
  @Input("foodsList") addedFoodsList: IFood[] = [];

  ngOnInit() {
    console.log(this.addedFoodsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedFoodsList);
  }
}
