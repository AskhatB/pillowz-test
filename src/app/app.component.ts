import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppartsService } from "../app/services/apparts.service";
import { Appart } from "../app/interfaces/appart";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "pillowz-test";
  appartSubscription: Subscription;
  apparts: Appart[];
  constructor(private appartService: AppartsService) {}

  ngOnInit() {
    this.appartSubscription = this.appartService
      .getAppartList()
      .subscribe((v: Appart[]) => (this.apparts = v));
  }

  ngOnDestroy(): void {
    if (this.appartSubscription) {
      this.appartSubscription.unsubscribe();
    }
  }
}
