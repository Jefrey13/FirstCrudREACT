# Detalles de la Aplicación CRUD Temporal en React

## Descripción
Esta aplicación CRUD (Create, Read, Update, Delete) en React es una herramienta simple para gestionar datos de ejemplo. Permite al usuario agregar, ver, editar y eliminar elementos de una lista de datos ficticia. La aplicación consta de tres componentes principales: `CrudForm`, `CrudTable`, y `CrudApp`.

## Componentes

### 1. CrudForm
El componente `CrudForm` se encarga de mostrar un formulario para agregar nuevos elementos o editar los existentes. Utiliza el estado local para gestionar los datos del formulario y se comunica con el componente principal (`CrudApp`) a través de las funciones de creación y actualización.

### 2. CrudTable
El componente `CrudTable` muestra los datos en una tabla y proporciona botones para editar o eliminar cada fila. Recibe los datos como una lista y utiliza un bucle para generar las filas de la tabla. Se comunica con el componente principal (`CrudApp`) para manejar las acciones de edición y eliminación.

### 3. CrudApp
El componente `CrudApp` es el componente principal de la aplicación. Gestiona el estado de los datos y las funciones para crear, actualizar y eliminar elementos. También se encarga de pasar las funciones y datos necesarios a los componentes `CrudForm` y `CrudTable`.

## Funcionalidades

- **Agregar Datos:** Permite al usuario agregar nuevos elementos a la lista proporcionando un nombre y una constelación.
- **Editar Datos:** Permite al usuario editar los elementos existentes haciendo clic en el botón "Editar" en la tabla.
- **Eliminar Datos:** Permite al usuario eliminar elementos haciendo clic en el botón "Eliminar" en la tabla.
- **Validación de Datos:** Verifica que los campos de nombre y constelación no estén vacíos antes de agregar o editar un elemento.

## Tecnologías Utilizadas
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- JSX: Extensión de sintaxis de JavaScript utilizada en React para escribir componentes.
- useState: Hook de React utilizado para gestionar el estado local en los componentes de función.
- useEffect: Hook de React utilizado para realizar efectos secundarios en componentes funcionales.
- Props: Mecanismo utilizado en React para pasar datos de un componente a otros