import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCocktailsComponent } from './more-cocktails.component';

describe('MoreCocktailsComponent', () => {
  let component: MoreCocktailsComponent;
  let fixture: ComponentFixture<MoreCocktailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreCocktailsComponent]
    });
    fixture = TestBed.createComponent(MoreCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
