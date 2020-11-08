import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    const user: Person = {
      firstName: 'Mateusz',
      lastName: 'Stanczak'
    };
    this.people.push(user);
    const user2: Person = {
      firstName: 'James',
      lastName: 'Bond'
    };
    this.people.push(user2);
  }

}
