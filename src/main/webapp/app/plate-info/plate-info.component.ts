import { Component, OnInit } from '@angular/core';
import { PlateDto } from 'app/shared/PlateDto.model';
import { Plate } from 'app/shared/Plate';
import { PlateService } from 'app/shared/service/PlateService';

@Component({
  selector: 'jhi-plate-info',
  templateUrl: './plate-info.component.html',
  styleUrls: ['./plate-info.component.scss'],
  providers: [PlateService]
})
export class PlateInfoComponent implements OnInit {
  chipLayouts: string[];
  plateNames: string[];
  plateTypes: string[];
  layoutSuggestion = '';
  waferLatestRecord = '';
  show = false;
  plates: PlateDto[];

  plate: PlateDto;
  autoFillSelected: true;

  constructor(private plateService: PlateService) {
    this.chipLayouts = ['114', '200', '71'];
    this.plateNames = ['ENA', 'WZMR', 'ANA'];
    this.plateTypes = ['24', '96'];
    this.plate = new Plate('', '', '', '', '', '');
  }

  ngOnInit() {}

  insert() {
    this.show = !this.show;
    //console.log(this.chipLayouts.length);
    //if(this.plate.assayBarcode.length !== 18){
    this.plate = new Plate(
      this.plate.assayBarcode,
      this.plate.inventoryBarcode,
      this.plate.chipLayout,
      this.plate.plateName,
      this.plate.plateType,
      this.plate.waferId
    );
    console.log(
      this.plate.assayBarcode +
        ':' +
        this.plate.inventoryBarcode +
        ':' +
        this.plate.chipLayout +
        ':' +
        this.plate.plateName +
        ':' +
        this.plate.plateType +
        ':' +
        this.plate.waferId
    );
    this.plateService.addPlate(this.plate).subscribe(plateDto => {
      if (!plateDto) {
        this.plates = [];
      } else {
        this.plates = plateDto;
      }
    });
    //}
  }
}
