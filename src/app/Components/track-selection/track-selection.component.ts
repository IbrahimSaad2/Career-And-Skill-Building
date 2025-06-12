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

searchTrack(): void {
  const query = this.searchQuery.trim();
  if (query) {
    this._TrackService.getById(query).subscribe({
      next: (res) => {
        console.log(res);
        this.tracks = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
}
