import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: new FormControl('sambasivan004@gmail.com', Validators.required)
    })
  }
}
