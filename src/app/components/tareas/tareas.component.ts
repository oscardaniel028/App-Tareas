import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { TareasService } from '../../servicios/tareas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  nombreTarea: string = '';
  listaTarea: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.listaTarea = this.tareasService.obtenerTareas();
  }

  guardarTarea(): void {
    const nombre = this.nombreTarea.trim();
    if (!nombre) return;

    this.listaTarea.push({ nombre, tarea: false });
    this.nombreTarea = '';
    this.actualizarLocalStorage();
  }

  eliminarTarea(index: number): void {
    this.listaTarea.splice(index, 1);
    this.actualizarLocalStorage();
  }

  actualizarTarea(index: number): void {
    this.listaTarea[index].tarea = !this.listaTarea[index].tarea;
    this.actualizarLocalStorage();
  }

  actualizarLocalStorage(): void {
    this.tareasService.guardarTareas(this.listaTarea);
  }
}
