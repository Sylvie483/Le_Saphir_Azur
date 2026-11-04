# Le Saphir Azur

*"Le paradis du luxe, entouré de merveilleux paysages…"*

Le Saphir Azur es la web de un hotel de lujo inventado, hecha con Angular. Es mi primer proyecto con este framework, y todo el contenido de la web está en inglés.

## Por qué elegí este tema

Cuando estudié Angular me pareció una asignatura didáctica, sencilla y especial, y decidí hacer un proyecto con ella. Ya tenía formación y experiencia con JavaScript, así que me pareció interesante darle una oportunidad a este framework.

Elegí un hotel de lujo, y en inglés, porque hablo tres idiomas y quería un proyecto ambicioso, lleno de matices. Quería que quien entrara en este hotel sintiera el trato, lo especial, la profesionalidad.

Por eso decidí no sumar el total de la estancia ni poner precio a los extras: quería algo fuera de lo habitual, donde cada reserva se siente personalizada. Y, personalmente, creo que Angular es el futuro para crear webs con sofisticación y destacar.

## Qué te vas a encontrar

La web tiene cuatro páginas y un menú para moverte entre ellas:

- **Home:** una portada con la foto de la piscina a pantalla completa, el lema del hotel y un texto de bienvenida sobre la Baia di San Gemiliano.
- **Accommodations:** una barra para elegir las fechas de la estancia, las tarjetas de las habitaciones (suites, premium, superior y standard) con la foto de la habitación y la del baño y el precio por noche, y los servicios incluidos. Al final, el formulario **Concierge Request**, donde el huésped deja sus datos, sus fechas, la habitación que prefiere, los extras y sus deseos.
- **Services:** gastronomía y cócteles en un carrusel de fotos, y el bar, el spa y el hotel en mosaicos.
- **Contact:** los datos del hotel y un botón para llegar con Google Maps.

## Cómo está hecho

- **Angular** con componentes separados para el header, el footer y cada página, y rutas para navegar entre ellas.
- **Tarjeta de habitación reutilizable:** un componente `room` que recibe los datos de cada habitación, con una interfaz `RoomInfo` y un bucle `@for`. Para añadir una habitación solo hay que añadir un objeto a la lista.
- **Formulario con `FormsModule`:** recoge los datos del huésped. Como es un proyecto de portfolio, de momento muestra un mensaje de agradecimiento y no envía los datos a ningún sitio. No hay pagos ni tarjetas: lo previsto es que todo se gestione al llegar o por transferencia, con un email personalizado.
- **Carrusel de fotos** hecho solo con CSS (`scroll-snap`) y dos botones.
- **CSS propio**, con una estética sobria en beige, dorado y azul zafiro. El logotipo también lo hice yo.

## Para probarlo en local

Necesitas [Node.js](https://nodejs.org/) y Angular CLI. Desde la carpeta del proyecto:

```bash
npm install
ng serve
```

Abre `http://localhost:4200/` en el navegador.

## Un apunte

El hotel, sus datos y los precios son inventados. Lo hice como práctica y no corresponde a ningún negocio real.

## Gracias

A Adrián, mi profesor de Angular, por una asignatura tan didáctica que me dieron ganas de ir más allá de la clase.

Sylvie
