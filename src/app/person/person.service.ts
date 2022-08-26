import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';
import {BaseService} from '../general/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService {

  public personUrl = this.baseUrl + 'rest/person';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.personUrl}/getAll`);
  }

  loadPerson(personId: string): Observable<Person> {
    return this.httpClient.get<Person>(`${this.personUrl}/load/${personId}`);
  }

  savePerson(person: Person): Observable<Object> {
    return this.httpClient.post(`${this.personUrl}/save`, person);
  }

  deletePerson(person: Person): Observable<any> {
    return this.httpClient.delete(`${this.personUrl}/delete/${person.id}`);
  }
}
