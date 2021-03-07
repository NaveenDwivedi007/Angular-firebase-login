import { Component, OnInit, Input } from '@angular/core';
// import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
