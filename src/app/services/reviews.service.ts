import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators/map";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class ReviewsService {
  constructor(protected http: HttpClient) {}

  getReviewList(): Observable<any> {
    return this.http
      .get("/assets/reviews.json")
      .pipe(map((response: Response) => response));
  }
}
