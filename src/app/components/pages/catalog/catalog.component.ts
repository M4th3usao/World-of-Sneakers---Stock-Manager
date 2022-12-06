import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material';
import { SneakersService } from 'src/app/services/sneakers.service';
import { Sneaker } from '../../Sneaker';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
