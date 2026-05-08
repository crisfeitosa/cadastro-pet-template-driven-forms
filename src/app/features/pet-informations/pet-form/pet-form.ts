import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule],
  templateUrl: './pet-form.html',
  styleUrls: ['./pet-form.css'],
})
export class PetForm {
  onSubmit(form: any) {
    console.log('Formulário enviado:', form.value);
  }
}
