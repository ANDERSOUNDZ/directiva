import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/userRequest.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });
  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );
  onFieldUpdated(field: keyof User, value: string) {
    /* this.user.set({
      ...this.user(),
      [field]: value
    }); */
    this.user.update((current) => {
      switch (field) {
        case 'id':
          current.id = Number(value);
          break;
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
      }
      return current;
    });
  }
}
