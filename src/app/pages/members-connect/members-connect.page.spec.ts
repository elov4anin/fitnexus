import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembersConnectPage } from './members-connect.page';

describe('MembersConnectPage', () => {
  let component: MembersConnectPage;
  let fixture: ComponentFixture<MembersConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersConnectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembersConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
