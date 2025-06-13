import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListadoSemanasComponent } from './listado-semanas.component';
describe('AllstaffComponent', () => {
  let component: ListadoSemanasComponent;
  let fixture: ComponentFixture<ListadoSemanasComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListadoSemanasComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSemanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
