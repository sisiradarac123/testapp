import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private contentfulService:ContentfulService) { }

  testValues$: Observable<any> | undefined;

  ngOnInit(): void {
   this.testValues$= this.contentfulService.getAllEntries();
  }

}
