import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectTrackerPage } from './connect-tracker.page';

describe('ConnectTrackerPage', () => {
  let component: ConnectTrackerPage;
  let fixture: ComponentFixture<ConnectTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectTrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
