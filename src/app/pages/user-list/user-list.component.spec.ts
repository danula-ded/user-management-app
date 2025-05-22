import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { UserService } from '@app/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';

// Заглушка компонентов для маршрутов
@Component({ template: '' })
class DummyComponent {}

const routes: Routes = [
  { path: 'users/:id', component: DummyComponent },
  { path: 'edit/:id', component: DummyComponent },
  { path: 'create', component: DummyComponent },
];

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        UserListComponent,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsersPaginated: () =>
              of({
                users: [
                  {
                    id: 1,
                    name: 'Test',
                    email: 't@mail.com',
                    username: '',
                    phone: '',
                    website: '',
                  },
                ],
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(component.users.length).toBeGreaterThan(0);
    expect(component.loading).toBeFalse();
  });

  it('should filter users by name', () => {
    component.search = 'Test';
    expect(component.filteredUsers.length).toBe(1);
  });
});
