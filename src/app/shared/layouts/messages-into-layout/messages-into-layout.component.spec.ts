import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagesIntoLayoutComponent } from './messages-into-layout.component';

describe('MessagesIntoLayoutComponent', () => {
  let component: MessagesIntoLayoutComponent;
  let fixture: ComponentFixture<MessagesIntoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesIntoLayoutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesIntoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
