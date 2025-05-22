import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
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

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        UserDetailsComponent,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUser: () =>
              of({
                id: 1,
                name: 'User',
                email: 'test@mail.com',
                username: '',
                phone: '',
                website: '',
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load user', () => {
    expect(component.user?.name).toBe('User');
    expect(component.loading).toBeFalse();
  });
});
