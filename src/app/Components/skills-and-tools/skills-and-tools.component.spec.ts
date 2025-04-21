import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndToolsComponent } from './skills-and-tools.component';

describe('SkillsAndToolsComponent', () => {
  let component: SkillsAndToolsComponent;
  let fixture: ComponentFixture<SkillsAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAndToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
