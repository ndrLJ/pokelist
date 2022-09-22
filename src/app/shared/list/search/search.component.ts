import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() public searchEmit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  /**
   *
   */
  ngOnInit(): void {}

  /**
   *
   * @param value emits search input value
   */
  public search(value: string) {
    this.searchEmit.emit(value);
  }
}
