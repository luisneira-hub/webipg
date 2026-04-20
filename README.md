# webipg
# 📝 Lista de Tareas en React

## 📌 Descripción

Esta aplicación es una lista de tareas desarrollada con React que permite al usuario gestionar actividades de forma simple e interactiva. Cada tarea puede incluir un tiempo estimado en horas y minutos, permitiendo además calcular automáticamente el tiempo total pendiente.

La aplicación incorpora funcionalidades dinámicas como marcar tareas como completadas, eliminarlas y cambiar el tema visual entre modo claro y oscuro. Además, utiliza almacenamiento local del navegador (localStorage), lo que permite mantener la información incluso después de recargar la página.

---

## 🚀 Tecnologías utilizadas

* React (con Vite)
* JavaScript
* HTML5
* CSS3

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Acceder a la carpeta del proyecto:

```bash
cd nombre-del-proyecto
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

---

## 🎯 Funcionalidades principales

* Agregar tareas con nombre y tiempo estimado (horas y minutos)
* Validación de datos (solo números enteros positivos en tiempo)
* Visualización de tareas en lista
* Marcar tareas como completadas (cambio visual a color verde)
* Eliminar tareas
* Cálculo automático del tiempo total pendiente
* Cambio de tema claro/oscuro
* Persistencia de datos mediante localStorage

---

## 🧩 Estructura del proyecto

* **App.jsx**: Maneja el estado principal, lógica de la aplicación y control del tema.
* **TaskList.jsx**: Componente encargado de mostrar la lista de tareas e interacción con cada elemento.
* **index.css**: Define los estilos globales y el diseño visual de la aplicación.

---

## 🔄 Flujo de la aplicación

1. El usuario ingresa una tarea y su tiempo estimado.
2. La tarea se almacena en el estado global.
3. Se renderiza en la lista mediante un componente separado.
4. El usuario puede marcarla como completada o eliminarla.
5. El tiempo total pendiente se actualiza automáticamente.
6. Los datos se guardan en localStorage para persistencia.

---

## 📊 Decisiones de diseño

* Se utilizó React con hooks (`useState` y `useEffect`) para mantener la aplicación simple y escalable.
* Se separó la lógica en componentes para mejorar la organización del código.
* Se implementó almacenamiento local para mejorar la experiencia del usuario.
* El diseño es simple, priorizando la funcionalidad y claridad visual.

---

## 📎 Notas finales

Este proyecto tiene como objetivo aplicar los conceptos fundamentales de React, incluyendo componentes, manejo de estado e interactividad, manteniendo una estructura clara y funcional.

