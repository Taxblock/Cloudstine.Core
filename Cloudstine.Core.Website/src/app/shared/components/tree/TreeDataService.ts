import { Component, enableProdMode, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TreeDataService {
  constructor() {}
  requestOLd(url: string) {
   
  }

  request(url: string) {
    return Observable.of({
      title: 'root',
      leaf: false,
      children: [
        {
          title: 'GST',
          leaf: false,
          children: [
            {
              title: 'COMTRAIL',
              leaf: false,
              id: 0,
              name: 'Blanca Norman',
              isActive: true,
             
              children: [
                {
                  title: 'Test 2',
                  leaf: true,
                  id: 1000,
                  name: 'Test 44 Norman',
                  isActive: true,
               
                },
              ],
            },

        
           
          ],
        }],
    });
  }
}
