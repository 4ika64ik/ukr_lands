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
    name: 'Дарья Морозова',
    comment: 'Просто невероятное средство, всем советую, так достали боли в области спины. Но после того как начала использовать Revmaheal в течении 10 дней стало намного легче и боли ушли. Выиграла со скидкой, когда только началась у них акция, сейчас вот еще раз заказала, подруге на день рождения, акция-то закончится скоро, хорошо что успела! Она очень рада этому подарку!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Вера Иванчикова',
    comment: 'Мой дед еще ядами муравьев и пчел лечился, поэтому я не по наслышке знаю как они работают. Дед дожил до 95 лет и все суставы были как новые. А вот я мучаюсь. И рада бы этими ядами полечиться да где ж их раздабудешь. Городской житель! Еще и сделаю не так, хуже только будет. Правильна врач говорит. Хорошо что есть такое средство, уже заказала себе пару каробочек пока по акции бесплатно.',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Людмила Захарова',
    comment: 'А мне врачи никак не могут диагноз поставить, хожу как на работу в поликлинику. В коленях сильная боль, уже года как 3. Правда, терплю, стреляет, когда сгибаю колени или встаю после долго сидения. Со временем появилась пульсация, не могу присесть, чтобы не опереться. Сейчас прохожу обследование у ревматолога, но очень страшно. Пару недель назад был нервный срыв… Спасибо вам за наводку на этот гель, хочу заказать. Цепляюсь за каждую возможность…',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Наташа П.',
    comment: 'Я уже заказала жду.',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Надежда Митрофанова',
    comment: 'Revmaheal действительно помогает, я в прошлом профессиональная спортсменка, с возрастом набрала вес и все мои суставы просто превратились в труху. Хорошо что есть такие средства, которые к жизни возвращают! Начала потихоньку двигаться, вернула спорт в свою жизнь, ходим с подругами теперь каждый день по 5-7 км.',
    photo: 'https://randomuser.me/api/portraits/women/48.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Мария Сиваева',
    comment: 'Это то что мне нужно! Мать мучается с артрозом, у мужа спина больная, да и у самой шейный остеохондроз. Спасибо вам, что помогаете людям, таких докторов мало!',
    photo: 'https://randomuser.me/api/portraits/women/49.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Аполлинария Гуляева',
    comment: 'Заказала Revmaheal для мамы 2 месяца назад. Страдает последние годы от болей в коленях. Стали мазать этим гелем 2 раза в день. Говорит, что боль полностью прошла. Стала по лестнице подниматься на 5 этаж, а раньше из дома не могла выйти. Сейчас на дачу со мной ездит, помогает, прямо душа радуется, что мама теперь без боли живёт и может на свежий воздух выйти. Аж расцвела!',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Степан Г.',
    comment: 'Спасибо Вам большое за информацию про Revmaheal! Умирал просто от боли в коленях, была старая травма и вот привет артроз сустава. Revmaheal за пару недель поставил меня на ноги! Стал из дома выходить, по лестнице на третий этаж раньше не мог подняться, а теперь хоть и с трудом, но подымаюсь. Отличное средство, пока не поздно взял еще по программе.',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Анжелика Медведева',
    comment: 'Пользуюсь Revmaheal вторую неделю. Стало намного легче, не крутят суставы как раньше, могу хоть спать спокойно теперь, а то забыла когда спала.',
    photo: 'https://randomuser.me/api/portraits/women/51.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Варвара Сополева',
    comment: 'Да, Revmaheal это лучшее средство для суставов. У меня артрит прогрессирующий. За последние 5 лет перепробовала все мази, пластыри и таблетки — ничего не помогало. Хорошо, что сестра посоветовала это средство. Как рукой сняло проблемы со спиной и суставами ног. Теперь спортом занялась, с внуками могу гулять, дочке всё же полегче.',
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Юрий Орлов',
    comment: 'День добрый, в прошлом году поставили ревматоидный артрит. Все суставы страшно болели, все тело! Это был сущий ад! Потом жена вычитала про Revmaheal, заказала на пробу. Уже через несколько дней пошли улучшения, через неделю боли практически полностью ушли!!!! Очень хорошее средство, на себе его испробовал, поэтому рекомендую! Уверен, оно положит начало новой эпохи в лечении болезней суставов.',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Евгения Зубарева',
    comment: 'У меня артрит, суставы болели ужасно, не могла ничего делать, работу пришлось бросить. Случайно нашла эту статью и успела по программе заказать Revmaheal. Прошла полный курс, суставы перестали опухать, боль ушла, подвижность вернулась, я просто счастлива!',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Руслан Нагиев',
    comment: 'Заказал себе препарат, повезло, выиграл 100% скидку. По телефону сказали что акция скоро эта с розыгрышем закончится, хорошо успел брату позвонить сказать, тот тоже заказал себе.',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Милана Сальницкая',
    comment: 'Да, мне тоже сказали мало осталось, хорошо что успела, побольше взяла прозапас.',
    photo: 'https://randomuser.me/api/portraits/women/54.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Михаил Константинов',
    comment: 'Слышал про этот гель с ядом давно уже. Сам только еще пока начал применять Revmaheal, но эффект уже почувствовал. Причем не только суставами, организм в целом стал гораздо здоровее. Со женой горя теперь не знаем! Как дети малые.',
    photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Татьяна Матросова',
    comment: 'Мне очень помогло это средство! А за скидку спасибо отдельное! На каком-то сайте видела за 3900 этот гель! Всегда знала, что наши лидеры в мире по медицине. Люди злые и завистливые, гадости пишут. Тоже видела целые сайты, которые делают специально для очернения продукта. Точно знаю, что этим всем занимаются мошенники с Украины, вымогают деньги с бедных граждан.',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Анна Михалкова',
    comment: 'Это просто чудо! Пользуюсь гелем уже три недели, прошли все боли в руках и плечах, подагра обошла стороной! Спасибо большое дорогие мои!',
    photo: 'https://randomuser.me/api/portraits/women/56.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Дмитрий Рустамович',
    comment: 'У отца больные суставы, в последнее время совсем слег, жить не хочет, плачет от боли постоянно. Можно ли ему как-то помочь? Врачи дают плохой прогноз, говорят что ничего уже не поможет.',
    photo: 'https://randomuser.me/api/portraits/men/49.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Игнат Р.',
    comment: 'Дмитрий! Перестаньте мучить человека и таскать по больницам! Закажите ему Revmaheal. Так и без отца можно остаться однажды.',
    photo: 'https://randomuser.me/api/portraits/men/50.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Елена Кудряшова',
    comment: 'Это просто чудо! Муж пока правда только неделю мажет, но наконец то спит по ночам нормально а не ворочается! При том, что колени мы ему лечим уже несколько лет. Пусть вашему проекту всегда сопутствует удача!',
    photo: 'https://randomuser.me/api/portraits/women/57.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Есения Тихонова',
    comment: 'Скажите а что нужно чтобы по акции получить? Паспорт или полис надо отправлять или цифры называть?',
    photo: 'https://randomuser.me/api/portraits/women/58.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Виктор Шишкин',
    comment: 'Есения, нет, не надо, я просто ввёл имя и телефон и всё. Перезвонили, никакие данные кроме куда доставить не спрашивали.',
    photo: 'https://randomuser.me/api/portraits/men/51.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Игорь Савин',
    comment: 'Правильно! Такие цены в аптеках потому что воруют у нас! Набивают карманы пока можно. Ведь вы сколько в аптеке в месяц оставляете? И лучше бы вас подольше лечить. А если еще и в частной конторе - так вообще раздолье. Оплатил прием, накупил таблеток и так сто раз по кругу. А там уже и похоронное агентство рядом, тоже денежек хотят.',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Василий Давыденко',
    comment: 'Врач дело говорит. Мне ничего так не помогало, как этот гель. А я в аптеку ни одну зарплату отнес. Артроз колена был, с палочкой ходил. А после Revmaheal все в порядке, вот внука катаю.',
    photo: 'https://randomuser.me/api/portraits/men/53.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Алина Фролова',
    comment: 'Всем здравствуйте! У матери РА, 56 лет. Хочу попробовать заказать этот гель, ибо никакие средства, назначенные врачом, ей толком не помогают. Подскажите, кто-нибудь уже заказывал по программе? Это не развод? Все ли пришло в том виде, в котором заявлено?',
    photo: 'https://randomuser.me/api/portraits/women/59.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Галина Волошина',
    comment: 'Алина, нет, не развод, мне перезвонили после заявки, девушка консультант грамотно все объяснила, спросила мое состояние. Действительно бесплатно по программе выдают. Я скидку выиграла, тоже думала развод. Не бойтесь, отправьте заявку, за спрос как говорят не бьют.',
    photo: 'https://randomuser.me/api/portraits/women/60.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Иван Проскурин',
    comment: 'Не сомневайтесь, от Revmaheal эффект есть однозначно, я по своему опыту говорю. С артрозом живу уже больше 10 лет. Но медицина не стоит на месте, она развивается. Столько всего пережил за эти годы, столько боли вытерпел, но теперь я в полном порядке. И это все благодаря Revmaheal! Считаю, это топовое средство. Дай бог чтобы производство не прикрыли!',
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Валентина Желтова',
    comment: 'Пару лет назад мы вылечили мужу колено, которое сильно беспокоило его уже несколько лет. Пытались его лечить и лазером, и всевозможными медицинскими препаратами - ничего не помогало. Уже не веря в то, что колено можно вылечить (а муж просто стал хромать, а уж о том, чтобы опереться на колено, и речи быть не могло) провели курс терапии Revmaheal. Через несколько дней после начала курса пошло сильное обострение, тем не менее, курс провели до конца. И вот уже два года муж об этой болячке и не вспоминает.',
    photo: 'https://randomuser.me/api/portraits/women/61.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Василий Шишков',
    comment: 'Пользуюсь Revmaheal уже 2 недели. Боль прошла, могу и по дому что-то делать, а раньше еле до туалета ползал. Доволен остался, надо еще взять, никаких денег не пожалею.',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Елена Кузнецова',
    comment: 'И мне понравился этот Revmaheal. Колено ныло ужасно, не могла на 3 этаж подняться. А еще не старуха, даже до нового пенсионного возраста еще не дожила. А из-за ног почти обездвиженной была. А сейчас и в магазин, и внучку из сада забрать, и по дому всё успеваю.',
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Марина Зубова',
    comment: 'Получила вчера. Мужа намазала и уже через минут 10 сказал, что полегчало. Отличное средство, надо еще заказывать.',
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Любовь Коновалова',
    comment: 'Меня залечили почти что до смерти врачи эти. В итоге лекарства так посадили желудок, что язву заработала. Хотя до этого был просто гастрит легкий. Дальше еще хуже! Пришли плохие анализы печени. Пришлось лечить печень и желудок. Пока этим занималась, с суставами стало все только хуже. Это был какой-то замкнутый круг!!! И только после всего этого кошмара я уже не доверяю врачам. Прочитала про Revmaheal, решила попробовать...И что вы думаете?!!! Уже на следующий день мне стало в тысячи раз лучше! Продолжаю курс, хочу полностью восстановить суставы.',
    photo: 'https://randomuser.me/api/portraits/women/64.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Ирина Липникова',
    comment: 'А я уже получила свою посылку. Полный курс взяла, буду спину восстановить. Спасибо за эту статью!',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Надежда Кирьянова',
    comment: 'У моего брата жена умерла из-за прогрессирующего артроза, это очень страшная болезнь. Несколько лет они почти жили в больницах, столько денег выбросили на все эти дорогущие уколы, ноги совсем отказали. Пять лет в коляске прожила, боль очень сильная была. Брат до сих пор оправиться не может. Здоровья всем! Лечитесь не запускайте себя!',
    photo: 'https://randomuser.me/api/portraits/women/66.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Ирина С.',
    comment: 'Вот это да, неужели по акции можно получить? Кто-то уже получил?',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    date: generateRandomTime(new Date(today)),
  },
  {
    name: 'Анастасия Акимова',
    comment: 'Да, я получила уже Revmaheal. Просто оставила номер, мне перезвонили, спросили, что меня беспокоит, я рассказала и мне рассчитали курс. Вчера вечером пришла смс что посылка пришла. Утром сходила забрала, уже попробовала, приятно пахнет, боль снял.',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: generateRandomTime(new Date(yesterday)),
  },
  {
    name: 'Антонина Березкина',
    comment: 'Помог Ваш гель! Теперь могу с внучкой играть, дела по дому делать. Раньше как старая развалюха была, а сейчас как помолодела! Боли прошли. Перестала про подагру вспоминать. Тьфу-тьфу. В аптечке теперь на почетном месте!',
    photo: 'https://randomuser.me/api/portraits/women/69.jpg',
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
