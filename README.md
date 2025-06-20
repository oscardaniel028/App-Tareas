# 📝 App de Tareas en Angular

Aplicación web desarrollada en **Angular** para gestión de tareas, con diseño moderno y persistencia de datos en el navegador. Implementa buenas prácticas como componentes standalone, servicios dedicados e interfaces tipadas.

## 🚀 Características principales

- ➕ Crear nuevas tareas con validación
- ✅ Toggle para marcar/desmarcar completadas
- 🗑️ Eliminar tareas
- 🔄 Persistencia automática en `localStorage`
- ✨ Animaciones CSS para transiciones


## 🛠 Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) | Framework principal |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | Lenguaje base |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) | Estilos y layout |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) | Íconos visuales |

## ⚙️ Requisitos previos

- Node.js v16+
- npm v8+ o yarn
- Angular CLI

## 🛠 Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/oscardaniel028/App-Tareas

# 2. Entrar al directorio
cd App-Tareas

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
ng serve

# 5. Abrir en navegador
http://localhost:4200/

📁 Estructura del proyecto

src/
└── app/
    ├── components/
    │   └── tareas/
    │       ├── tareas.component.ts
    │       ├── tareas.component.html
    │       ├── tareas.component.css
    ├── interfaces/
    │   └── tarea.interface.ts
    ├── servicios/
    │   └── tareas.service.ts

📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente.


