import { HotelService } from "./hotels.service";
import { TestBed } from "@angular/core/testing";

describe("HotelService", () => {

  let service: HotelService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HotelService
      ]
    });
    service = TestBed.get(HotelService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
