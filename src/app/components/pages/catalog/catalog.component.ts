import { Component, OnInit, ViewChild} from '@angular/core';
import { SneakersService } from 'src/app/services/sneakers.service';
import { Sneaker } from '../../Sneaker';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  sneakers: Sneaker[] = [];

  sneaker = {
    name: 'Nike Shox',
    brand: 'Nike',
    color: 'gray'
  }

  constructor(private sneakersService: SneakersService) { 
    this.getSneakers()
  }

  ngOnInit(): void {}
  

  getSneakers(): void{
    this.sneakersService.getAll().subscribe((sneakers) => (this.sneakers = sneakers));
  }

  removeSneaker(sneaker: Sneaker){
    console.log('Removendo calçado');
    this.sneakers = this.sneakers.filter((a) => sneaker.name !== a.name);
    this.sneakersService.remove(sneaker.id).subscribe();

  }
}
