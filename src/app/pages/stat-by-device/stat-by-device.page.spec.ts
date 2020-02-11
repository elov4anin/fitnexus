import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatByDevicePage } from './stat-by-device.page';

describe('StatByDevicePage', () => {
  let component: StatByDevicePage;
  let fixture: ComponentFixture<StatByDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatByDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatByDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
