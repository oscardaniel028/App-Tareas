import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly storageKey = 'tareas';

  obtenerTareas(): Tarea[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  guardarTareas(tareas: Tarea[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tareas));
  }
}
