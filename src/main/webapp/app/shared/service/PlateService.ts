import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'app/app.constants';
import { Plate } from 'app/shared/Plate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlateDto } from 'app/shared/PlateDto.model';

@Injectable()
export class PlateService {
  private plateAddUrl = SERVER_API_URL + '/api/plate/addPlate';
  private plateDeleteUrl = SERVER_API_URL + '/api/plate/deletePlate';

  constructor(private http: HttpClient) {}
  addPlate(plate: Plate): Observable<PlateDto[]> {
    return this.http.post<PlateDto[]>(this.plateAddUrl, plate);
  }

  deletePlate(plateNames: String): Observable<PlateDto[]> {
    return this.http.delete<PlateDto[]>(`${this.plateDeleteUrl}/${plateNames}`);
  }
}
