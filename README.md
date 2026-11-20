<p align="center">
  <img src="docs/images/banner.png" alt="Coexistence" width="100%">
</p>

### Que nadie llegue tarde a la función.

Coexistence es una app móvil para organizar la función diaria de series entre amigos o familia: a qué hora empieza, quién ya llegó, qué se está viendo y quién acumuló una falta por quedarse dormido en casa.

Nacido de como compartimos ver peliculas, series o ir al cine, siendo una opción genial para ponerse de acuerdo en ver algo juntos, a la hora acordada, en lugar del típico grupo de WhatsApp.
Es un proyecto personal pero puede servir a las personas tecnológicas como yo en su camino de entretenimiento cada día.

> **Estado: alfa.** Ya se usa a diario en un grupo real, pero sigue cambiando. Si algo falla, avísame en la sección [Reportar un error](#-reportar-un-error).

<p align="center">
  <img src="docs/images/app-preview.png" alt="Publicidad" width="100%">
</p>

## ◆ Cómo funciona

1. Creas una **sala privada** e invitas a tu grupo con un código de 6 caracteres.
2. A la hora acordada se **abre la sesión del día** y todos reciben una notificación.
3. Alguien que ya esté en el lugar **inicia la sesión** y obtiene un PIN.
4. Los demás **registran su llegada** escribiendo ese PIN en su propio teléfono.
5. A los 36 minutos (en el futuro sera modificable) la sesión **se cierra sola** y las faltas se generan automáticamente.

## ◆ Qué funciona hoy

### Salas

- Crear una sala (de 2 a 10 miembros) y quedar como administrador.
- Unirse con un código único de 6 caracteres.
- Salir de la sala, con traspaso automático del rol de administrador.
- Configurar la hora de inicio diaria (por defecto,19:00).
- Inicio de sesión con Google.

### Sesión diaria

- Inicio manual con PIN dinámico, visible solo para quien inicia.
- Llegada **a tiempo** (hasta +10 minutos) o **con retraso** (hasta +35 minutos), que exige escribir un motivo.
- Cancelación por fuerza mayor del administrador, con motivo obligatorio: nadie recibe faltas ese día.
- Sincronización en tiempo real entre todos los dispositivos.

### Faltas

- Se generan solas al cierre de la sesión: nadie puede crearlas a mano.
- Contador acumulado por persona e historial con fecha y motivo.

### Series con TMDB

- Buscador con título, portada y temporadas reales.
- Seguimiento de temporada y episodio actual, con cambio fluido al finalizar cada sesión.
- El administrador elige la serie y todos la ven al instante.

### Automatización y seguridad

- **Cloud Functions** que abren la sesión a la hora de la sala, envían la notificación y hacen el cierre automático.
- **Reglas de Firestore** que validan que seas miembro de la sala antes de leer o escribir cualquier dato.

## ◆ Diseño

La paleta de colores y la estética visual de la aplicación se inspiraron en el **Art Decó**  y las luces de Casino:

<p align="center">
  <img src="docs/images/grangatsby.jpg" alt="Inspiración Art Decó 1" width="40%">
  <img src="docs/images/casino.jpg" alt="Inspiración Art Decó 2" width="50%">
</p>

## ◆ Tecnologías

### Core & Frontend
* ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) **+ Expo** & ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)  — Base de la aplicación móvil y tipado estricto.
* **Zustand** — Gestión de estado global ligera y predecible.
* **Zod** — Validación de esquemas y datos en tiempo de ejecución.
* **Axios** — Cliente HTTP para el consumo de la **TMDB API**.

### Backend, Auth & Servicios en la Nube
* ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) — Autenticación (*Firebase Auth* + *Google Sign-In*), base de datos en tiempo real (*Cloud Firestore*), notificaciones push (*Cloud Messaging*) y lógica serverless (*Cloud Functions*).
* **TMDB API** — Fuente de información y catálogo multimedia.

### Gestión de Paquetes
* ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) — Gestor de paquetes principal en la aplicación.
* ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) — Gestor utilizado en las *Cloud Functions*.

### Arquitectura
La aplicación sigue una **Clean Architecture simplificada con Repository Pattern**: las vistas/pantallas no acceden directamente a *Firestore* ni a APIs externas; todo flujo de datos se centraliza y abstrae a través de repositorios para mantener el desacople y facilitar el mantenimiento.

## ◆ Descarga

Disponible para **Android**:

1. Entra a [Releases](../../releases) y descarga el `.apk` más reciente.
2. Ábrelo en tu teléfono y permite la instalación desde este origen si Android lo pide.
3. Inicia sesión con Google, crea una sala o únete con un código.

Es una versión alfa: los datos podrían reiniciarse entre versiones.

## ◆ Qué viene después

- Películas con propuestas por miembro.
- Ruleta virtual para sortear qué ver.
- Aplazamiento de sesiones por consenso.
- Escala de faltas con recompensas y penalizaciones (Carta de Ventaja, botana, inmunidad).
- Justificantes para anular faltas.
- Salidas al cine con registro de asistencia.
- Versión en inglés y publicación en Google Play.

## ◆ Reportar un error

Si algo falla, abre un [issue](../../issues) con:

- Qué estabas haciendo y qué esperabas que pasara.
- Una captura o grabación, si puedes.
- Tu modelo de teléfono y versión de Android.

Cualquier reporte ayuda, por pequeño que parezca.

## ◆ Atribución

Este producto usa la API de TMDB, sin certificado por TMDB por lo que es sin fines de lucro.

<details>
<summary>Para desarrolladores</summary>

Requisitos: Node.js, pnpm, cuenta de Expo/EAS y un proyecto de Firebase con Google Sign-In.

1. `pnpm install`
2. Coloca tu `google-services.json` en `mobile/` (o define `GOOGLE_SERVICES_JSON`).
3. Configura tu clave de TMDB en las variables de entorno.
4. `pnpm exec eas build --profile development --platform android`
5. `pnpm expo start --dev-client`

Funciones: entra a `backend/functions/` y ejecuta `npm install`.

</details>
