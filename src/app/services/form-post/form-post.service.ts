import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormPostService {
  private url = `${environment.apiBase}/postdynform.json?key=8dfcfd50`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private client: HttpClient) { }

  public postForm(form: any): void {
    this.client
      .post(this.url, JSON.stringify(form), this.httpOptions)
      .subscribe(() => {
        console.log('Posted the form successfully.');
      });
  }
}
