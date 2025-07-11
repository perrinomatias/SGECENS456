# SGECENS456
Sistema de Gestión Institucional del CENS 456 Ezeiza

## 📋 Descripción

Este repositorio contiene el sistema web completo del CENS 456 Ezeiza, que incluye:

1. **Sitio Web Institucional** - Landing page informativa del centro educativo
2. **Sistema de Login** - Portal de autenticación para personal autorizado
3. **Sistema de Registro** - Registro completo de nuevos usuarios
4. **Dashboard de Gestión** - Panel de control completamente funcional con gestión de datos
5. **Google Apps Script** - Integración con herramientas externas

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
- **🆕 COMPLETAMENTE FUNCIONAL** - Panel de control completo
- **Gestión de Estudiantes** - CRUD completo con búsqueda y filtros
- **Gestión de Docentes** - Administración de profesores
- **Sistema de Reportes** - Gráficos dinámicos con Canvas
- **Configuración de Perfil** - Edición de datos y cambio de contraseña
- Acceso directo a 3 Google Apps Script
- Navegación intuitiva y responsive
- Datos persistentes en localStorage

## 🔐 Sistema de Autenticación

### 👤 Sistema de Registro
- **🆕 Registro dinámico** - Los usuarios pueden registrarse desde `register.html`
- **Validación robusta** - Verificación de email, usuario único y contraseña segura
- **Medidor de seguridad** - Indicador visual de fuerza de contraseña
- **Roles disponibles** - Profesor, Preceptor, DICYT, Administrador
- **Integración completa** - Los usuarios registrados pueden acceder inmediatamente

### Usuarios Predefinidos

| Usuario     | Contraseña     | Rol           | Permisos de Acceso                     |
|-------------|----------------|---------------|----------------------------------------|
| `admin`     | `admin123`     | Administrador | ✅ Gestión + ✅ Notas + ✅ Alertas     |
| `preceptor` | `preceptor123` | Preceptor     | ✅ Gestión + ❌ Notas + ✅ Alertas     |
| `dicyt`     | `dicyt123`     | DICYT         | ✅ Gestión + ❌ Notas + ✅ Alertas     |
| `profesor`  | `profesor123`  | Profesor      | ❌ Gestión + ✅ Notas + ❌ Alertas     |

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
- **Acceso:** Completo a todos los sistemas
- **Funciones:** Gestión institucional, carga de notas, alertas
- **Uso:** Supervisión general del sistema

#### 👮 **Preceptor**
- **Acceso:** Sistema principal + Alertas
- **Funciones:** Gestión de estudiantes, control de alertas
- **Uso:** Seguimiento académico y disciplinario

#### 🏛️ **DICYT**
- **Acceso:** Sistema principal + Alertas  
- **Funciones:** Control institucional, gestión de alertas
- **Uso:** Supervisión técnica y administrativa

#### 👨‍🏫 **Profesor**
- **Acceso:** Solo carga de notas
- **Funciones:** Registro de calificaciones
- **Uso:** Evaluación de estudiantes

## � Dashboard Completamente Funcional

### 🎯 Funcionalidades Implementadas

#### 👥 **Gestión de Estudiantes**
- ✅ **CRUD Completo** - Crear, leer, actualizar y eliminar estudiantes
- ✅ **Búsqueda en tiempo real** - Filtro por nombre instantáneo
- ✅ **Filtros avanzados** - Por modalidad (presencial, semipresencial, acelerado) y curso
- ✅ **Tarjetas informativas** - Visualización clara de datos del estudiante
- ✅ **Datos persistentes** - Almacenamiento local automático

#### 👨‍🏫 **Gestión de Docentes**
- ✅ **CRUD Completo** - Administración completa de profesores
- ✅ **Especialidades** - Registro de materias y especialidades
- ✅ **Modalidades** - Asignación a diferentes modalidades de enseñanza
- ✅ **Datos de contacto** - Email y teléfono para comunicación

#### 📈 **Sistema de Reportes**
- ✅ **Gráficos dinámicos** - Visualización usando Canvas nativo
- ✅ **Rendimiento académico** - Estadísticas por año y modalidad
- ✅ **Distribución por modalidad** - Gráfico de torta con porcentajes
- ✅ **Actualización automática** - Los gráficos se regeneran con nuevos datos

#### ⚙️ **Configuración de Perfil**
- ✅ **Edición de datos** - Actualización de nombre y email
- ✅ **Cambio de contraseña** - Sistema seguro con validación
- ✅ **Validación robusta** - Verificación de contraseña actual
- ✅ **Persistencia** - Los cambios se guardan automáticamente

### 💾 **Sistema de Datos**
- **localStorage** - Almacenamiento local para máxima compatibilidad
- **Datos de ejemplo** - Se cargan automáticamente si no existen datos
- **Sincronización** - Las estadísticas se actualizan en tiempo real
- **Respaldo automático** - Los datos persisten entre sesiones

## �🔗 Google Apps Script Integrados

El sistema permite acceso directo a tres aplicaciones de Google Apps Script:

1. **Sistema Principal**
   - URL: `https://script.google.com/.../exec`
   - Funcionalidad: Gestión principal del centro

2. **Carga de Notas**
   - URL: `https://script.google.com/.../exec?page=carga`
   - Funcionalidad: Sistema de registro de calificaciones

3. **Sistema de Alertas**
   - URL: `https://script.google.com/.../exec?page=alertas`
   - Funcionalidad: Gestión de notificaciones

## � Integración WhatsApp

El sistema incluye integración completa con WhatsApp para facilitar el contacto:

- **📍 Sección de Contacto**: Botón dedicado en información de contacto
- **📝 Alternativa al Formulario**: Opción rápida después del formulario de contacto  
- **🔗 Redes Sociales**: Enlace directo en el footer
- **📱 Mobile Optimized**: Diseñado especialmente para dispositivos móviles
- **🎨 Animaciones**: Efectos visuales atractivos con bounce animation

**Enlace WhatsApp**: `https://wa.me/ais/1151919419567870?s=5`  
**Mensaje**: "Chatea con CENS 456 - Termina tu secundaria"

## �📁 Estructura del Proyecto

```
SGECENS456/
├── index.html          # Sitio web institucional
├── login.html          # Sistema de autenticación
├── register.html       # 🆕 Sistema de registro de usuarios
├── dashboard.html      # Panel de gestión completo
├── test.html          # Página de testing y documentación
├── styles.css          # Estilos del sitio principal
├── script.js           # JavaScript del sitio principal
└── README.md          # Documentación
```

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/SGECENS456.git
cd SGECENS456
```

### 2. Servir los archivos
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server -p 8000

# Usando PHP
php -S localhost:8000
```

### 3. Acceder al sistema
- **Sitio principal**: `http://localhost:8000/index.html`
- **Sistema de login**: `http://localhost:8000/login.html`
- **Dashboard**: `http://localhost:8000/dashboard.html` (requiere login)

## 🎨 Características Técnicas

### Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con Flexbox/Grid
- **JavaScript ES6+** - Interactividad y lógica
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía (Inter)

### Compatibilidad
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles

### Responsive Design
- 📱 Mobile First
- 💻 Desktop optimizado
- 📱 Tablet friendly
- 🔄 Orientación adaptable

## 🔒 Seguridad

### Consideraciones de Producción
1. **Cambiar contraseñas predeterminadas**
2. **Implementar backend real para autenticación**
3. **Usar HTTPS en producción**
4. **Configurar headers de seguridad**
5. **Implementar rate limiting**

### Variables de Entorno Recomendadas
```env
APP_SECRET_KEY=tu_clave_secreta_aqui
SESSION_TIMEOUT=1800
MAX_LOGIN_ATTEMPTS=3
```

## 📱 Funcionalidades Móviles

- ✅ Diseño responsive
- ✅ Touch-friendly
- ✅ Navegación optimizada
- ✅ Formularios adaptados
- ✅ Carga rápida

## 🚀 Deploy

### GitHub Pages
1. Subir archivos al repositorio
2. Activar GitHub Pages en configuración
3. Seleccionar rama principal

### Netlify
```bash
# Deploy directo
netlify deploy --dir=. --prod
```

### Vercel
```bash
# Deploy con Vercel CLI
vercel --prod
```

## 📊 Estadísticas del Sistema

### 📈 Datos Dinámicos
- 👥 **Estudiantes** - Cantidad actualizada en tiempo real según registros
- 👨‍🏫 **Docentes** - Número dinámico basado en profesores registrados  
- 📚 **12 Cursos** - Estructura de 3 años en 4 modalidades
- 🎓 **500+ Egresados** - Histórico de graduados exitosos

### 💾 Almacenamiento
- **localStorage** - Todos los datos se guardan localmente
- **Persistencia** - La información se mantiene entre sesiones
- **Sincronización** - Las estadísticas se actualizan automáticamente
- **Respaldo** - Sistema de datos de ejemplo para inicialización

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📞 Contacto

**CENS 456 Ezeiza**
- 📍 Dirección: Av. Principal 1234, Ezeiza, Buenos Aires
- 📞 Teléfono: (011) 4480-XXXX
- 📧 Email: info@cens456ezeiza.edu.ar
- 🌐 Web: [www.cens456ezeiza.edu.ar](http://www.cens456ezeiza.edu.ar)

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**© 2024 CENS 456 Ezeiza - Sistema de Gestión Institucional**
