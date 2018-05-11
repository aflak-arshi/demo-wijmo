import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public arrOne = [
    { label: "Action" },
    { label: "Another Action" },
    { label: "Dropdown", data: [{ label: "Action One" }] }
  ];

  title = "app";

  constructor() {
    console.log(this.arrOne);
  }
}
