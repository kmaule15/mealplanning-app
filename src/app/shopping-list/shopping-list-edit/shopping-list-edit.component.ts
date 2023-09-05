import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }
}
