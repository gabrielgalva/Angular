import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  usuario = {
    nome: '',
    senha: '',
    email: ''
  };
  mensagem: string = '';

  submitForm(formulario: any): void {
    if (formulario.valid) {
      if (this.usuario.nome && this.usuario.senha && this.usuario.email) {
        this.mensagem = `Olá, ${this.usuario.nome}, seu cadastro foi realizado com sucesso.`;
      } else {
        this.mensagem = 'Olá, preencha os campos vazios.';
      }
    } else {
      this.mensagem = 'Olá, preencha todos os campos corretamente.';
    }
  }
}
