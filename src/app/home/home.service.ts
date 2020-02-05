import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  // to fetch all the github users
  fetchAllGithubUsers(): Observable<any> {
    const url = "https://api.github.com/users";
    return this.http.get<any>(url);
  }

  // to fetch the respective users all repos
  fetchUsersRepo(name): Observable<any> {
    const url = "https://api.github.com/users/" + name + "/repos";
    return this.http.get<any>(url);
  }
}
