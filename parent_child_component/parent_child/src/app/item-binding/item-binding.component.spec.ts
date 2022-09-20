import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBindingComponent } from './item-binding.component';

describe('ItemBindingComponent', () => {
  let component: ItemBindingComponent;
  let fixture: ComponentFixture<ItemBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
