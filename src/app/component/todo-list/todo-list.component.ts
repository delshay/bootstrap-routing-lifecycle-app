import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: string[] = ['Do homework', 'Pet a Dog', 'Wash dishes'];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showAlert() {
    alert('showAlert() at partent');
  }

}
