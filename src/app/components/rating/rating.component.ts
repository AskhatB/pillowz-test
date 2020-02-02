import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  positive = [];
  negative = [];
  constructor() {}

  ngOnInit() {
    this.positive = Array(this.rating).fill(0);
    this.negative = Array(5 - this.rating).fill(0);
  }
}
