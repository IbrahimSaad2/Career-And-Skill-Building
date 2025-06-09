import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass ,NgFor} from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-admin',
  imports: [NgClass,NgFor,RouterLink],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit {

  type: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type')!;
    
  }

 activeTab: string = 'HOME';

  tabs = [
    { name: 'HOME', label: 'HOME', icon: 'fas fa-home' },
    { name: 'JOBS', label: 'JOBS', icon: 'fas fa-briefcase' },
    { name: 'USERS', label: 'USERS', icon: 'fas fa-users' },
    { name: 'SETTINGS', label: 'SETTINGS', icon: 'fas fa-cog' },
    { name: 'SITE_CONTENT', label: 'SITE CONTENT', icon: 'fas fa-file-alt' },
    { name: 'TEMPLATES', label: 'TEMPLATES', icon: 'fas fa-paint-brush' },
    { name: 'ADMIN_USERS', label: 'ADMIN USERS', icon: 'fas fa-user-shield' },
  ];

  onTabClick(tabName: string, event: Event) {
    event.preventDefault();
    this.activeTab = tabName;
  }

  cards = [
  { type: 'jobs', title: 'Jobs', count: 11, icon: 'fas fa-file-alt', bg: 'bg-info' },
  { type: 'jobseekers', title: 'Jobseekers', count: 42, icon: 'fas fa-users', bg: 'bg-success' },
  { type: 'employers', title: 'Employers', count: 29, icon: 'fas fa-landmark', bg: 'bg-warning' },
  { type: 'applications', title: 'Job Applications', count: 33, icon: 'fas fa-chart-bar', bg: 'bg-danger' }
];
}
