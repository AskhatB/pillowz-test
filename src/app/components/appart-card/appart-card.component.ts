import { Component, OnInit, Input } from "@angular/core";
import { Appart } from "../../interfaces/appart";

@Component({
  selector: "app-appart-card",
  templateUrl: "./appart-card.component.html",
  styleUrls: ["./appart-card.component.scss"]
})
export class AppartCardComponent implements OnInit {
  @Input() data: Appart;
  constructor() {}

  ngOnInit() {}
}
