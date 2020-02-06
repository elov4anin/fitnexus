import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardNews } from './card-news.component';

describe('CardNewsPage', () => {
  let component: CardNews;
  let fixture: ComponentFixture<CardNews>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNews ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
