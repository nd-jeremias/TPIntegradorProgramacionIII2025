# 🛍️ Sistema de Gestión de Productos y Ventas

## 📘 Descripción del proyecto
Aplicación web que permite gestionar productos, ventas y autenticación de administradores mediante **Express**, **MySQL** y **EJS**.  
El sistema está dividido entre una parte **pública** (clientes) y una **protegida** (administradores).  
Los administradores pueden autenticarse, crear y modificar productos, y registrar ventas.  
Los clientes pueden visualizar productos y simular compras.

---

## ⚙️ Instalación y ejecución

### 🔧 Requisitos previos
- Node.js v18+
- MySQL instalado y configurado
- Archivo `.env` con las siguientes variables:
```
PORT=puerto
DB_NAME=base_de_datos
DB_USER=usuario_bbdd
DB_PASS=contraseña_bbdd
DB_HOST=localhost_bbdd
JWT_SECRET=tu_clave_secreta
```

### 📦 Instalación
```bash
npm install
````

### ▶️ Ejecución

```bash
npm start
```

### 📚 Librerías principales

| Librería          | Uso                                                  |
| ----------------- | ---------------------------------------------------- |
| **express**       | Framework principal del servidor                     |
| **sequelize**     | ORM para manejar MySQL                               |
| **mysql2**        | Driver de base de datos                              |
| **dotenv**        | Carga de variables de entorno                        |
| **cookie-parser** | Manejo de cookies HTTP                               |
| **jsonwebtoken**  | Generación y validación de tokens JWT                |
| **ejs**           | Motor de plantillas para renderizar vistas dinámicas |
| **path**          | Gestión de rutas de archivos                         |
| **nodemon** (dev) | Reinicio automático del servidor en desarrollo       |

## 🔐 Autenticación (JWT + Cookies)

El sistema utiliza **JSON Web Tokens (JWT)** almacenados en una **cookie httpOnly** llamada `token`.

* **Duración del token:** 5 minutos
* **Renovación automática:** Si quedan menos de 60 segundos para expirar, se genera un nuevo token automáticamente.
* **Ubicación:** `req.cookies.token`
* **Formato del JWT:**

  ```json
  {
    "email": "admin@correo.com",
    "nombre": "Administrador",
    "exp": 1710000000
  }
  ```

Cuando el token expira o no existe, el servidor responde con:

```json
{ "message": "Token no encontrado o inválido" }
```

### 🌐 Rutas públicas (Front)

Manejadas desde `public/` (HTML, CSS, JS) y EJS para vistas dinámicas.

```
/
├── '/' → Página principal (inicio)
├── '/ingresar' → Página de login (vista EJS)
├── '/registrarse' → Página de registro de administradores (vista EJS)
└── '/carrito' → Página del carrito de compras (pendiente de implementación)
```

## 🧩 Estructura de rutas (Backend)

### 🧠 Autenticación (`/auth`)

| Método   | Ruta                | Descripción                                         | Espera                                    | Devuelve                                |
| -------- | ------------------- | --------------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| **POST** | `/auth/registrarse` | Registra un nuevo administrador en la base de datos | `{ email, nombre, apellido, contraseña }` | `{ message, usuario }`                  |
| **POST** | `/auth/ingresar`    | Inicia sesión de administrador                      | `{ email, contraseña }`                   | Cookie `token` + `{ message, usuario }` |
| **POST** | `/auth/salir`       | Cierra sesión y elimina la cookie                   | *(vacío)*                                 | `{ message: "Sesión cerrada" }`         |

### 📦 Productos (`/api/productos`)

| Método  | Ruta                 | Descripción                              | Espera    | Devuelve                                                |
| ------- | -------------------- | ---------------------------------------- | --------- | ------------------------------------------------------- |
| **GET** | `/api/productos/`    | Lista todos los productos disponibles    | *(vacío)* | `[ { id, titulo, precio, stock, estado } ]`             |
| **GET** | `/api/productos/:id` | Obtiene un producto específico por su ID | *(vacío)* | `{ id, titulo, precio, stock, estado, [detalles] }`     |

> Estas rutas son **públicas**, no requieren autenticación.

### 💰 Ventas (`/api/ventas`)

| Método   | Ruta              | Descripción                           | Espera                                                                        | Devuelve                                        |
| -------- | ----------------- | ------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| **GET**  | `/api/ventas/`    | Devuelve todas las ventas registradas | *(vacío)*                                                                     | `[ { id, cliente, total, fecha } ]`             |
| **GET**  | `/api/ventas/:id` | Devuelve una venta específica         | *(vacío)*                                                                     | `{ id, cliente, total, fecha, detalle: [...] }` |
| **POST** | `/api/ventas/`    | Registra una nueva venta              | `{ cliente, total, detalle: [ { id_producto, cantidad, precio_unitario } ] }` | `{ message, venta }`                            |

### 🧑‍💼 Administración (`/admin`)

> Estas rutas están protegidas por el middleware `verificarToken`.
> Si el token no existe o es inválido, responde con error 401.

| Método   | Ruta                | Descripción                                                | Espera                                                              | Devuelve                |
| -------- | ------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------- |
| **GET**  | `/admin/dashboard`  | Renderiza la vista principal del panel administrador (EJS) | *(cookie token)*                                                    | Página HTML renderizada |
| **PUT**  | `/admin/:id`        | Deshabilita un producto (soft delete)                      | `{ id }`                                                            | `{ mensaje, producto }` |
| **PUT**  | `/admin/update/:id` | Actualiza un producto existente                            | `{ titulo, precio, imagen, stock, id_categoria, estado, detalles }` | `{ mensaje, producto }` |
| **POST** | `/admin/create`     | Crea un nuevo producto                                     | `{ titulo, precio, imagen, stock, id_categoria, estado, detalles }` | `{ mensaje, producto }` |

## 🧱 Estructura de carpetas

```
project-root/
│
├── public/                  # Archivos estáticos (HTML, CSS, JS, imágenes)
├── src/
│   ├── controllers/         # Controladores de negocio
│   ├── database/
│   │   ├── index.js         # Conexión Sequelize
│   │   └── initData.js      # Datos iniciales (seed)
│   ├── models/              # Modelos de datos (Producto, Venta, Usuario)
│   ├── routes/              # Administración de rutas
│   │   ├── productRoute.js
│   │   ├── salesRoute.js
│   │   ├── adminRoutes.js
│   │   └── auth.js
│   └── views/               # Vistas a renderizar
│       ├── pages/
│       │   └── admin.ejs    # Vista de administración
│       └── partials/        # Encabezados, footers, componentes EJS
├── .env                     # Variables locales
├── app.js                   # Servidor principal Express
└── package.json
```

## 🚀 Próximas mejoras

* Implementar vista `/carrito` funcional con almacenamiento local.
* Agregar validaciones en el registro y login.
* Panel de control con métricas de ventas.
* Integración con API de pagos.

**Autor:** *Nicolás Jeremías*
📅 *Proyecto en desarrollo — 2025*