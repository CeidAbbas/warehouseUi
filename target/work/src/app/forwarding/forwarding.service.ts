import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "../general/service/base.service";
import {Forwarding} from "./forwarding";

@Injectable({
  providedIn: 'root'
})
export class ForwardingService extends BaseService {

  public forwardingUrl = this.baseUrl + 'rest/forwarding';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllForwarding(): Observable<Forwarding[]> {
    return this.httpClient.get<Forwarding[]>(`${this.forwardingUrl}/getAll`);
  }

  loadForwarding(forwardingId: string): Observable<Forwarding> {
    return this.httpClient.get<Forwarding>(`${this.forwardingUrl}/load/${forwardingId}`);
  }

  saveForwarding(forwarding: Forwarding): Observable<Object> {
    return this.httpClient.post<Forwarding>(`${this.forwardingUrl}/save`, forwarding);
  }

  deleteForwarding(forwarding: Forwarding): Observable<any> {
    return this.httpClient.delete(`${this.forwardingUrl}/delete/${forwarding.id}`);
  }
}
