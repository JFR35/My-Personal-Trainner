# README - Aplicación de Gestión de Entrenamientos

## Descripción
Esta aplicación permite gestionar entrenamientos de usuarios, facilitando funciones como iniciar sesión, añadir entrenamientos y ver resúmenes. Está construida con **HTML, CSS y JavaScript puro** y sigue la arquitectura **MVC (Modelo-Vista-Controlador)** para un código modular y fácil de mantener y escalable intentando estar lo más desacoplado posible.

## Estructura de Carpetas
- **models**: Clases que representan las entidades de la base de datos.
- **controllers**: Contiene la lógica de la aplicación y maneja las solicitudes de las vistas.
- **views**: Archivos HTML y CSS que conforman la interfaz de usuario.
- **services**: Gestión de interacciones con `localStorage` para almacenar y recuperar datos.
- **utils**: Funciones auxiliares como validaciones.

## Tecnologías Usadas
- **HTML**: Estructura de la página web.
- **CSS**: Estilización de la interfaz de usuario.
- **JavaScript**: Lógica y control de la aplicación.
- **localStorage**: Persistencia de datos en el navegador.

## Uso de la Aplicación
1. **Registro de usuarios**: Añade nuevos usuarios a través de la vista de registro.
2. **Inicio de sesión**: Autentica a los usuarios con la vista de login.
3. **Gestión de entrenamientos**: Agrega, visualiza y gestiona entrenamientos desde el dashboard.
4. **Persistencia**: Los datos se almacenan en `localStorage` y se mantienen entre sesiones.


