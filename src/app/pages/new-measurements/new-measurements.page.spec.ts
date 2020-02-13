import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMeasurementsPage } from './new-measurements.page';

describe('NewMeasurementsPage', () => {
  let component: NewMeasurementsPage;
  let fixture: ComponentFixture<NewMeasurementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMeasurementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMeasurementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
