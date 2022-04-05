import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  avatars = [
    {
      img: 'https://img.freepik.com/foto-gratis/cabeza-hipster-espacio-vacio-ilustracion-render-3d_1172-983.jpg?w=826',
      id: 1,
    },
    {
      img: 'https://img.freepik.com/foto-gratis/avatar-masculino-representacion-3d-cabello-rubio-sueter-verde-anteojos_477250-11.jpg?w=826',
      id: 2,
    },

    {
      img: 'https://img.freepik.com/foto-gratis/3d-rendering-personaje-masculino-franela-azul-fondo-blanco_477250-12.jpg?w=826',
      id: 3,
    },

    {
      img: 'https://img.freepik.com/foto-gratis/3d-render-avatar-masculino-sueter-azul-bueno-foto-perfil_477250-13.jpg?w=826',
      id: 4,
    },
    {
      img: 'https://img.freepik.com/foto-gratis/cabeza-hipster-espacio-vacio-ilustracion-render-3d_1172-983.jpg?w=826',
      id: 5,
    },
    {
      img: 'https://img.freepik.com/foto-gratis/avatar-masculino-representacion-3d-cabello-rubio-sueter-verde-anteojos_477250-11.jpg?w=826',
      id: 6,
    },

    {
      img: 'https://img.freepik.com/foto-gratis/3d-rendering-personaje-masculino-franela-azul-fondo-blanco_477250-12.jpg?w=826',
      id: 7,
    },

    {
      img: 'https://img.freepik.com/foto-gratis/3d-render-avatar-masculino-sueter-azul-bueno-foto-perfil_477250-13.jpg?w=826',
      id: 8,
    },
  ];
  dragIndex: any;
  dropIndex: any;
  temporal: any;

  drag(i) {
    this.dragIndex = i;
    this.temporal = JSON.parse(JSON.stringify(this.avatars[i]));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    this.dropIndex = Number(ev.target.id);
    this.avatars[this.dragIndex] = JSON.parse(
      JSON.stringify(this.avatars[this.dropIndex])
    );
    this.avatars[this.dropIndex] = this.temporal;
  }
}
