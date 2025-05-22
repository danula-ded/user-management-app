import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
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

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        UserFormComponent,
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
            createUser: () => of({}),
            updateUser: () => of({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form with valid fields', () => {
    expect(component.form).toBeTruthy();
    component.form.setValue({
      name: 'A',
      email: 'a@mail.com',
      username: 'a',
      phone: '',
      website: '',
    });
    expect(component.form.valid).toBeTrue();
  });
});
