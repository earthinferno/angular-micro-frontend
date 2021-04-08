import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRepoComponent } from './other-repo.component';

describe('OtherRepoComponent', () => {
  let component: OtherRepoComponent;
  let fixture: ComponentFixture<OtherRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
