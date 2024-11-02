import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItem = signal<MenuItem[]>([
    { title: ' Contador ', route: 'counter' },
    { title: ' Mutaciones ', route: 'properties' },
    { title: ' Usuario ', route: 'user' },
  ]);
  /* public menuItem: MenuItem[] = [
    { title: ' Contador ', route: 'counter' },
    { title: ' Mutaciones ', route: 'properties' },
    { title: ' Usuario ', route: 'user' },
  ]; */
}
