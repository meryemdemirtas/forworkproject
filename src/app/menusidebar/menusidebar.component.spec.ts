import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusidebarComponent } from './menusidebar.component';

describe('MenusidebarComponent', () => {
  let component: MenusidebarComponent;
  let fixture: ComponentFixture<MenusidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
