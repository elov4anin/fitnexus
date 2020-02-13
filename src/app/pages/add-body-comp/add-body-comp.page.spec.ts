import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBodyCompPage } from './add-body-comp.page';

describe('AddBodyCompPage', () => {
  let component: AddBodyCompPage;
  let fixture: ComponentFixture<AddBodyCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBodyCompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBodyCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
