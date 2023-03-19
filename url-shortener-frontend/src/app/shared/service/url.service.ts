import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  public encode(original_url: string): Observable<{short_url: string}> {
    return this.http.post<{short_url: string}>(`${this.baseUrl}/api/encode`, {original_url});
  }

  public decode(short_url: string): Observable<{original_url: string}> {
    return this.http.get<{original_url: string}>(`${this.baseUrl}/api/decode`, {params: {short_url}});
  }
}
