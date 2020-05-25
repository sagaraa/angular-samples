import { Injectable, Component, NgModule } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { Services } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printToConsole(args){
    console.log(args);
    
  }
}
//  @Component angular component
//  @NgModule angular module
//  @Injectable angular Services