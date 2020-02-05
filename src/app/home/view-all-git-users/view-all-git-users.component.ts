import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-all-git-users",
  templateUrl: "./view-all-git-users.component.html",
  styleUrls: ["./view-all-git-users.component.css"]
})
export class ViewAllGitUsersComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}
  gitUsers;
  searchText;
  ngOnInit() {
    this.getGitHubUsers();
  }
  // get the github users
  getGitHubUsers() {
    this.homeService.fetchAllGithubUsers().subscribe(
      data => {
        this.gitUsers = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  // loads the view-single-user component
  viewRepo(name) {
    this.router.navigate(["/singleuser", name]);
  }
}
