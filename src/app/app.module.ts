import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { DashboardComponent } from './Layout/pages/dashboard/dashboard.component';
import { MemberComponent } from './Layout/pages/member/member.component';
import { MemberAddComponent } from './Layout/pages/member-add/member-add.component';
import { EditmemberComponent } from './Layout/pages/editmember/editmember.component';
import {AdminListComponent } from './Layout/pages/Admin/admin-list/admin-list.component';
import { AdminAddComponent } from './Layout/pages/Admin/admin-add/admin-add.component';
import { EmployeeComponent } from './Layout/pages/employee/employee.component';
import { ProfileComponent } from './Layout/pages/profile/profile.component';
import { AllbookComponent } from './Layout/pages/allbook/allbook.component';
import { BookavilabltyComponent } from './Layout/pages/bookavilablty/bookavilablty.component';
import { EditbookComponent } from './Layout/pages/editbook/editbook.component';
import { BookdetailsComponent } from './Layout/pages/bookdetails/bookdetails.component';
import { OperationComponent } from './Layout/pages/operation/operation.component';
import { Error400Component } from './Layout/pages/errors/error400/error400.component';
import { Error404Component } from './Layout/pages/errors/error404/error404.component';
import { Error403Component } from './Layout/pages/errors/error403/error403.component';
import { Error500Component } from './Layout/pages/errors/error500/error500.component';
import { Error503Component } from './Layout/pages/errors/error503/error503.component';
import { DashboardappComponent } from './dashboardapp/dashboardapp.component';
import { WebappComponent } from './webapp/webapp.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { MemberProfileComponent } from './Layout/pages/member-profile/member-profile.component';
import { BookAddComponent } from './Layout/pages/book-add/book-add.component';
import { EmployeeAddComponent } from './Layout/pages/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Layout/pages/employee-edit/employee-edit.component';
import { BookOperationBorrowComponent } from './Layout/pages/book-operation-borrow/book-operation-borrow.component';
import { BookOperationReadComponent } from './Layout/pages/book-operation-read/book-operation-read.component';
import { FilteredBooksComponent } from './Layout/pages/filtered-books/filtered-books.component';



import { RouterModule, Routes } from '@angular/router';

import { AdminDetailsComponent } from './Layout/pages/Admin/admin-details/admin-details.component';
import { BADetailsComponent } from './Layout/pages/BasicAdmin/BasicAdmin-details/ba-details.component';
import { BasicAdminAddComponent } from './Layout/pages/BasicAdmin/basic-admin-add/basic-admin-add.component';
import { BasicAdminListComponent } from './Layout/pages/BasicAdmin/basic-admin-list/basic-admin-list.component';
import { AdminEditComponent } from './Layout/pages/Admin/admin-edit/admin-edit.component';
import { BasicAdminEditComponent } from './Layout/pages/BasicAdmin/basic-admin-edit/basic-admin-edit.component';
import { FirstLoginComponent } from './first-login/first-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    MemberComponent,
    MemberAddComponent,
    EditmemberComponent,
    AdminListComponent,
    EmployeeComponent,
    ProfileComponent,
    AllbookComponent,
    BookavilabltyComponent,
    EditbookComponent,
    BookdetailsComponent,
    OperationComponent,
    Error400Component,
    Error404Component,
    Error403Component,
    Error500Component,
    Error503Component,
    DashboardappComponent,
    WebappComponent,
    LoginappComponent,
    AdminAddComponent,
    AdminDetailsComponent,
    BADetailsComponent,
    BasicAdminAddComponent,
    BasicAdminListComponent,
    AdminEditComponent,
    BasicAdminEditComponent,
    BookAddComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    BookOperationBorrowComponent,
    BookOperationReadComponent,
    FilteredBooksComponent,   
     MemberProfileComponent, FirstLoginComponent,
    
  ],
  
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }