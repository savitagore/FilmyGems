import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from '../blogs/blogs.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,RouterLink ,CommonModule,BlogsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  backgroundImageUrl: string = 'assets/img/landing-img.jpg';
  ngOnInit() {
    Aos.init({
      duration: 1200,
    });
  }
}


