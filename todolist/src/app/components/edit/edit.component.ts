import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edit:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.edit = true;
  }
  onCancel(){
    this.edit = false;
  }

}
