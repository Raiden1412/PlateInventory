import { Component, OnInit } from '@angular/core';
import { PlateDto } from 'app/shared/PlateDto.model';
import { Plate } from 'app/shared/Plate';

@Component({
  selector: 'jhi-plate-info',
  templateUrl: './plate-info.component.html',
  styleUrls: ['./plate-info.component.scss']
})
export class PlateInfoComponent implements OnInit {
  chipLayouts: string[];
  plateNames: string[];
  plateTypes: string[];
  layoutSuggestion = '';
  waferLatestRecord = '';
  show = false;
  plates: PlateDto[];

  plate: Plate;
  autoFillSelected: true;

  constructor() {
    this.chipLayouts = ['l1l1l1l1l1l1l1', 'l2l2l2l2l2l2l2', 'l3l3l3l3l3l3l3'];
    this.plateNames = ['name1', 'name2', 'name3'];
    this.plateTypes = ['24', '96'];
    this.plate = new Plate('', '', '', '', '', '');
  }

  ngOnInit() {}

  click() {
    this.show = !this.show;
    //console.log(this.chipLayouts.length);
  }
}
