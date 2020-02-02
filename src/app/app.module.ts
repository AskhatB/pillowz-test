import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProfileShortComponent } from "./components/profile-short/profile-short.component";
import { ProfileMainComponent } from "./components/profile-main/profile-main.component";
import { AppartCardComponent } from "./components/appart-card/appart-card.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { ReviewComponent } from "./components/reviews/review/review.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileShortComponent,
    ProfileMainComponent,
    AppartCardComponent,
    ReviewsComponent,
    ReviewComponent,
    FooterComponent,
    RatingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
