import { Component, OnInit } from "@angular/core";
import { ListData, ActionData } from "../app.model";

@Component({
  selector: "app-two-app",
  templateUrl: "./two-app.component.html",
  styleUrls: ["./two-app.component.css"]
})
export class TwoAppComponent implements OnInit {
  config: ListData = {
    title: "Sample Data",
    allowSearch: true,
    hasHeader: true,
    headerActions: [
      {
        name: "xyz",
        tooltip: "string",
        icon: "fas fa-folder-open",
        command: this.openFolder.bind(this)
      },
      {
        name: "xyz",
        tooltip: "string",
        icon: "fas fa-folder-open",
        command: this.openFolder.bind(this)
      }
    ],
    data: [
      {
        name: "jj",
        id: "mj",
        icon: "fas fa-folder-open",
        tooltip: "one"
      },
      {
        name: "45j",
        id: "mj2",
        icon: "fas fa-folder-open",
        tooltip: "two"
      },
      {
        name: "45j",
        id: "mj1",
        icon: "fas fa-folder-open",
        tooltip: "three"
      }
    ]
  };

  openFolder(abc) {
    alert(abc);
  }

  test1() {}

  constructor() {}

  ngOnInit() {}
}
