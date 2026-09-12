import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListadoDatosComponent } from './listado-datos.component';
describe('AllstaffComponent', () => {
  let component: ListadoDatosComponent;
  let fixture: ComponentFixture<ListadoDatosComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListadoDatosComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
