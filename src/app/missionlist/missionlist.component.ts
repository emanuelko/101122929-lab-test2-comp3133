import { Component, OnInit } from '@angular/core'
import { SpacexapiService } from '../network/spacexapi.service'
import { MatSelectChange } from '@angular/material/select'
import { Mission } from '../models/mission'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionsList: any[] = []

  constructor(private spacexapi: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexapi.getMissions().subscribe(data => {
      this.missionsList = data
    })
  }
}
