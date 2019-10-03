import { PlateDto } from 'app/shared/PlateDto.model';

export class Plate implements PlateDto {
  constructor(
    public assayBarcode: string,
    public inventoryBarcode: string,
    public chipLayout: string,
    public plateName: string,
    public plateType: string,
    public waferId: string
  ) {}
}
