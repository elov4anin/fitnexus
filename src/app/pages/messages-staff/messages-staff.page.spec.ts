import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagesStaffPage } from './messages-staff.page';

describe('MessagesStaffPage', () => {
  let component: MessagesStaffPage;
  let fixture: ComponentFixture<MessagesStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesStaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
