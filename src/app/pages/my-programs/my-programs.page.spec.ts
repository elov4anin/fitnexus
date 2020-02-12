import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProgramsPage } from './my-programs.page';

describe('MyProgramsPage', () => {
  let component: MyProgramsPage;
  let fixture: ComponentFixture<MyProgramsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgramsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
