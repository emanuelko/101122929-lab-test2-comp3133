import { Component } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  missionList = []

  constructor(private spacexapi: SpacexapiService){}

  getMissionData(){
    this.spacexapi.getMissions().subscribe(data=>{
      this.missionList = data
    })
  }
}
