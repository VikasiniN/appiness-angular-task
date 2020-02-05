import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewAllGitUsersComponent } from "./view-all-git-users/view-all-git-users.component";
import { ViewSingleGitUserComponent } from "./view-single-git-user/view-single-git-user.component";

const routes: Routes = [
  {
    path: "allgitusers",
    component: ViewAllGitUsersComponent
  },
  {
    path: "singleuser/:username",
    component: ViewSingleGitUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
