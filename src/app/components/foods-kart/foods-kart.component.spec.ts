import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsKartComponent } from './foods-kart.component';

describe('FoodsKartComponent', () => {
  let component: FoodsKartComponent;
  let fixture: ComponentFixture<FoodsKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsKartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodsKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
