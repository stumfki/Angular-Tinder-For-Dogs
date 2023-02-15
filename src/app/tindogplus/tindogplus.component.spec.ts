import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindogplusComponent } from './tindogplus.component';

describe('TindogplusComponent', () => {
  let component: TindogplusComponent;
  let fixture: ComponentFixture<TindogplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TindogplusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TindogplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
