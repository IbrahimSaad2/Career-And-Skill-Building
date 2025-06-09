import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details-admin',
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './details-admin.component.html',
  styleUrl: './details-admin.component.css'
})
export class DetailsAdminComponent implements OnInit{
  type: string = '';
  data: any[] = [];
  selectedItem: any = null;
  showModal: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type')!;

    switch (this.type) {
      case 'jobs':
        this.data = [
          { id: 1, title: 'Frontend Developer', status: 'Open', location: 'Cairo', postedAt: '2024-05-20', description: 'Angular + Bootstrap' },
          { id: 2, title: 'Backend Developer', status: 'Closed', location: 'Alexandria', postedAt: '2024-05-15', description: 'Node.js + MongoDB' }
        ];
        break;

      case 'jobseekers':
        this.data = [
          { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', phone: '0100000001', skills: 'Angular, Node.js', experience: '3 years' },
          { id: 2, name: 'Salma Mostafa', email: 'salma@example.com', phone: '0100000002', skills: 'Python, Django', experience: '2 years' }
        ];
        break;

      case 'employers':
        this.data = [
          { id: 1, company: 'TechCorp', owner: 'Mohamed Salah', industry: 'Software', email: 'hr@techcorp.com', employees: 50 },
          { id: 2, company: 'Webify', owner: 'Laila Youssef', industry: 'Web Services', email: 'info@webify.com', employees: 20 }
        ];
        break;

      case 'applications':
        this.data = [
          { id: 1, job: 'Frontend Dev', applicant: 'Ahmed Ali', status: 'Pending', date: '2024-05-21', notes: 'Reviewed by HR' },
          { id: 2, job: 'Backend Dev', applicant: 'Salma Mostafa', status: 'Accepted', date: '2024-05-18', notes: 'Passed technical' }
        ];
        break;
    }
  }

  deleteItem(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }

  editItem(item: any) {
    this.selectedItem = { ...item };
    this.showModal = true;
  }

  saveChanges() {
    const index = this.data.findIndex(d => d.id === this.selectedItem.id);
    if (index !== -1) {
      this.data[index] = this.selectedItem;
    }
    this.showModal = false;
  }

  closeModal() {
    this.showModal = false;
  }
}
