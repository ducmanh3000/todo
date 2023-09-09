import { Component, OnInit } from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faChevronDown = faChevronDown;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    
  }

  toggleAll() {
    this.todoService.toggleAll();
  }
}
