import React from 'react';
import CommentsWithPhotos from './CommentsWithPhotos';
import AddComment from './AddComment';
import OrderForm from './OrderForm';
import img1 from "../img/1.jfif";
import img2 from "../img/2.webp";
import img3 from "../img/3.webp";
import img4 from "../img/3.jfif";
import img5 from "../img/4.jfif";
import img6 from "../img/5.jfif";
import img7 from "../img/6.jfif";
import img8 from "../img/8.jfif";
import img9 from "../img/8.jfif";
import img10 from "../img/9.jfif";
import img11 from "../img/10.jfif";
import img12 from "../img/7.jfif";




const Article = () => {
  return (
    <article className="prose lg:prose-xl mx-auto py-8">
     {/**  <img src={img0} alt="Main Article" className="w-full mb-8 rounded" />*/}
      
      <h1 className="font-serif">Expert</h1>
      <h2 className="font-serif">АРТРОЗ ПОБЕЖДЁН?!</h2>
      <p>РИСКУЯ СОБСТВЕННОЙ ЖИЗНЬЮ, ХАРЬКОВСКИЙ ВРАЧ-РЕВМАТОЛОГ ПОДНЯЛ ПАЦИЕНТОВ НА НОГИ С ПОМОЩЬЮ СТАРИННОГО РЕЦЕПТА.</p>
      <p>Почему аптечная мафия устроила настоящую охоту на простого Харьковского врача и можно ли добиться справедливости, когда деньги важнее жизней простых людей!?</p>
      <img src={img1}></img>
      <p>Михаил Юрьевич Леконцев — самый неравнодушный человек, врач с большой буквы, готовый рисковать своей жизнью ради здоровья и благополучия других.</p>
      <p>После окончания Харьковского государственного медицинского университета Михаил Леконцев вернулся в родной поселок и стал работать в местном медицинском пункте, успешно использовать накопленные и полученные знания, чтобы ставить на ноги всех, кто с детства его знал и растил. Все бы хорошо, вот только нашлись те, кому успехи Михаила стали помехой.</p>
      <p>Читайте статью до конца и узнаете:</p>
      <ul>
        <li>Чем помешал бизнесменам простой участковый врач и почему на него открылась настоящая охота?</li>
        <li>Какие симптомы указывают, что ваши суставы превращаются в труху и пора бить тревогу?</li>
        <li>Как спасти себя от неминуемой гибели при болезнях суставов, если аптечные средства не помогают?</li>
        <li>Можно ли избавиться от артрита, артроза, ревматизма и других проблем с суставами в домашних условиях, без операций и дорогостоящих процедур?</li>
        <li>Какие существуют современные научные разработки для избавления от болезней суставов и полного восстановления организма, и почему в аптеках их не купишь?</li>
      </ul>
      <p>Михаил Леконцев - единственная надежда на долгую и активную жизнь для всех жителей в небольшого городка Харьковского края. Хотя по специальности Михаил ревматолог, но работает он и за хирурга, и за травматолога, и за терапевта, так как кадров катастрофически не хватает. А где-то и за маму с папой, и за психолога.</p>
      <p>Жители души в нем не чают и всегда положительно отзываются о его работе. Мы поговорили с ними наедине и вот, что они рассказывают:</p>
      <blockquote className="border-l-4 border-red-500 italic my-4 pl-4">
        <p>Ольга Ахмадеева: “Ну, что сказать? Возраст берет свое, суставы начали болеть, ходить и выполнять работу по дому стало сложно. Мужа у меня нет, а единственная дочь живет в Харькове и приезжает раз в три месяца. Возила она меня к городским врачам. Они отказались лечить и пророчили мне доживание в инвалидном кресле, мол возраст.</p>
        <p>Но Миша не стал опускать руки! Во что бы то ни стало он решил помочь мне. Дал мне что-то вроде геля, который мне помог встать на ноги и вернуться к нормальной жизни! Мазала этим гелем месяц, и все как рукой сняло. Ну, как его не хвалить, если бы не Миша, уже бы в инвалидном кресле сидела б…!”</p>
      <img src={img2}></img>
      </blockquote>
      <blockquote className="border-l-4 border-red-500 italic my-4 pl-4">
        <p>Ирина Бабинова: “Вот случилась со мной такая история, что не могла ходить и что-то делать по хозяйству. Колени совсем жить не давали. А у меня и коровы, и козы и огород. У нас в поселке иначе не проживешь. Да, и Михаил мне дал мазилку, сказал мазать 2 раза в день. Через 1,5 месяца все прошло. Я ему доверяю, у нас умнее и мудрее никого здесь нет. Если ни ему верить, то кому? Тем более он ученый, с образованием!”</p>
      </blockquote>
      <img src={img3}></img>
      <blockquote className="border-l-4 border-red-500 italic my-4 pl-4">
        <p>Надежда Копотиенко: “Думала инвалидом останусь, так и помру. Ноги совсем не ходили. Сказали готовить инвалидное кресло. Да где тут ездить…. Дорог нет, ступеньки, пороги, в доме тоже не проедешь… Кто меня возить будет? Дочка в городе, у нее работа, семья, трое внуков растут, не могу ж я ее к старухе приковать и детей матери лишить.</p>
        <p>Пошла к Мише, он мне гель какой-то дал, ну или мазь и это мне помогло! С каждым днем мне лучше становилось. Опухлость сошла, смогла потихоньку ходить. Месяца два я втирала в колени средство это, и к ноябрю я уже до Любы соседки дошла, а это пять домов пройти надо. Так что вот такой у нас Мишенька, спаситель наш!”</p>
      </blockquote>
     <img src={img4}></img>
      <p>Мы встретили Михаила на работе. Он как всегда принимал своих пациентов. Но нам удалось задать ему несколько вопросов.</p>
      <p><strong>— Михаил, расскажите, как Вам удалось поставить на ноги столько пациентов? Ведь от многих отказались даже Харьковские врачи! Мы спросили многих, и почти каждый нам сказал, что вы их спасли от гибели.</strong></p>
      <p>— Я многих знаю с детства, когда они еще были молоды и здоровы. Тяжело смотреть, как они теряют возможность ходить. Помогать им некому, я у них один. Привести к ним все оборудование и врачей тоже нет возможности.</p>
      <p>Я увлекся как-то народной медициной. Решил поискать альтернативные способы. Мои предки были тоже медиками, а бабка травницей была, свойства ядов насекомых и животных изучала. Дома у нас хранились старые книги рецептов от разных болезней. Раньше же медицина в основном и была народная, особенно в деревнях. Рецепты эти проверены временем, как врач я понимал, что хуже точно не сделаю. А если повезет — то помогу хорошим людям.</p>
      <p>Я стал искать что-то по теме суставов и нашел записи в старых тетрадях. У нас в Харькове популярны рецепты на основе ядов муравьев и пчел, даже змей. Они способны укреплять кости, восстанавливать хрящевую ткань, улучшать кровообращение в суставной сумке и ускорять регенерацию клеток.</p>
      <p>Также для лечения суставов используются экстракты конского каштана и коры дуба — они отлично снимают воспаление и боль, а экстракт прополиса, которым пчелы с нами делятся, — помогает остановить дегенеративные процессы в суставе.</p>
     <img src={img5}></img>
      <p>Ингредиенты эти в наших краях не такие редкие, нашел я их достаточно быстро. Сделал "болтушку" (прим.ред. средство быстрого приготовления) и давал всем мазать больные суставы два раза в день. Они звонили мне уже на третий день и говорили, что чувствуют себя гораздо лучше.</p>
      <p>Признаюсь, я и сам не ожидал такого прекрасного результата. Но очень рад, что помог своим пациентам с пораженными суставами.</p>
      <p><strong>— А что было дальше? Как так получилось, что на Вас началась настоящая охота? Мы знаем, что Вам даже угрожали! Это правда?</strong></p>
      <p>— Когда все поняли, что средство работает, и им становится лучше, молва разошлась быстро. Меня очень благодарили и пригласили корреспондентов, чтобы рассказать о моем средстве на всю страну.</p>
      <p>Я согласился. Да и хотел помочь не только своим, но и всем людям в нашей необъятной.</p>
      <p>"Ведь миллионы людей мучаются от болей в спине, ногах, руках, становятся инвалидами и доживают жизнь в инвалидном кресле!"</p>
      <img src={img6}></img>
      <p>Так обо мне узнали в Киеве, и я решился поехать в столицу. Меня хорошо приняли. За меня лично поручился лучший доктор страны Евгений Олегович Комаровский. А доктора наук, профессора с интересом слушали о моем средстве, спрашивали про состав, и я им все выложил как на духу. Они провели исследования и создали на основе рецепта новое уникальное средство, которое назвали Instaflex .</p>
      <p>И вот однажды приехали ко мне гости — представители фармкомпании на дорогих машинах. Предлагали большие деньги, хотели выкупить мою формулу. Но я отказался, я же людям помочь хочу, а не денег срубить. Поэтому послал их обратно в грубой форме.</p>
      <p>Еще и бизнесмены из Америки приезжали. Целое шоу устроили. Но все было зря, я не сказал ни слова. Этот секрет моих дедов, и он должен жить только в нашей стране, быть доступным простым людям и помогать нашему народу!</p>
      <p>Тогда мне стали сыпаться угрозы по телефону, меня заставляли уволиться…</p>
      <p><strong>— Только подумать! Настоящий детектив!</strong></p>
      <p>— Да, точно. Они там в своей Америке видно привыкли решать дела такими методами. Кто я для них — просто букашка, которую можно убрать с дороги и зарабатывать миллиарды на моем открытии, продавая в аптеках за бешенные деньги.</p>
      <p>Слава Богу все закончилось. Хотя, насколько я знаю, наша аптечная мафия не пускает мое средство в аптеки, потому что такой конкурент им не нужен.</p>
      <img src={img5}></img>
      <p>"Им нужно продавать Диклофенак и Кеторол и годами лечить людей, чтобы они возвращались снова и снова, опустошая свои карманы!"</p>
      <p>А мое средство натуральное и помогает людям встать на ноги всего за пару месяцев. В нем все те же основные компоненты — яды пчелы, муравья, кобры, еще скорпиона, прополис. И растительные, конечно, компоненты: экстракт коры ивы, конского каштана, багульника и еще ряд других вспомогательных компонентов.</p>
      <p>Мое изобретение успешно прошло все испытания, проверки на безопасность и показало просто потрясающее результаты!</p>
      <ul>
        <li>99% пациентов полностью избавились от боли и воспаления в суставах.</li>
        <li>98% пациентов вернули подвижность суставам.</li>
        <li>100% довольны результатом и готовы рекомендовать мое средство родным и знакомым.</li>
      </ul>
      <p>Люди избавились от таких заболеваний, как артрит, артроз, полиартрит, остеохондроз, остеопороз, подагры и других тяжелых болезней, которые в большинстве случаев приводят к инвалидности. Я очень рад, что мое средство наконец увидело свет и стало доступно людям.</p>
      <p>Наша редакция связалась с одним из самых известных врачей Укаины, Евгением Олеговичем Комаровским. Мы попросили его рассказать, почему он лично поручился за Михаила Леконцева и дать комментарии об инновационном средстве Instaflex , которое превосходит по эффективности все имеющиеся аналоги.</p>
      <img src={img12}></img>
      <p><strong>Евгений Олегович Комаровский</strong></p>
      <p>Врач высшей категории, популяризатор современной медицины, теле- и радиоведущий, главный врач «Городская клиническая больница имени М. Е. Жадкевича Департамента здравоохранения города Киева».</p>
      <p><span className="text-blue-500">Корреспондент:</span> Александр Леонидович, здравствуйте! Нам удалось поговорить с Михаилом Леконцевым из Харькова. Он утверждает, что владел уникальным рецептом своих дедов, и на его основе наши ученые создали чудо-средство для суставов. Михаил также сказал, что вы лично поручились за него во время визита в Киев. Это так?</p>
      <p><span className="text-blue-500">Евгений Олегович Комаровский:</span> Конечно это правда! Чего мне скрывать? Я думаю, что каждый житель нашей страны теперь обязан благодарить его и его предков за это уникальное открытие. Я увидел в горящих глазах Михаила стремление помочь людям. А это самое важное в нашей профессии.</p>
      <p>Выявить артроз, артрит или остеопороз не так легко, а подвержены ему практически все. После 50 лет - 93% пациентов имеют дегенеративные поражения хрящевой ткани. Застраховаться от заболеваний суставов практически невозможно. Это очень коварная проблема, ведь сустав спрятан под каркасом мышц, и не так легко осуществлять его прямое лечение.</p>
    <img src={img6}></img>
      <p>Ни в коем случае не доводите себя до состояния, когда ничего, кроме операций не помогает! Заболевания суставов доведут вас до инвалидного кресла менее чем за 3 года! Лучше выявить проблему на ранней стадии. Вас должны насторожить такие симптомы, как:</p>
      <ul>
        <li>Боль при сгибании суставов;</li>
        <li>Онемение пальцев рук или ног;</li>
        <li>Хруст при потягивании;</li>
        <li>Отек и покраснение сустава;</li>
        <li>Ощущение песка в суставах;</li>
        <li>Беспричинное повышение температуры.</li>
      </ul>
      <p>К счастью, наука не стоит на месте. Средство, которое удалось создать нашим НИИ на основе рецепта Михаила Леконцева, способно на многое. И даже поднять с инвалидного кресла. Я следил за процессом создания Instaflex  (прим. ред. так называется средство, созданное на основе формулы Михаила Леконцева) и горжусь тем, что его стали производить у нас, в Украине.</p>
      <p>Даже из названия средства мы видим, что оно основано на синергии сильнейших природных компонентов. Полезные свойства ядов пчелы, скорпиона, кобры и муравья усилены прополисом, а также растительными экстрактами — багульника, хмеля, конского каштана, коры ивы и другими. Все вместе они обеспечивают быстрое восстановление пораженного сустава.</p>
      <p>Этот гель на основе редких компонентов, действительно, просто так не достать. Он пока не продается в аптеках (спасибо жадным аптекарям!). Но я рад, что наши звезды, мои пациенты, кто уже испытал на себе действие Instaflex , охотно делятся своими историями и тем самым рассказывают об этом чудесном средстве большому количеству людей.</p>
      <p>Гель Instaflex  содержит натуральные и высокоактивные компоненты, благодаря чему:</p>
      <ul>
        <li>ЗАТИХАЕТ БОЛЬ спустя несколько минут после нанесения геля и больше не возвращается при регулярном применении;</li>
        <li>ВОСПАЛЕНИЕ ПОСТЕПЕННО УМЕНЬШАЕТСЯ и через 3-5 дней (в среднем) полностью прекращается;</li>
        <li>СНИМАЮТСЯ ОТЕКИ и покраснение кожи;</li>
        <li>ВЫВОДЯТСЯ СОЛИ, а суставы перестают хрустеть и «скрипеть», движения становятся свободней;</li>
        <li>ПРЕКРАЩАЕТСЯ РАЗРУШЕНИЕ СУСТАВА, запускается процесс регенерации костной и хрящевой тканей, связочного аппарата;</li>
        <li>КОСТНАЯ ТКАНЬ УКРЕПЛЯЕТСЯ, восстанавливается эластичность связок и хрящей;</li>
        <li>НОРМАЛИЗУЕТСЯ КРОВООБРАЩЕНИЕ и обменные процессы в суставах и окружающих тканях;</li>
        <li>ВЫВОДЯТСЯ ТОКСИНЫ, предотвращается отложение солей;</li>
        <li>СТИМУЛИРУЕТСЯ ВЫРАБОТКА СИНОВИАЛЬНОЙ ЖИДКОСТИ и к концу курса полностью восстанавливается свобода движений.</li>
      </ul>
      <p>Пациенты постоянно отправляют большое количество писем на электронную почту со словами благодарности. Вот последнее письмо от Николая Рязанцева из Одессы:</p>
      <blockquote className="border-l-4 border-red-500 italic my-4 pl-4">
        <p>Николай Рязанцев, 56 лет, Одесса</p>
        <img src={img7}></img>
        <p>Дорогой Александр Леонидович! Пишу выразить вам свою благодарность от чистого сердца. И передаю привет и низкий поклон от всей семьи. Не зря жена все передачи с вами смотрит и написала вам. Вовремя про Instaflex  сказали, и оба меня спасли!</p>
        <p>С ужасом вспоминаю, как чувствовал себя еще полгода назад. Ни встать, ни сесть. Руки, ноги болели, спина вообще не разгибалась. Как говорил мой отец покойный: “Суставы в труху превратились”. Да и по дому ничего делать не мог. Как инвалид! Ладно еще ходить из последних сил удавалось, а то вообще думал коляску придется покупать. Я бы не стал жить, честно. Руки бы наложил на себя.</p>
        <p>Мне без движения и жизнь - не жизнь! Хозяйство большое, дети, внуки. Всю жизнь привык что-то делать.</p>
        <p>Родные меня так поддержали, когда узнали, что я именно от вас получил совет. Первые результаты стали заметны через 2 недели. Перестало хрустеть, прошли отеки и боль спала. Но самое удивительное произошло спустя месяц. Как мальчишка начал бегать по дому. Баня, дрова, с колодца воду таскал. И давление как-то в норму пришло. Чудо а не гель!</p>
        <p>Не могу поверить, что многие люди до сих пор мучаются. Жаль, что так мало народу знает о Instaflex , и его нет в аптеках. Конечно, я понимаю, всем нужны деньги, чтобы жить. Но не такой же ценой - жизнями других людей. Лучше бы завезли партиями и народ бы здоровым ходил. Как будто нечем больше заняться в стране, кроме как издеваться над людьми. Вместо того, чтобы раз и навсегда помочь. Слава Богу, что есть неравнодушные.</p>
        <p>Еще раз спасибо вам, уважаемый доктор. Дай Бог вам здоровья!</p>
      </blockquote>
      <p>Надо сказать, что моему пациенту Николаю еще повезло. Он не просто получил возможность использовать Instaflex , его поддержала вся семья и никто не мешал избавляться от болей в суставах и восстанавливать организм.</p>
      <p>Но есть и другие истории. Например, не так давно я получил письмо от Людмилы Кравченко из Винницы. Ей 49 лет, у нее уже было множество проблем с суставами, и ей был рекомендован Instaflex . Однако ее родственники отговорили использовать этот гель, убеждая ее сидеть в очередях поликлиник и платных больниц в ожидании советов от врачей, и принимать вагоны аптечных препаратов, маскирующих симптомы. Я боюсь себе предположить, сколько денег они отдали этим шарлатанам!</p>
      <p>И в итоге Людмила оказалась на больничной койке с деформацией и дегенерацией суставов. Она потеряла свою самостоятельность и теперь нуждается в помощи для выполнения простых задач и ежедневных действий. Одним словом - стала обузой для семьи и инвалидом на всю оставшуюся жизнь.</p>
      <p>А начни она использовать Instaflex , когда у нее появилась такая возможность, этого бы не случилось.</p>
      <img src={img8}></img>
      <p>Курсовое использование Instaflex  запускает цепную реакцию позитивных изменений в теле. Справившись с одной серьезной проблемой, организм избавляется от другой, третьей и т.д. Можно назвать это “эффектом домино”.</p>
      <img src={img11}></img>
      <h4 className="font-serif">1. Суставы и позвоночник</h4>
      <p>98,3% пациентов избавились от болей в суставах и позвоночнике.</p>
      <p>Благодаря своему природному составу и отсутствию химии и ГМО, Instaflex  борется с причиной появления болезней. С его помощью удается избавиться от отечности, воспаления и боли в суставах и полностью восстановить их функции в домашних условиях всего за 1,5-2 месяца.</p>
      <h4 className="font-serif">2. Жизненные силы и активность</h4>
      <p>Все, кто использовал Instaflex  отмечают резкий прилив сил. Дело в том, что компоненты средства стимулируют выработку определенных гормонов, в том числе гормонов молодости и гормона счастья - дофамина. Появляется желание двигаться, усталость не чувствуется. Нормализуется сон, бессонница больше не беспокоит. Происходит клеточное омоложение биологических систем человека.</p>
      <h4 className="font-serif">3. Иммунитет</h4>
      <p>В ходе курсового применения Instaflex  у пациентов отмечалось улучшение кровоснабжения костного мозга, который занимается производством иммунных клеток. Это приводит к усилению защитных сил организма.</p>
      <p>Иммунитет - это защитник не только от вирусов. Главная функция сильного иммунитета - защита от раковых клеток. Сильный иммунитет вовремя распознает и уничтожает раковые клетки. Не дает появится полноценной опухоли.</p>
      <p>Иммунитет, который работает хотя бы на 50%, уже является непреодолимой преградой для вирусов. А это сегодня тоже очень важно.</p>
      <h4 className="font-serif">4. Давление как у космонавта!</h4>
      <p>Активные вещества, которые присутствуют в Instaflex , проникают через поверхности кожи в кровеносные сосуды и разносятся по всему организму. Но уже первые исследования показали, что средство обладает удивительной способностью снижать давление до возрастной нормы.</p>
      <p>Кроме того, оказалось, что Instaflex :</p>
      <ul>
        <li>Растворяет холестериновые бляшки в сосудах</li>
        <li>Повышает проницаемость капилляров</li>
        <li>Снимает спазм сосудов, вызванный стрессами</li>
        <li>И в конечном итоге - нормализует артериальное давление</li>
      </ul>
      <p>Это натуральное средство, которое позволяет избавиться от боли в суставах и спине и восстановить поврежденные ткани всего за 1,5-2 месяца в домашних условиях без посещения врачей и операций.</p>
      <p>К сожалению, Instaflex  производится небольшими партиями. В том числе и потому, что аптечные сети, точнее их хозяева, активно блокируют его распространение. Зачем им продавать работающее средство, если можно годами «доить» людей с больными суставами, продавая разрекламированные мази.</p>
      <p>Понимаю недовольство Михаила Леконцева. Хорошо, что он не стал продавать рецепт фармкампаниям и уж тем более за границу. Цена для конечного пользователя возросла бы в десяток, а то и в сотню раз. Михаил еще советской закалки. Он всю жизнь работал, чтобы помогать больным, а не зарабатывать на их бедах.</p>
      <p>Надеюсь, что справедливость все же когда-нибудь восторжествует. А пока граждане страны могут получить Instaflex  через официальный розыгрыш по акционной программе поддержки людей с больными суставами, так как на всех средства попросту не хватает.</p>
      <p>Чтобы получить Instaflex , примите участие в розыгрыше скидки до 100% ниже на странице и заполните форму заявки. Вам понадобится только мобильный телефон. Укажите свои имя и номер телефона в форме.</p>
      <p><span className="text-blue-500">Обратите внимание!</span> Принимается только 1 заявка на 1 номер телефона! Сейчас заявки принимают и обрабатывают круглосуточно. Но из-за большой загруженности, возможно придётся немного подождать. Ваш номер телефона отправляется в отдел заказов производителя и больше никто не имеет к нему доступ.</p>
      <h4 className="font-serif">Условия участия в розыгрыше скидок на Instaflex :</h4>
      <ul>
        <li>Быть гражданином Украины старше 18 лет.</li>
        <li>Средство по льготной стоимости распространяется только среди совершеннолетних граждан Украины.</li>
        <li>Приобретать только для личного использования.</li>
        <li>Это нужно для борьбы с перекупщиками.</li>
        <li>Только через официальный розыгрыш.</li>
        <li>В связи с ограниченным количеством продукта, средство реализуется через официальный розыгрыш - размещен ниже на странице.</li>
      </ul>
      <p><span className="text-blue-500">Важно:</span> Был сделан вывод, что июль и август - лучшее время для начала курса Instaflex . Благодаря стабилизации средней температуры ускоряется обмен веществ, усиливается циркуляция крови в организме, увеличивается приток крови и кислорода во внутренние органы и эффект от использования средства возрастает. Восстановление суставов происходит на 67% быстрее, чем это происходило бы в другое время года.</p>
      <h4 className="font-serif">УГАДАЙТЕ, ЗА КАКОЙ ДВЕРЬЮ СКИДКА 100%</h4>
      <OrderForm></OrderForm>
      <h4 className="font-serif">Комментарии:</h4>
      <CommentsWithPhotos></CommentsWithPhotos>
      <AddComment></AddComment>
    </article>
  );
};

export default Article;
