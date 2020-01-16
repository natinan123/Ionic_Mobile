import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MailPage } from './mail.page';

describe('MailPage', () => {
  let component: MailPage;
  let fixture: ComponentFixture<MailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
