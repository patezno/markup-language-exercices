import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {

  isSended: boolean;
  contactForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm()  {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', []]
    });
  }

  send() {
    this.isSended = true;
    setTimeout(() => {
      this.isSended = false;
    }, 7000);
  }
}
