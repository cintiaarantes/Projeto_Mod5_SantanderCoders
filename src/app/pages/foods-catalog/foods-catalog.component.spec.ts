import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsCatalogComponent } from './foods-catalog.component';

describe('FoodsCatalogComponent', () => {
  let component: FoodsCatalogComponent;
  let fixture: ComponentFixture<FoodsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
