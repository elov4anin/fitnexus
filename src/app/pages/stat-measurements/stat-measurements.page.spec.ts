import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatMeasurementsPage } from './stat-measurements.page';

describe('StatMeasurementsPage', () => {
  let component: StatMeasurementsPage;
  let fixture: ComponentFixture<StatMeasurementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatMeasurementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatMeasurementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
