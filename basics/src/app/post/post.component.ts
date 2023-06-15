import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
 } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor(){
    console.log('contructor() called', this.postImg);
  }
  ngOnInit(){
    console.log('ngOnInit() called', this.postImg);
  }

  ngOnChanges(){
    console.log('ngOnChanges() called');

  }
  ngDoCheck(){
    console.log('ngDoCheck() called');
  }
  ngAfterContentChecked() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewChecked() {

  }
  ngAfterViewInit() {

  }
}
