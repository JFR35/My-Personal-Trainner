# README - Aplicación de Gestión de Entrenamientos My Personal Trainner

## Descripción
Esta aplicación permite gestionar entrenamientos de usuarios, facilitando funciones como iniciar sesión, añadir entrenamientos y ver resúmenes. Está construida con **HTML, CSS y JavaScript puro** y sigue la arquitectura **MVC (Modelo-Vista-Controlador)** para un código modular y fácil de mantener y escalable intentando estar lo más desacoplado posible, por ello se ha intentado refactorizar lo máximo posible en mis conocimientos para intentar aplicar el principio de responsabilidad única donde cada función realiza una acción determinada y solo esa.

## Estructura de Carpetas
- **models**: Clases que representan las entidades del localStorage (mejor aún si fuese una BBDD).
- **controllers**: Contiene la lógica de la aplicación y maneja las solicitudes de las vistas, lo entiendo como una especie de endpoints.
- **views**: Archivos HTML y CSS que conforman la interfaz de usuario.
- **services**: Gestión de interacciones con localStorage para almacenar y recuperar datos y también el DOM.
- **utils**: Funciones auxiliares como validaciones.
- **App**: Para el manejo de las acciones en dashboard como añadir entrenamiento, ver entrenamientos y calcular el mejor entrenamiento.

## Tecnologías Usadas
- **HTML**: Estructura de la página web.
- **CSS**: Estilización de la interfaz de usuario.
- **JavaScript**: Lógica y control de la aplicación.
- **localStorage**: Persistencia de datos en el navegador.
- **Git**: Para el control de versiones.

## Uso de la Aplicación
1. **Registro de usuarios**: Añade nuevos usuarios a través de la vista de registro.
2. **Inicio de sesión**: Autentica a los usuarios con la vista de login.
3. **Gestión de entrenamientos**: Agrega, visualiza y gestiona entrenamientos desde el dashboard.
4. **Persistencia**: Los datos se almacenan en localStorage y se mantienen entre sesiones.


## Futuras mejoras
1. **Manejo de errores**: Añadir página 404 y modales de error en los divs.
2. **Persistencia**: Fetch API para cargar datos desde una BB.DD.
3. **Test**: Pruebas unitarias, de integracón y E2E.
