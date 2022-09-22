import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './list/search/search.component';

@NgModule({
  declarations: [HeaderComponent, ListComponent, SearchComponent],
  exports: [HeaderComponent, ListComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
