import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const ENV = environment;
export abstract class HttpProviderService<T> {

  constructor(
    private http: HttpClient,
    private endpoint: string
  ) { }

  public getAll(): Promise<any> {
    const headers = this.getHeader();
    return this.http.get(`${ENV.API_URI}${this.endpoint}`, { headers }).toPromise();
  }

  getHeader() {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    return header;
  }

  post(model: T) {
    const headers = this.getHeader();
    return this.http.post(`${ENV.API_URI}${this.endpoint}`, model, { headers });
  }
}
