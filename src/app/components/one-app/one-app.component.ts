import { Component, OnInit, Input } from "@angular/core";
import { ListData } from '../app.model';
import * as wjInput from 'wijmo/wijmo.angular2.input';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';
import * as wjCore from 'wijmo/wijmo.angular2.core';

@Component({
  selector: "app-one-app",
  templateUrl: "./one-app.component.html",
  styleUrls: ["./one-app.component.css"],
})
export class OneAppComponent implements OnInit {

  @Input("config") config: ListData;
  private searchText: string = "";

  constructor() {}

  ngOnInit() {}

  private searchTextChanged(input) {}

  private testCommand(item) {
    item.command("abc");
  }
}
