import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomePremiumPage } from './welcome-premium.page';

describe('WelcomePremiumPage', () => {
  let component: WelcomePremiumPage;
  let fixture: ComponentFixture<WelcomePremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePremiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
