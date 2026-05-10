import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShelterNameValidatorDirective } from '../../../shared/directives/shelter-name-validator-directive';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule, ShelterNameValidatorDirective],
  templateUrl: './pet-form.html',
  styleUrls: ['./pet-form.css'],
})
export class PetForm {
  onSubmit(form: any) {
    console.log('Formulário enviado:', form.value);
  }
}
