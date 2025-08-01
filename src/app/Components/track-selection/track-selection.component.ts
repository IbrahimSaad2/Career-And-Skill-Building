import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { TrackService } from '../../Core/Services/track.service';
import { Tracks } from '../../Core/interfaces/tracks';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-selection',
  imports: [RouterLink,FormsModule],
  templateUrl: './track-selection.component.html',
  styleUrl: './track-selection.component.css'
})
export class TrackSelectionComponent {
    private readonly navbarService = inject(NavbarStateService)
    private readonly _TrackService = inject(TrackService)
    tracks:Tracks[] = []
    trackByid:Tracks[]= [];
    ngOnInit(): void {
      this.navbarService.setScrolled(true);  
      this._TrackService.getallTracks().subscribe({
        next:(res)=>{
          console.log(res);
          this.tracks = res
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
searchQuery = '';
click:boolean = false

searchTrack(): void {
  const query = this.searchQuery.trim();
  this.click = true;

  if (!query) {
    this.trackByid = [];
    return;
  }

  this._TrackService.getById(query).subscribe({
    next: (res) => this.trackByid = Array.isArray(res) ? res : [res],
    error: (err) => console.error(err)
  });
}
}
