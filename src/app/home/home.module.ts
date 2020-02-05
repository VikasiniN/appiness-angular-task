import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { ViewAllGitUsersComponent } from "./view-all-git-users/view-all-git-users.component";
import { ViewSingleGitUserComponent } from "./view-single-git-user/view-single-git-user.component";
import { SearchPipe } from "./view-all-git-users/search.pipe";

@NgModule({
  declarations: [
    ViewAllGitUsersComponent,
    ViewSingleGitUserComponent,
    SearchPipe
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: []
})
export class HomeModule {}
