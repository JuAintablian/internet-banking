import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup: FormGroup
  valid = null

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      celular: [null, [Validators.required, Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.maxLength(30)]],
      endereco: [null, [Validators.required, Validators.maxLength(50)]]
    })
  }

  validField(field: string) {
    if(this.formGroup.get(field).touched) {
      if(this.formGroup.get(field).invalid) {
        return 'is-invalid'
      }else {
        return 'is-valid'
      }   
    }
  }

  saveDatas() {
    if(this.formGroup.valid){
      console.log(this.formGroup);
    }else{
      console.log('Preencha todos os campos');
    } 
  }
}