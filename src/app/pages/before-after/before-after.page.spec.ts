import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeforeAfterPage } from './before-after.page';

describe('BeforeAfterPage', () => {
  let component: BeforeAfterPage;
  let fixture: ComponentFixture<BeforeAfterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeAfterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeAfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
