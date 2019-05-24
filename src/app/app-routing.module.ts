import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent} from './post-list/post-list.component';
import { PostViewComponent} from './post-view/post-view.component';
import {EditViewComponent} from './edit-view/edit-view.component';
import { AddViewComponent } from './add-view/add-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-view/:id', component: PostViewComponent },
  { path: 'edit-view/:id', component: EditViewComponent },
  { path: 'add-view', component: AddViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
