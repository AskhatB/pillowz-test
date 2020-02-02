import { Component, OnInit, Input } from "@angular/core";
import { Review } from "../../../interfaces/review";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"]
})
export class ReviewComponent implements OnInit {
  @Input() data: Review;

  constructor() {}

  ngOnInit() {}
}
