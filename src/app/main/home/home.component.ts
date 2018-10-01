import {Component} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {pageHeaders} from "../../utils";

@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    pageHeaders(title, meta, "Prevent Overdose PA", "Prevent Overdose PA provides resources to help fight opioid addiction.");
  }
}
