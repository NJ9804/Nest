import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent,RouterModule]
})
export class AppComponent {
  title = 'soul';
  services = [
    { id: 1, title: 'Cultural Tours', description: 'Explore India\'s rich heritage.', iconClass: 'fa fa-cogs' },
    { id: 2, title: 'Spiritual Retreats', description: 'Find peace in India\'s spiritual centers.', iconClass: 'fa fa-heart' },
    { id: 3, title: 'Adventure Trips', description: 'Experience thrill and adventure across India.', iconClass: 'fa fa-mountain' },
    { id: 4, title: 'Luxury Travel', description: 'Indulge in opulence and luxury.', iconClass: 'fa fa-bed' },
  ];
  
  states = [
    {
      id: 1,
      name: 'Andhra Pradesh',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/varaha-lakshmi-narasimha-temple-buddhist-complex-visakhapatnam-andhra-pradesh-1-attr-hero?qlt=82&ts=1726744344834'
    },
    {
      id: 2,
      name: 'Arunachal Pradesh',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/giant-budhha-statue-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1726743111236' // Add appropriate base64 image data
    },
    {
      id: 3,
      name: 'Assam',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw-Noqgg_MRkLqwtp9rWr_Fu57S4ZCsFrsw&s'
    },
    {
      id: 4,
      name: 'Bihar',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/nalanda-stupa-heritage-nalanda-bihar-1-attr-hero?qlt=82&ts=1726741017068'
    },
    {
      id: 5,
      name: 'Chhattisgarh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZf8eJPA5hlgot0u4nwcNWrqJTPM_7zOUug&s'
    },
    {
      id: 6,
      name: 'Goa',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=600&h=-1&s=1'
    },
    {
      id: 7,
      name: 'Gujarat',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dwarika-dhish-main-temple-dwarka-gujarat-1-attr-hero?qlt=82&ts=1726734672385'
    },
    {
      id: 8,
      name: 'Haryana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRmpeLNehiseX85S1_dvzjM2LqwSF9uPGBg&s'
    },
    {
      id: 9,
      name: 'Himachal Pradesh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSmMqRNkztSQK9LPY6rrw-4vgWyKsi4rI7w&s'
    },
    {
      id: 10,
      name: 'Jharkhand',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-deori-temple-ranchi-jharkhand-deori-mandir-city-hero?qlt=82&ts=1726723880071'
    },
    {
      id: 11,
      name: 'Karnataka',
      image: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/11/Murudeshwar.jpg'
    },
    {
      id: 12,
      name: 'Kerala',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nRwwajw-OQXSCcraP1eEM9JYEg_CrjniiQ&s'
    },
    {
      id: 13,
      name: 'Madhya Pradesh',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 14,
      name: 'Maharashtra',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 15,
      name: 'Manipur',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 16,
      name: 'Meghalaya',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 17,
      name: 'Mizoram',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 18,
      name: 'Nagaland',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 19,
      name: 'Odisha',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 20,
      name: 'Punjab',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 21,
      name: 'Rajasthan',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 22,
      name: 'Sikkim',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 23,
      name: 'Tamil Nadu',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 24,
      name: 'Telangana',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 25,
      name: 'Tripura',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 26,
      name: 'Uttar Pradesh',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 27,
      name: 'Uttarakhand',
      image: 'data:image/jpeg;base64,....'
    },
    {
      id: 28,
      name: 'West Bengal',
      image: 'data:image/jpeg;base64,....'
    }
  ];
}

