import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBountiesComponent } from './building-bounties.component';

describe('BuildingBountiesComponent', () => {
  let component: BuildingBountiesComponent;
  let fixture: ComponentFixture<BuildingBountiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingBountiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingBountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
