import { Injectable } from '@angular/core';
import foods from '../../../data/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  getAllProducts(){
    return foods
  }
  constructor() { }
}
