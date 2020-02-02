import { Component, OnInit, OnDestroy } from "@angular/core";
import { ReviewsService } from "../../services/reviews.service";
import { Review } from "../../interfaces/review";
import { Subscription } from "rxjs";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit, OnDestroy {
  constructor(private reviewsService: ReviewsService) {}
  reviewsSubscription: Subscription;
  reviews: Review[];

  ngOnInit() {
    this.reviewsSubscription = this.reviewsService.getReviewList().subscribe(
      v => (this.reviews = v),
      err => console.log("err", err)
    );
  }

  ngOnDestroy(): void {
    if (this.reviewsSubscription) {
      this.reviewsSubscription.unsubscribe();
    }
  }
}
