import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRedirect } from './default-redirect';

describe('DefaultRedirect', () => {
  let component: DefaultRedirect;
  let fixture: ComponentFixture<DefaultRedirect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultRedirect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRedirect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
