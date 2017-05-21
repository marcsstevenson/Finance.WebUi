import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //moduleId: module.id,
  selector: 'fwui-PersonalApplications',
  templateUrl: './reporting-list.component.html',
  styleUrls: ['./reporting-list.component.scss']
})
export class ReportingListComponent {
  constructor(
    private router: Router) { }
}