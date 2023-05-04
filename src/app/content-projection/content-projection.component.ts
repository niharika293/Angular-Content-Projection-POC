import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  @ContentChild('admin') adminRef!: TemplateRef<any>;

  // In the content DOM (appp-component), inside ng-template name is 'admin'. hence of type admin we're projecting 
  // the content & adminRef is the property to be used here in the called component where the content is to be 
  // projected. If the data is being passed in ng-template then use it , or else discard it. So, be careful with the name-matchings.
  
  constructor() { }

  ngOnInit(): void {
  }

}
