import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VspLibraryComponent } from './vsp-library.component';

describe('VspLibraryComponent', () => {
  let component: VspLibraryComponent;
  let fixture: ComponentFixture<VspLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VspLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VspLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
