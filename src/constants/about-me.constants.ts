import CupCake1 from '@/app/about-me/assets/cupcakes/IMG_5323.jpg';
import CupCake2 from '@/app/about-me/assets/cupcakes/IMG_5327.jpg';
import CupCake3 from '@/app/about-me/assets/cupcakes/IMG_5482.jpg';
import CupCake4 from '@/app/about-me/assets/cupcakes/IMG_5573.jpg';
import Cake1 from '@/app/about-me/assets/cakes/IMG_4779.jpg';
import Cake2 from '@/app/about-me/assets/cakes/IMG_4852.jpg';
import Cake3 from '@/app/about-me/assets/cakes/IMG_5816.jpg';
import Cake4 from '@/app/about-me/assets/cakes/IMG_7875.jpg';
import Ideas1 from '@/app/about-me/assets/ideas/IMG_3464.jpg';
import Ideas2 from '@/app/about-me/assets/ideas/IMG_4109.jpg';
import Ideas3 from '@/app/about-me/assets/ideas/IMG_8520.jpg';
import Ideas4 from '@/app/about-me/assets/ideas/IMG_6309.jpg';
import Experiments1 from '@/app/about-me/assets/experiments/IMG_5829.jpg';
import Experiments2 from '@/app/about-me/assets/experiments/IMG_6947.jpg';
import Experiments3 from '@/app/about-me/assets/experiments/IMG_2986.jpg';
import Experiments4 from '@/app/about-me/assets/experiments/IMG_6965.jpg';

const MOCK_TITLE = 'Хто тут пече?';
const MOCK_ABOUT_ME =
  'Привіт, запрошую вас на мою кухню! Я - Маша, і я обожнюю випічку. При чому і їсти, і готувати, і годувати:) Якийсь час я працювала в кондитерській та пекрані, потім робила торти на замовлення, а зараз пишу рецепти для вас.';
const MOCK_ABOUT_ME_2 =
  'Я з Харкова, люблю це місто, вірю в Україну. Доначу і закликаю вас робити те саме кожен день!';

const MOCK_TITLE_ARTICLE_1 = 'Початок історії';
const MOCK_TEXT_ARTICLE_1 = [
  'Мені було десь 13 років, як вийшов перший Майстершеф. Пам’ятаю, як кожен тиждень чекала на новий випуск, дивилась і надихалась. В цей період я зрозуміла, що мене сильно тягне щось готувати самою. Я дуже любила солодке, тому не вагалась, що треба починати саме з випічки. Вперше я приготувала вишневий пиріг з меренгою разом з родичкою. В нас вийшло ну дуууже смачно. Потім ми готували лазанью, потім ще раз цей пиріг. А потім родичка поїхала і я залишилась без нагляду на кухні, так скажемо.',
  'Моя мама була не в захваті від того, що я марную продукти (бо зачату так і було, в мене не виходило майже нічого з рецептів).Хоча я готувала досить сміливі штуки, по типу пряникового будинку, торт-райдуга (де всі коржі різнокольорові), якісь капкейки, печиво… Але виходило як треба мало що. Я бачила картинку, яка в рецепті, і бачила свій результат, і це взагалі не сходилось! Я обурювалась і засмучувалась, думала, що зі мною щось не так.',
  'Як виявилось потім, не так щось було з рецептами. То і діло вони упускали важливі деталі приготування або взагалі писались неправильні технології.',
  'В якийсь момент я перестала готувати десерти та випічку, але повернулась до цього коли в мене були ресурси на те, щоб самостійно експериментувати на кухні.',
  'Я знайшла на тодішній мій погляд найкращий сайт з рецептами, де все детально розписано, де є пояснення кожного процесу — саме те, що мені було потрібно!',
  'Зараз в українському просторі вкрай мало хороших сайтів з рецептами. І я би хотіла здійснити свій невеличкий вклад у цю нішу. Я люблю готувати їжу, фотографувати її, знімати процес, потім дегустувати! Прям пишу про це зараз, і енергія підіймається!',
];

const MOCK_TITLE_ARTICLE_2 = 'Торти на замовлення';
const MOCK_TEXT_ARTICLE_2 = [
  {
    text: [
      'Отже, після практики вдома, я пішла працювати в кондитерську, потім в пекарню, там отримала багато досвіду. І потім вирішила, що хочу робити торти на замовлення.',
      'Я дуже давно носила цю ідею в себе в голові, думала, що це неможливо (типу потрібно багато вкладень і все таке), а потім знайшла бенто-торти на просторах Пінтересту. І далі все як в тумані: купила перші бокси, приготувала перші торти для зйомки контенту, подарувала друзям, вони зацінили. Їх схвалення було важливим поштовхом для мене, і я запустила інстаграм-сторінку.',
    ],
  },
  {
    text: [
      'Я готувала торти (контрольне фото у ліфті було одним з улюблених процесів):',
    ],
    images: [
      { alt: 'Cake 1', src: Cake1.src },
      { alt: 'Cake 2', src: Cake2.src },
      { alt: 'Cake 3', src: Cake3.src },
      { alt: 'Cake 4', src: Cake4.src },
    ],
  },
  {
    text: ['горнятко-торти з донатом на фонди та збори:'],
    images: [
      { alt: 'CupCake 1', src: CupCake1.src },
      { alt: 'CupCake 2', src: CupCake2.src },
      { alt: 'CupCake 3', src: CupCake3.src },
      { alt: 'CupCake 4', src: CupCake4.src },
    ],
  },
  {
    text: ['шукала нові ідеї для декору тортів:'],
    images: [
      { alt: 'Ideas 1', src: Ideas1.src },
      { alt: 'Ideas 2', src: Ideas2.src },
      { alt: 'Ideas 3', src: Ideas3.src },
      { alt: 'Ideas 4', src: Ideas4.src },
    ],
  },
  {
    text: ['експериментувала зі смаками та новою продукцією:'],
    images: [
      { alt: 'Experiments 1', src: Experiments1.src },
      { alt: 'Experiments 2', src: Experiments2.src },
      { alt: 'Experiments 3', src: Experiments3.src },
      { alt: 'Experiments 4', src: Experiments4.src },
    ],
  },
  {
    text: [
      'Я дуже вдячна за рівень довіри від людей, які не знали мене, та замовляли торти на дні народження, для дітей, на весілля!',
      'Це були драйвові та іноді важкі дні. Я пишаюсь собою, що змогла втілити це у життя. Хоча затримати це так і не вийшло…',
    ],
  },
];

const MOCK_TITLE_ARTICLE_3 = 'Зміна діяльності';
const MOCK_TEXT_ARTICLE_3 = [
  'Любила це дуже, та прийшов час змінити сферу діяльності. Я, як дуже багато людей в Україні, почала навчатись розробці, і це мені також дуже подобається! В тому, що я роблю зараз також є творчість, краса, естетика, створення нового, цікаві виклики!',
  'Після повномасштабного вторгнення в мене вже не було того натхнення і розуміння сенсу того, що я роблю. Але через якийсь час, я зрозуміла, що хочу ділитись чимось, що пов’язане з їжею, тому був створений цей сайт!',
];

const MOCK_TITLE_ARTICLE_4 = 'Заключення і найважливіша частина';
const MOCK_TEXT_ARTICLE_4 = [
  'Мої рецепти написано детально для того, щоб ви розуміли(!) процес приготування, а не просто готували. Я додаю фото майже на кожний етап, щоб ви могли звіритись, чи все йде як треба.',
  'Зауважу, що мої рецепти не претендують на істину в останній інстанції, я можу в чомусь помилятись, чогось не знати, але я все ще віддаюсь на повну кожному рецепту!',
];

const MOCK_TEXT_ARTICLE_5 = [
  'Також, цей сайт не стоїть на місці, в процесі ще багато функціоналу, який я хочу додати.',
  'Якщо у вас є ідеї, як можна покращити сайт, або зауваження щодо рецептів, чи ви знайшли граматичну помилку — велком ту май інстаграм! Там напишіть просто мені в Дірект і я буду рада поспілкуватись:)',
];

export const ABOUT_ME_DATA = {
  intro: {
    dataSet: 'intro',
    title: MOCK_TITLE,
    content: [MOCK_ABOUT_ME, MOCK_ABOUT_ME_2],
  },
  article1: {
    dataSet: 'childhood and bakery',
    title: MOCK_TITLE_ARTICLE_1,
    content: MOCK_TEXT_ARTICLE_1,
  },
  article2: {
    dataSet: 'am our bento way',
    title: MOCK_TITLE_ARTICLE_2,
    content: MOCK_TEXT_ARTICLE_2,
  },
  article3: {
    dataSet: 'stop making cakes, nowdays',
    title: MOCK_TITLE_ARTICLE_3,
    content: MOCK_TEXT_ARTICLE_3,
  },
  article4: {
    dataSet: 'conclusion',
    title: MOCK_TITLE_ARTICLE_4,
    content: [MOCK_TEXT_ARTICLE_4, MOCK_TEXT_ARTICLE_5],
  },
} as const;
