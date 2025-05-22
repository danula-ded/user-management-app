import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService, User } from '@app/services/user.service';

import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzTableComponent,
    NzButtonModule,
    NzSpinModule,
    NzSelectModule,
    NzIconModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;

  search = '';
  page = 1;
  pageSize = 5;
  pageSizeOptions = [1, 2, 5, 10];
  hasNextPage = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.userService
      .getUsersPaginated(this.page, this.pageSize)
      .subscribe((result) => {
        this.users = result.users;
        this.hasNextPage = result.users.length === this.pageSize;
        this.loading = false;
      });
  }

  nextPage(): void {
    if (this.hasNextPage) {
      this.page++;
      this.loadData();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadData();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.page = 1;
    this.loadData();
  }

  get filteredUsers(): User[] {
    const value = this.search.toLowerCase();
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
    );
  }
}
