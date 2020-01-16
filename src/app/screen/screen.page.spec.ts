import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenPage } from './screen.page';

describe('ScreenPage', () => {
  let component: ScreenPage;
  let fixture: ComponentFixture<ScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
