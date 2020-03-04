import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatProgramPage } from './stat-program.page';

describe('StatProgramPage', () => {
  let component: StatProgramPage;
  let fixture: ComponentFixture<StatProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
