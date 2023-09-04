import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() linkClicked = new EventEmitter<string>();

  onRecipesClicked() {
    this.linkClicked.emit('Recipes');
  }

  onShoppingClicked() {
    this.linkClicked.emit('Shopping');
  }
}
