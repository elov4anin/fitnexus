import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealPlannerPage } from './meal-planner.page';

describe('MealPlannerPage', () => {
  let component: MealPlannerPage;
  let fixture: ComponentFixture<MealPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
