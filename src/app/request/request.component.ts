import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Output() response: EventEmitter<string> = new EventEmitter<string>();
  public url: string;
  public methods: string[];
  public method: string = "Get";

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.methods = Object.keys(RequestMethod).map(k => RequestMethod[k]).filter(v => typeof v === "string") as string[];
  }

  sendRequest() {
    
  }

}
