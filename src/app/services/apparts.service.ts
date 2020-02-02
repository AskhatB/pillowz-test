import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators/map";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class AppartsService {
  constructor(protected http: HttpClient) {}

  getAppartList(): Observable<any> {
    return this.http
      .get("/assets/apparts.json")
      .pipe(map((response: Response) => response));
  }
}
