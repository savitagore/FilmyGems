import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit  {

  ngOnInit() {
    Aos.init({
      duration: 1500,  
    });
  }
}