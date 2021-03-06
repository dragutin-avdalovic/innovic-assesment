import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LatestCommentsComponent } from './latest-comments/latest-comments.component';
import { PostListTableComponent } from './post-list-table/post-list-table.component';
import { AlertModule } from 'ngx-bootstrap';
import { PostViewComponent } from './post-view/post-view.component';
import { PostUserInfoComponent } from './post-user-info/post-user-info.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { AddViewComponent } from './add-view/add-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    PostListTableComponent,
    PostViewComponent,
    PostUserInfoComponent,
    PostDetailsComponent,
    PostCommentsComponent,
    EditViewComponent,
    AddViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
