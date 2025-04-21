import { NotfoundComponent } from './Components/notfound/notfound.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { EmployeerDashboardComponent } from './Components/employeer-dashboard/employeer-dashboard.component';
import { ExamComponent } from './Components/exam/exam.component';
import { JobApplicationComponent } from './Components/job-application/job-application.component';
import { JobSeekerDashboardComponent } from './Components/job-seeker-dashboard/job-seeker-dashboard.component';
import { TrackSelectionComponent } from './Components/track-selection/track-selection.component';
import { PostsComponent } from './Components/posts/posts.component';
import { SkillsAndToolsComponent } from './Components/skills-and-tools/skills-and-tools.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'signup', component: SignupComponent, title: 'SignUp' },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home-User' },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        title: 'Admin-Dashbord',
      },
      {
        path: 'courseDetails',
        component: CourseDetailsComponent,
        title: 'Course Details',
      },
      {
        path:'skillsAndTools',
        component:SkillsAndToolsComponent,
        title:'TakeSkills'
      },
      {
        path: 'employeerDashboard',
        component: EmployeerDashboardComponent,
        title: 'Employeer-Dashboard',
      },
      {
        path: 'jobApplication',
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
      { path: '**', component: NotfoundComponent },
    ],
  },
];
