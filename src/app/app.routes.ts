import { LoginEmployerComponent } from './Components/login-employer/login-employer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { ExamComponent } from './Components/exam/exam.component';
import { JobApplicationComponent } from './Components/job-application/job-application.component';
import { JobSeekerDashboardComponent } from './Components/job-seeker-dashboard/job-seeker-dashboard.component';
import { TrackSelectionComponent } from './Components/track-selection/track-selection.component';
import { PostsComponent } from './Components/posts/posts.component';
import { SkillsAndToolsComponent } from './Components/skills-and-tools/skills-and-tools.component';
import { JobSeekerLayout } from './layouts/job-seeker-layout/job-seeker-layout.component';
import { EmployerlayoutComponent } from './layouts/employerlayout/employerlayout.component';
import { HomeEmployerComponent } from './Components/home-employer/home-employer.component';
import { DetailsEmployerComponent } from './Components/details-employer/details-employer.component';
import { EmployerDashBoardComponent } from './Components/employer-dash-board/employer-dash-board.component';
import { AuthEmployerLayoutComponent } from './layouts/auth-employer-layout/auth-employer-layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { SignupEmployerComponent } from './Components/signup-employer/signup-employer.component';
import { authGuard } from './Core/guards/auth.guard';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DetailsAdminComponent } from './Components/details-admin/details-admin.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
      {path:'landingPage',component:LandingPageComponent,title:"Landing Page"},
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'signup', component: SignupComponent, title: 'SignUp' },
      {
        path: 'skillsAndTools',
        component: SkillsAndToolsComponent,
        title: 'TakeSkills',
      },
    ],
  },
  {
    path: 'authEmployer',
    component: AuthEmployerLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginEmployerComponent,
        title: 'Login-Employer',
      },
      {
        path: 'signup',
        component: SignupEmployerComponent,
        title: 'SignUp-Employer',
      },
    ],
  },
  {
    canActivate:[authGuard], //this is guard use when abdelrahman make apis
    path: 'jobseeker',
    component: JobSeekerLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home-User' },
      {
        path: 'courseDetails',
        component: CourseDetailsComponent,
        title: 'Course Details',
      },
      {
        path: 'jobApplication/:id',
        component: JobApplicationComponent,
        title: 'Job Application',
      },
      {
        path: 'jobSeekerDashboard',
        component: JobSeekerDashboardComponent,
        title: 'Job Seeker-Dashboard',
      },
      { path: 'tracks', component: TrackSelectionComponent, title: 'Tarcks' },
      { path: 'posts', component: PostsComponent, title: 'Posts' },
      { path: 'exam', component: ExamComponent, title: 'Exam' },
    ],
  },
  {
    canActivate:[authGuard],
    path:'employer',
    component:EmployerlayoutComponent,
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeEmployerComponent,title:'Home-Employeer'},
      {path:'dashboard',component:EmployerDashBoardComponent,title:'Dashboard-Employeer'},
      {path:'details',component:DetailsEmployerComponent,title:'Details-Employeer'},
      { path: 'post-job', component: PostJobComponent , title:'post-Job'},
    ]
  },

    {
    path: 'authAdmin',
    component: AuthAdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch:'full'},
      {
        path: 'login',
        component: AdminLoginComponent,
        title: 'Login-Admin',
      },
    ]
  },
  {
    path: 'admin',
    component:AdminLayoutComponent,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', 
        component: HomeAdminComponent,
        title:'Admin Home',
       },
      { path: 'details/:type', 
        component: DetailsAdminComponent,
        title: 'details'
       },
    ]
  },
  
  { path: '**', component: NotfoundComponent }

];
