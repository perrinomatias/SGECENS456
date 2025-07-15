# SGECENS456
Sistema de Gestión Institucional del CENS 456 Ezeiza

## 📋 Descripción

Este repositorio contiene el sistema web completo del CENS 456 Ezeiza, que incluye:

1.  **Sitio Web Institucional** - Landing page informativa del centro educativo
2.  **Sistema de Login** - Portal de autenticación para personal autorizado
3.  **Sistema de Registro** - Registro completo de nuevos usuarios
4.  **Dashboard de Gestión** - Panel de control con acceso a sistemas externos
5.  **Google Apps Script** - Integración con herramientas de gestión principal

## 🚀 Características Principales

### Sitio Web Institucional (`index.html`)
- Diseño moderno y responsive
- Información sobre modalidades de estudio
- Proceso de inscripción
- Testimonios de egresados
- Formulario de contacto
- **🆕 Integración WhatsApp** para contacto directo
- Optimizado para SEO

### Sistema de Login (`login.html`)
- Interfaz de autenticación segura
- Múltiples roles de usuario
- Sesión persistente opcional
- Validación en tiempo real
- Auto-logout por inactividad

### Sistema de Registro (`register.html`)
- **🆕 NUEVO** - Registro completo de usuarios
- Validación robusta de datos
- Medidor de fuerza de contraseña
- Verificación de disponibilidad de usuario
- Múltiples roles disponibles
- Integración automática con login

### Dashboard de Gestión (`dashboard.html`)
- **Panel de control centralizado** con enlaces directos a Google Apps Script para gestión.
- **Acceso directo a 3 Google Apps Script**: Sistema Principal, Carga de Notas y Sistema de Alertas.
- **Reportes** - Gráficos dinámicos con Canvas (datos simulados en el dashboard, pero orientados a reportes de GAS).
- **Configuración de Perfil** - Edición de datos y cambio de contraseña.
- Navegación intuitiva y responsive.
- Datos de usuario persistentes en localStorage.

## 🔐 Sistema de Autenticación

### 👤 Sistema de Registro
- **🆕 Registro dinámico** - Los usuarios pueden registrarse desde `register.html`
- **Validación robusta** - Verificación de email, usuario único y contraseña segura
- **Medidor de seguridad** - Indicador visual de fuerza de contraseña
- **Roles disponibles** - Profesor, Preceptor, DICYT, Administrador
- **Integración completa** - Los usuarios registrados pueden acceder inmediatamente

### Usuarios Predefinidos

| Usuario     | Contraseña     | Rol           | Permisos de Acceso                         |
|-------------|----------------|---------------|--------------------------------------------|
| `admin`     | `admin123`     | Administrador | ✅ Apps Script + ✅ Reportes + ✅ Config. |
| `preceptor` | `preceptor123` | Preceptor     | ✅ Apps Script (Principal, Alertas) + ✅ Reportes + ✅ Config. |
| `dicyt`     | `dicyt123`     | DICYT         | ✅ Apps Script (Principal, Alertas) + ✅ Reportes + ✅ Config. |
| `profesor`  | `profesor123`  | Profesor      | ✅ Apps Script (Carga de Notas) + ✅ Config. |

*Nota: Además de estos usuarios predefinidos, cualquier persona puede registrarse usando el formulario de registro.*

### Funcionalidades de Seguridad
- ✅ Validación de credenciales
- ✅ Sesión persistente (24 horas)
- ✅ Auto-logout por inactividad (30 minutos)
- ✅ Protección de rutas
- ✅ Almacenamiento local seguro
- ✅ Control de acceso basado en roles (RBAC)

### Control de Acceso por Roles

#### 🔧 **Administrador**
- **Acceso:** Completo a todas las funcionalidades del Dashboard y acceso a todos los Google Apps Script.
- **Funciones:** Supervisión general del sistema, acceso a carga de notas, alertas, reportes y configuración.

#### 👮 **Preceptor**
- **Acceso:** Dashboard (excluyendo Carga de Notas) y acceso a los Google Apps Script de Sistema Principal y Alertas.
- **Funciones:** Acceso a gestión (vía GAS) y control de alertas.

#### 🏛️ **DICYT**
- **Acceso:** Dashboard (excluyendo Carga de Notas) y acceso a los Google Apps Script de Sistema Principal y Alertas.
- **Funciones:** Acceso a gestión (vía GAS) y control de alertas.

#### 👨‍🏫 **Profesor**
- **Acceso:** Dashboard (solo Dashboard y Configuración) y acceso exclusivo al Google Apps Script de Carga de Notas.
- **Funciones:** Registro de calificaciones y gestión de perfil personal.

## 📊 Estadísticas y Reportes (en Dashboard)

### 📈 Datos mostrados en Dashboard
- 👥 **Estudiantes** - Cantidad indicada como "N/A (vía GAS)" ya que la gestión se realiza en Google Apps Script.
- 👨‍🏫 **Docentes** - Cantidad indicada como "N/A (vía GAS)" ya que la gestión se realiza en Google Apps Script.
- 📚 **12 Cursos** - Estructura de 3 años en 4 modalidades (valor fijo en dashboard).
- **Reportes** - Se visualizan gráficos simulados en el dashboard, pero la fuente de datos real sería provista por Google Apps Script.

### 💾 **Almacenamiento Local (para credenciales y perfil)**
- **localStorage** - Los datos de usuario y sesión se guardan localmente.
- **Persistencia** - La información se mantiene entre sesiones.
- **Respaldo** - Sistema de datos de ejemplo para inicialización de usuarios predefinidos.

## 🔗 Google Apps Script Integrados

El sistema permite acceso directo a tres aplicaciones de Google Apps Script, que son los encargados de la gestión real de datos:

1.  **Sistema Principal**
    - URL: `https://script.google.com/.../exec`
    - Funcionalidad: Gestión principal de estudiantes y docentes.

2.  **Carga de Notas**
    - URL: `https://script.google.com/.../exec?page=carga`
    - Funcionalidad: Sistema de registro de calificaciones.

3.  **Sistema de Alertas**
    - URL: `https://script.google.com/.../exec?page=alertas`
    - Funcionalidad: Gestión de notificaciones institucionales.

## 📱 Integración WhatsApp

El sistema incluye integración completa con WhatsApp para facilitar el contacto:

-   **📍 Sección de Contacto**: Botón dedicado en información de contacto
-   **📝 Alternativa al Formulario**: Opción rápida después del formulario de contacto
-   **🔗 Redes Sociales**: Enlace directo en el footer
-   **📱 Mobile Optimized**: Diseñado especialmente para dispositivos móviles
-   **🎨 Animaciones**: Efectos visuales atractivos con bounce animation

**Enlace WhatsApp**: `https://wa.me/ais/1151919419567870?s=5`
**Mensaje**: "Chatea con CENS 456 - Termina tu secundaria"

## 📁 Estructura del Proyecto
