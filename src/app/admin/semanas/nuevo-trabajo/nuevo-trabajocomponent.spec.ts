import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NuevoTrabajoComponent } from "./nuevo-trabajo.component";
describe("NuevoContrato", () => {
  let component: NuevoTrabajoComponent;
  let fixture: ComponentFixture<(NuevoTrabajoComponent)>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [(NuevoTrabajoComponent)],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent((NuevoTrabajoComponent));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
