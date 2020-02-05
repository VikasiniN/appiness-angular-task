import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../home.service";

@Component({
  selector: "app-view-single-git-user",
  templateUrl: "./view-single-git-user.component.html",
  styleUrls: ["./view-single-git-user.component.css"]
})
export class ViewSingleGitUserComponent implements OnInit {
  username;
  userDetails;
  constructor(private homeService: HomeService, private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get("username");
  }

  ngOnInit() {
    this.getUserRepo();
  }

  // get all the repo of the respective users
  getUserRepo() {
    this.homeService.fetchUsersRepo(this.username).subscribe(
      data => {
        this.userDetails = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
