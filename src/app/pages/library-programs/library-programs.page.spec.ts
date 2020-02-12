import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibraryProgramsPage } from './library-programs.page';

describe('LibraryProgramsPage', () => {
  let component: LibraryProgramsPage;
  let fixture: ComponentFixture<LibraryProgramsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryProgramsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
