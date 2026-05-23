# contacts-app

Frontend de libreta de contactos desarrollado en **Angular 17** con componentes standalone. Se conecta a la API REST [ContactsApi](https://github.com/TU_USUARIO/contacts-api) usando autenticación por API Key.

## Tecnologías

- Angular 17 (standalone components)
- TypeScript
- RxJS
- Angular HttpClient

## Requisitos previos

- [Node.js 18+](https://nodejs.org)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

## Estructura del proyecto

```
contacts-app/
└── src/
    ├── app/
    │   ├── contacts/
    │   │   ├── contacts.component.ts      # Lógica del componente
    │   │   ├── contacts.component.html    # Vista de la tabla
    │   │   └── contacts.component.css     # Estilos
    │   ├── models/
    │   │   └── contact.model.ts           # Interface Contact
    │   ├── services/
    │   │   └── contacts.service.ts        # Llamadas a la API
    │   ├── app.component.ts
    │   └── app.config.ts
    └── environments/
        └── environment.ts                 # URL y API Key
```

## Configuración

Antes de correr el proyecto, verificá que `src/environments/environment.ts` apunte al puerto correcto de la API:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:<PUERTO_DE_LA_API>/api',
  apiKey: 'mi-clave-secreta-12345'
};
```

> El puerto lo podés ver en la consola cuando corrés `dotnet run` en la API:
> `Now listening on: http://localhost:XXXXX`

La `apiKey` debe coincidir exactamente con la configurada en `appsettings.json` de la API.

## Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
ng serve
```

Abrí el navegador en `http://localhost:4200`.

> **Importante:** la API debe estar corriendo antes de abrir la app.

## Cómo funciona la autenticación

El servicio `ContactsService` agrega automáticamente el header `X-Api-Key` en cada request HTTP hacia la API:

```typescript
const headers = new HttpHeaders({
  'X-Api-Key': environment.apiKey
});
return this.http.get<Contact[]>(this.apiUrl, { headers });
```

## Proyecto relacionado

Backend API: [contacts-api](https://github.com/TU_USUARIO/contacts-api)
