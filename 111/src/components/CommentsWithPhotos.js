import React from 'react';

// Generate a random time for today or yesterday
const generateRandomTime = (date) => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  date.setHours(hours, minutes);
  return date.toISOString();
};

// Generate dates for comments
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

// Comments array with random dates
const comments = [
  {
    name: 'Manuel Macia',
    comment: 'Vi el número sobre el chico. Entonces lo pedí con descuento a través de este sorteo. Llevo tomándolo cinco días, veo mucho mejor, no se me nubla la vista, no me duelen los ojos, el enrojecimiento desapareció.',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Alfredo Montesinos',
    comment: 'Lo pedí para mi madre y me lo entregaron ayer. Está de promoción, sólo tienes que recogerlo en la oficina de correos. Pero es más fácil que ir al médico. Ya lo está tomando ahora.',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Nicolas Cardona',
    comment: 'Lo compré para mí hace 10 días, tenía programada una operación un mes después. Nunca hubiera pensado que realmente pudiera ayudar. Tuve glaucoma - ayer fui a ver a mi oftalmólogo - se quedo asombrado, mi visión se recuperó. Me preguntó qué estaba tomando, dijo que no había oído hablar de este remedio, de lo contrario me lo habría recetado inmediatamente en lugar de dirigirme a cirugía (¡sí, así que le creí!).',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Valentina Arroyo',
    comment: '¡Qué bien que tengamos niños tan inteligentes creciendo! ¡Buena salud para él y buena suerte!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Florentina Ferreiro',
    comment: 'Lo pedí para mi madre y padre, hasta ahora en el sorteo. Ambos están haciendo el curso y ambos están mejorando cada día. Ya prescinden de las gafas en casa, lo cual es un progreso tremendo.',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Gloria Maria Rojas',
    comment: '¡Lo conseguí! Mañana debe estar ya aquí.',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Juliana Vilar',
    comment: 'Participé en el sorteo y obtuve un descuento, muy bien)) De todas formas, creo que subirán un poco más el precio. No podemos prescindir de él...',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Luz Maria Viera',
    comment: 'Las clínicas son caóticas y horribles. No voy allí durante mucho tiempo, de todos modos no sirve de nada. En las clínicas privadas te estafan, no hay opciones. Estoy muy agradecida de que ahora podamos conseguir Zeaxan con descuento.',
    photo: 'https://randomuser.me/api/portraits/women/48.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Esther Castellanos',
    comment: 'Leí las críticas y comprendí que tenía que comprarlo) Voy a conseguir un descuento y a hacer mi pedido.',
    photo: 'https://randomuser.me/api/portraits/women/49.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Clara Castaño',
    comment: 'Menos mal que lo desarrolló el Estado y no un sector privado. Estarían especulando con este remedio. Y el joven es bueno, aún quedan mentes brillantes en nuestro país.',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Francisco Porras',
    comment: 'Es un milagro. Hace una semana tuve cataratas y ahora se ha reducido, aún no he recuperado completamente la visión, pero aún no he terminado el curso.',
    photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Erika Cuellar',
    comment: 'Estoy totalmente de acuerdo con las demás opiniones. Zeaxan es, en mi opinión, el mejor que existe. Mi marido tenía problemas de vista. No sabía qué hacer, estábamos ahorrando para una operación. Pero leyó sobre Zeaxan y decidió probarlo. Empezó a tomarlo, y al mes y medio su visión era 1.',
    photo: 'https://randomuser.me/api/portraits/women/51.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Mara Barea',
    comment: 'Afortunadamente, también hemos tenido experiencias positivas con Zeaxan. Su efecto es impresionante. ¡Nuestra vista es tan buena como cuando éramos jóvenes!',
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Vicenta Fraga',
    comment: 'Tendré que pedir uno para mi marido. ¡Espero que le sirva de ayuda, la ceguera es algo terrible! En ultimo caso tendría que cuidar de él, dejarlo todo, el trabajo y el jardín.',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Feliciana Acevedo',
    comment: 'Leí sobre Zeaxan por primera vez en un foro de oftalmología. ¡Impresionante! Dejé una solicitud para conseguirlo en la promoción.',
    photo: 'https://randomuser.me/api/portraits/women/54.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Ivan Gutierrez',
    comment: 'Y hoy ya lo recogí en la oficina de correos. No me lo creí hasta el final. Pensaba que había gato encerrado en alguna parte, pero al final conseguí Zeaxan... Y ya no voy a las farmacias. Todo lo que dicen en la tele es que engañan a la gente y nadie hace nada al respecto. Pero es bueno que haya gente que haga algo por el pueblo. Muchas gracias.',
    photo: 'https://randomuser.me/api/portraits/men/49.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'José Hidalgo',
    comment: 'Gracias. Conseguí Zeaxan por la promoción y con descuento. Lo enviaron en tres días. Voy a probarlo, mi vista me falla cada vez más con los años y me da miedo operarme. Mi vecino se lo hizo y lleva dos años sufriendo. Todo supura y no se cura...',
    photo: 'https://randomuser.me/api/portraits/men/50.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Ramón Ovidio',
    comment: 'Estoy totalmente de acuerdo. Zeaxan es un remedio muy bueno. Lo probé para recuperar la vista. Últimamente me falla la vista con rapidez. Dejé de ver incluso las señales de tráfico. Empecé a tomar Zeaxan por consejo de un conocido, y todo fue normal. Se recuperó la agudeza visual. ¡Se lo aconsejo a todo el mundo!',
    photo: 'https://randomuser.me/api/portraits/men/51.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Bartolome Soler',
    comment: 'Yo también tengo experiencias positivas con Zeaxan. Lo cogí en promoción y obtuve un gran descuento. Es mucho más barato que tener que ir a la clínica por la medicación que te han recetado.',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Rosa Soto',
    comment: 'Me deshice de mis gafas con Zeaxan. ¡Mi visión es ahora 1! ¡Puedo verlo todo! Las gafas me daban un dolor de cabeza constante.',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Vicente Ferrer',
    comment: 'Ahora estoy recuperando la vista con este Zeaxan. Ya es la segunda semana y mi visión es notablemente más nítida. Antes no podía ver el número del bus, pero ahora lo veo bien.',
    photo: 'https://randomuser.me/api/portraits/men/53.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Micaela Quintero',
    comment: 'Wooooooo))))) ¡No sabía que Zeaxan lo había inventado un niño prodigio! Lo tomé por recomendación personal de un profesor que conozco. Ahora no llevo lentillas. Pero luego lo pedí sin descuento y me salió 5 veces más caro, eso está claro. Y ahora piensa cuánto costará cuando por fin llegue a las farmacias. ¡No puedo ni imaginármelo!',
    photo: 'https://randomuser.me/api/portraits/women/56.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Carmen Maria',
    comment: 'Una conocida se operó de la vista el año pasado. Dos veces (era una operación repetida). Sigue teniendo pus y algunos problemas todo el tiempo. Yo misma decidí que restablecería mi visión por mí misma.',
    photo: 'https://randomuser.me/api/portraits/women/57.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Xiomara Duarte',
    comment: 'Ya estaba pensando en corregirme la vista, pero tenía mucho miedo. Descubrí Zeaxan hace unos dos meses. Decidí tomarlo para empezar y mi vista mejoró, así que ahora no tendré que operarme. Es una pena que no me hicieran descuento, tuve que pagar 9.900 en una clínica privada.',
    photo: 'https://randomuser.me/api/portraits/women/58.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Pedro',
    comment: 'Prescribe Zeaxan para un curso completo. Primero lo tomaré yo, luego lo pediré para toda la familia como medida preventiva. La vista deficiente es nuestro problema genético.',
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Julia V.',
    comment: 'Es la segunda semana del curso y mi vista ya no se compara con la de antes. Definitivamente recomiendo Zeaxan. Y ¡muchas gracias al muchacho por desarrollarlo!',
    photo: 'https://randomuser.me/api/portraits/women/59.jpg',
    date: generateRandomTime(new Date(today)),
  },
];

const CommentsWithPhotos = () => {
  return (
    <div className="space-y-8">
      {comments
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort comments by date, newest first
        .map((comment, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
            <img src={comment.photo} alt={comment.name} className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-blue-500 font-bold">{comment.name}</p>
              <p>{comment.comment}</p>
              <p className="text-gray-500 text-sm">{new Date(comment.date).toLocaleString()}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentsWithPhotos;
