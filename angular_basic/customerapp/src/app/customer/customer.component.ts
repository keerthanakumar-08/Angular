import { Component } from '@angular/core';
import { Customer } from '../Models/customer';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'

})
export class CustomerComponent{
    Customers:Array<Customer>;
    IsAddNew:boolean;
    constructor(){
        this.IsAddNew=true;
        this.Customers = new Array<Customer>();
        this.Customers.push(new Customer("keerthana","Software Eng"));
        this.Customers.push(new Customer("priya","Trainee developer"));
        this.Customers.push(new Customer("muthu","Intern"));

    }
    Save(){
        this.Customers.push(new Customer("kalai","Team Lead"));
    }
    // AddNew(){
    //     this.IsAddNew=true;
    // }   

}
    