import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirageAuSortComponent } from './tirage-au-sort.component';

describe('TirageAuSortComponent', () => {
  let component: TirageAuSortComponent;
  let fixture: ComponentFixture<TirageAuSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirageAuSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirageAuSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
