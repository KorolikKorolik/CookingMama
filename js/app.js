const recipes = [
  {
    id: "pasta",
    title: "Паста с томатами и базиликом",
    category: "Главные блюда",
    cuisine: "Италия",
    ingredient: "Томаты",
    time: 25,
    rating: 4.9,
    reviewsCount: 128,
    popularity: 98,
    date: "2025-03-16",
    badge: "Любимчик недели",
    image: "images/image_2.jpeg",
    description: "Та самая паста, ради которой хочется задержаться за столом подольше.",
    ingredients: [
      { name: "Паста", amount: 250, unit: "г" },
      { name: "Помидоры черри", amount: 250, unit: "г" },
      { name: "Чеснок", amount: 2, unit: "зубчика" },
      { name: "Оливковое масло", amount: 2, unit: "ст. л." },
      { name: "Свежий базилик", amount: 10, unit: "г" },
      { name: "Пармезан", amount: 40, unit: "г" }
    ],
    steps: [
      "Поставьте воду для пасты, щедро посолите и отварите пасту до состояния al dente по времени на упаковке.",
      "Пока варится паста, разогрейте оливковое масло в сковороде. "
        + "Добавьте нарезанный чеснок и готовьте около 30 секунд.",
      "Добавьте половинки черри и щепотку соли. Готовьте 5–7 минут, пока томаты не станут мягкими и не дадут сок.",
      "Переложите пасту в сковороду, добавьте половник воды от варки и перемешайте. "
        + "Подавайте с базиликом и тёртым пармезаном."
    ],
    reviews: [
      { name: "Аня", rating: 5, text: "Готовила уже трижды — быстро, просто и очень вкусно!" },
      { name: "Мария", rating: 5, text: "Добавила немного чили, получилось идеально." }
    ]
  },
  {
    id: "pancakes",
    title: "Нежные панкейки с ягодами",
    category: "Завтраки",
    cuisine: "США",
    ingredient: "Ягоды",
    time: 20,
    rating: 4.8,
    reviewsCount: 96,
    popularity: 94,
    date: "2025-03-12",
    badge: "Для неспешного утра",
    image: "images/image_3.jpeg",
    description: "Пышные, золотистые и такие мягкие — выходные начинаются правильно.",
    ingredients: [
      { name: "Пшеничная мука", amount: 200, unit: "г" },
      { name: "Молоко", amount: 250, unit: "мл" },
      { name: "Яйцо", amount: 1, unit: "шт." },
      { name: "Сахар", amount: 2, unit: "ст. л." },
      { name: "Разрыхлитель", amount: 1, unit: "ч. л." },
      { name: "Свежие ягоды", amount: 120, unit: "г" }
    ],
    steps: [
      "В миске смешайте муку, сахар и разрыхлитель. В другой миске слегка взбейте яйцо с молоком.",
      "Соедините жидкие и сухие ингредиенты. Перемешайте венчиком только до объединения — небольшие комочки допустимы.",
      "Разогрейте антипригарную сковороду на среднем огне. Выложите тесто небольшими порциями.",
      "Когда на поверхности появятся пузырьки, переверните панкейк и готовьте ещё около минуты. Подавайте с ягодами."
    ],
    reviews: [
      { name: "Лиза", rating: 5, text: "Получились очень пышные, дети попросили добавку." }
    ]
  },
  {
    id: "cheesecake",
    title: "Чизкейк без выпечки",
    category: "Десерты",
    cuisine: "США",
    ingredient: "Сыр",
    time: 35,
    rating: 4.9,
    reviewsCount: 112,
    popularity: 92,
    date: "2025-03-18",
    badge: "Без духовки",
    image: "images/image_4.jpeg",
    description: "Воздушный сливочный слой на хрустящей основе — и ни минуты у духовки.",
    ingredients: [
      { name: "Песочное печенье", amount: 200, unit: "г" },
      { name: "Сливочное масло", amount: 80, unit: "г" },
      { name: "Сливочный сыр", amount: 400, unit: "г" },
      { name: "Сливки 33%", amount: 200, unit: "мл" },
      { name: "Сахарная пудра", amount: 100, unit: "г" },
      { name: "Желатин", amount: 10, unit: "г" }
    ],
    steps: [
      "Измельчите печенье в крошку, смешайте с растопленным маслом и плотно утрамбуйте на дне формы. Уберите в холодильник.",
      "Залейте желатин холодной водой и оставьте набухать согласно инструкции на упаковке.",
      "Взбейте сливочный сыр с сахарной пудрой. Отдельно взбейте холодные сливки "
        + "до мягких пиков и аккуратно вмешайте в сыр.",
      "Растопите желатин, введите в крем и выложите начинку на основу. "
        + "Оставьте в холодильнике минимум на 5 часов."
    ],
    reviews: [
      { name: "Оля", rating: 5, text: "Идеальный чизкейк, хорошо держит форму и совсем не приторный." }
    ]
  },
  {
    id: "curry",
    title: "Ароматное карри с нутом",
    category: "Главные блюда",
    cuisine: "Индия",
    ingredient: "Нут",
    time: 40,
    rating: 4.7,
    reviewsCount: 74,
    popularity: 87,
    date: "2025-03-10",
    badge: "Растительный выбор",
    image: "images/image_5.jpeg",
    description: "Согревающее блюдо с кокосовым молоком, специями и нежным нутом.",
    ingredients: [
      { name: "Нут консервированный", amount: 400, unit: "г" },
      { name: "Кокосовое молоко", amount: 400, unit: "мл" },
      { name: "Томаты в собственном соку", amount: 200, unit: "г" },
      { name: "Репчатый лук", amount: 1, unit: "шт." },
      { name: "Паста карри", amount: 2, unit: "ст. л." },
      { name: "Рис басмати", amount: 180, unit: "г" }
    ],
    steps: [
      "Мелко нарежьте лук и обжарьте в глубокой сковороде с небольшим количеством масла до мягкости.",
      "Добавьте пасту карри и прогрейте, помешивая, около минуты, чтобы раскрыть аромат специй.",
      "Влейте кокосовое молоко, добавьте томаты и промытый нут. Доведите до кипения и тушите 20 минут.",
      "Отварите рис отдельно. Подавайте карри горячим, украсив свежей зеленью."
    ],
    reviews: [
      { name: "Даша", rating: 5, text: "Очень душевно и сытно! Вместо пасты карри взяла смесь специй." }
    ]
  },
  {
    id: "salmon",
    title: "Лосось с лимоном и травами",
    category: "Главные блюда",
    cuisine: "Франция",
    ingredient: "Рыба",
    time: 30,
    rating: 4.8,
    reviewsCount: 63,
    popularity: 84,
    date: "2025-03-20",
    badge: "Новый рецепт",
    image: "images/image_6.jpeg",
    description: "Сочное филе с цитрусовой ноткой — красиво, легко и без лишних хлопот.",
    ingredients: [
      { name: "Филе лосося", amount: 400, unit: "г" },
      { name: "Лимон", amount: 1, unit: "шт." },
      { name: "Оливковое масло", amount: 1, unit: "ст. л." },
      { name: "Укроп", amount: 10, unit: "г" },
      { name: "Чеснок", amount: 1, unit: "зубчик" },
      { name: "Соль и перец", amount: 1, unit: "по вкусу" }
    ],
    steps: [
      "Разогрейте духовку до 200 °C. Застелите противень пергаментом.",
      "Выложите филе кожей вниз, слегка смажьте маслом, посолите и поперчите.",
      "Добавьте тонкие кружочки лимона, рубленый чеснок и укроп.",
      "Запекайте 12–15 минут до готовности. Время зависит от толщины филе."
    ],
    reviews: [
      { name: "Ира", rating: 5, text: "Быстрый ужин без суеты, лимон здесь очень к месту." }
    ]
  },
  {
    id: "apple-pie",
    title: "Яблочный пирог с корицей",
    category: "Десерты",
    cuisine: "Россия",
    ingredient: "Яблоки",
    time: 55,
    rating: 4.9,
    reviewsCount: 141,
    popularity: 90,
    date: "2025-03-08",
    badge: "Домашняя классика",
    image: "images/image_7.jpeg",
    description: "Тёплый аромат корицы и мягкие яблоки — пирог для уютного чаепития.",
    ingredients: [
      { name: "Яблоки", amount: 3, unit: "шт." },
      { name: "Пшеничная мука", amount: 180, unit: "г" },
      { name: "Яйца", amount: 2, unit: "шт." },
      { name: "Сахар", amount: 120, unit: "г" },
      { name: "Сливочное масло", amount: 100, unit: "г" },
      { name: "Корица", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Разогрейте духовку до 180 °C. Очистите яблоки от сердцевины и нарежьте тонкими дольками.",
      "Взбейте мягкое масло с сахаром, по одному добавьте яйца.",
      "Всыпьте муку и корицу, аккуратно перемешайте до однородного теста.",
      "Выложите тесто в форму, разложите сверху яблоки и выпекайте 35–40 минут до золотистой корочки."
    ],
    reviews: [
      { name: "Света", rating: 5, text: "Пахнет детством! Добавила щепотку мускатного ореха." }
    ]
  },
  {
    id: "avocado-toast",
    title: "Тост с авокадо и яйцом",
    category: "Завтраки",
    cuisine: "США",
    ingredient: "Авокадо",
    time: 15,
    rating: 4.9,
    reviewsCount: 34,
    popularity: 89,
    date: "2025-03-22",
    badge: "Сытный завтрак",
    image: "images/image_8.jpeg",
    description: "Хрустящий цельнозерновой тост с авокадо, свежими овощами и глазуньей.",
    ingredients: [
      { name: "Цельнозерновой хлеб", amount: 2, unit: "ломтика" },
      { name: "Авокадо", amount: 1, unit: "шт." },
      { name: "Яйца", amount: 2, unit: "шт." },
      { name: "Помидор", amount: 1, unit: "шт." },
      { name: "Листья салата", amount: 30, unit: "г" },
      { name: "Лимонный сок", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Подрумяньте хлеб в тостере или на сухой сковороде.",
      "Разомните мякоть авокадо с лимонным соком, солью и перцем.",
      "Приготовьте глазунью на разогретой сковороде.",
      "Намажьте тост авокадо, добавьте листья салата и ломтики помидора. Сверху выложите яйцо."
    ],
    reviews: []
  },
  {
    id: "chicken-quinoa-salad",
    title: "Салат-боул с курицей и киноа",
    category: "Главные блюда",
    cuisine: "США",
    ingredient: "Курица",
    time: 30,
    rating: 4.8,
    reviewsCount: 28,
    popularity: 82,
    date: "2025-03-23",
    badge: "Сбалансированный обед",
    image: "images/image_9.jpeg",
    description: "Боул с нежной курицей, киноа, авокадо и свежими овощами на подушке из зелени.",
    ingredients: [
      { name: "Куриное филе", amount: 300, unit: "г" },
      { name: "Киноа", amount: 120, unit: "г" },
      { name: "Авокадо", amount: 1, unit: "шт." },
      { name: "Помидоры черри", amount: 150, unit: "г" },
      { name: "Огурец", amount: 1, unit: "шт." },
      { name: "Листья салата", amount: 80, unit: "г" },
      { name: "Оливковое масло", amount: 1, unit: "ст. л." }
    ],
    steps: [
      "Промойте киноа и отварите согласно инструкции на упаковке, затем остудите.",
      "Посолите куриное филе и обжарьте на сковороде до готовности. Нарежьте ломтиками.",
      "Нарежьте авокадо и огурец, черри разрежьте пополам.",
      "Разложите по мискам салат, киноа, курицу и овощи. Заправьте оливковым маслом."
    ],
    reviews: []
  },
  {
    id: "chicken-rice-plate",
    title: "Курица с рисом и овощами",
    category: "Главные блюда",
    cuisine: "США",
    ingredient: "Курица",
    time: 40,
    rating: 4.8,
    reviewsCount: 31,
    popularity: 80,
    date: "2025-03-24",
    badge: "Домашний обед",
    image: "images/image_10.jpeg",
    description: "Сочная куриная грудка с рисом, запечённым картофелем и брокколи.",
    ingredients: [
      { name: "Куриное филе", amount: 350, unit: "г" },
      { name: "Рис", amount: 150, unit: "г" },
      { name: "Картофель", amount: 300, unit: "г" },
      { name: "Брокколи", amount: 200, unit: "г" },
      { name: "Оливковое масло", amount: 2, unit: "ст. л." },
      { name: "Паприка", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Разогрейте духовку до 210 °C. Нарежьте картофель дольками, перемешайте с маслом, солью и паприкой.",
      "Запекайте картофель около 30 минут, один раз перевернув.",
      "Отварите рис. Брокколи приготовьте на пару или отварите до мягкости.",
      "Посолите курицу и обжарьте на сковороде до золотистой корочки и полной готовности внутри. Подавайте с гарниром."
    ],
    reviews: []
  },
  {
    id: "chicken-burrito",
    title: "Буррито с курицей",
    category: "Главные блюда",
    cuisine: "Мексика",
    ingredient: "Курица",
    time: 30,
    rating: 4.9,
    reviewsCount: 42,
    popularity: 86,
    date: "2025-03-25",
    badge: "Удобно взять с собой",
    image: "images/image_11.jpeg",
    description: "Тёплая тортилья с пряной курицей, овощами и нежным соусом.",
    ingredients: [
      { name: "Куриное филе", amount: 300, unit: "г" },
      { name: "Пшеничные тортильи", amount: 2, unit: "шт." },
      { name: "Помидор", amount: 1, unit: "шт." },
      { name: "Красный лук", amount: 0.5, unit: "шт." },
      { name: "Листья салата", amount: 50, unit: "г" },
      { name: "Сметана", amount: 3, unit: "ст. л." },
      { name: "Паприка", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Нарежьте курицу полосками, приправьте паприкой, солью и перцем.",
      "Обжарьте курицу на растительном масле до готовности и румяной корочки.",
      "Нарежьте помидор и красный лук, смешайте сметану с щепоткой соли.",
      "Выложите на тортильи салат, курицу и овощи, добавьте соус. Подверните края и плотно сверните буррито."
    ],
    reviews: []
  },
  {
    id: "beef-tacos",
    title: "Тако с пряной говядиной",
    category: "Главные блюда",
    cuisine: "Мексика",
    ingredient: "Говядина",
    time: 25,
    rating: 4.8,
    reviewsCount: 37,
    popularity: 83,
    date: "2025-03-26",
    badge: "Яркий вкус",
    image: "images/image_12.jpeg",
    description: "Хрустящие тако с ароматной говядиной, свежими овощами и сметанным соусом.",
    ingredients: [
      { name: "Говяжий фарш", amount: 300, unit: "г" },
      { name: "Кукурузные лепёшки для тако", amount: 6, unit: "шт." },
      { name: "Помидоры", amount: 2, unit: "шт." },
      { name: "Салат айсберг", amount: 100, unit: "г" },
      { name: "Тёртый сыр", amount: 80, unit: "г" },
      { name: "Сметана", amount: 3, unit: "ст. л." },
      { name: "Паприка", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Обжарьте фарш на разогретой сковороде, разбивая комочки лопаткой.",
      "Добавьте паприку, соль и перец. Готовьте до полной готовности мяса.",
      "Нарежьте помидоры и салат, слегка подогрейте лепёшки для тако.",
      "Наполните лепёшки фаршем и овощами, добавьте сыр и сметану."
    ],
    reviews: []
  },
  {
    id: "lasagna",
    title: "Домашняя лазанья с мясным соусом",
    category: "Главные блюда",
    cuisine: "Италия",
    ingredient: "Говядина",
    time: 75,
    rating: 4.9,
    reviewsCount: 46,
    popularity: 88,
    date: "2025-03-27",
    badge: "Семейный ужин",
    image: "images/image_13.jpeg",
    description: "Слои пасты, насыщенного мясного соуса и расплавленного сыра — классика для уютного ужина.",
    ingredients: [
      { name: "Листы для лазаньи", amount: 250, unit: "г" },
      { name: "Говяжий фарш", amount: 400, unit: "г" },
      { name: "Томаты в собственном соку", amount: 400, unit: "г" },
      { name: "Моцарелла", amount: 200, unit: "г" },
      { name: "Пармезан", amount: 60, unit: "г" },
      { name: "Лук", amount: 1, unit: "шт." },
      { name: "Молоко", amount: 400, unit: "мл" },
      { name: "Сливочное масло", amount: 30, unit: "г" },
      { name: "Пшеничная мука", amount: 30, unit: "г" }
    ],
    steps: [
      "Мелко нарежьте лук и обжарьте до мягкости. Добавьте фарш и готовьте до изменения цвета.",
      "Добавьте томаты, соль и перец. Тушите мясной соус 20 минут.",
      "Для соуса бешамель растопите сливочное масло, вмешайте муку и постепенно влейте молоко, постоянно помешивая до загустения.",
      "Выложите в форму слоями мясной соус, листы лазаньи и бешамель. Повторите слои, сверху добавьте моцареллу и пармезан.",
      "Запекайте при 180 °C около 35 минут. Перед нарезкой дайте лазанье постоять 10 минут."
    ],
    reviews: []
  },
  {
    id: "fruit-bowl",
    title: "Фруктовая тарелка с манго и киви",
    category: "Завтраки",
    cuisine: "Международная",
    ingredient: "Фрукты",
    time: 10,
    rating: 4.7,
    reviewsCount: 19,
    popularity: 75,
    date: "2025-03-28",
    badge: "Свежий перекус",
    image: "images/image_14.jpeg",
    description: "Яркая тарелка из сочного манго, киви и клубники — лёгкое начало дня или десерт.",
    ingredients: [
      { name: "Манго", amount: 1, unit: "шт." },
      { name: "Киви", amount: 3, unit: "шт." },
      { name: "Клубника", amount: 200, unit: "г" },
      { name: "Мёд", amount: 1, unit: "ч. л." },
      { name: "Лимонный сок", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Вымойте клубнику и обсушите. Очистите киви и манго.",
      "Нарежьте фрукты ломтиками или небольшими кусочками.",
      "Разложите фрукты на тарелке и по желанию слегка сбрызните смесью мёда и лимонного сока."
    ],
    reviews: []
  },
  {
    id: "sesame-chicken",
    title: "Курица в кисло-сладком соусе",
    category: "Главные блюда",
    cuisine: "Китай",
    ingredient: "Курица",
    time: 35,
    rating: 4.8,
    reviewsCount: 33,
    popularity: 81,
    date: "2025-03-29",
    badge: "В азиатском стиле",
    image: "images/image_15.jpeg",
    description: "Нежные кусочки курицы в блестящем кисло-сладком соусе с кунжутом и зелёным луком.",
    ingredients: [
      { name: "Куриное филе", amount: 400, unit: "г" },
      { name: "Кукурузный крахмал", amount: 3, unit: "ст. л." },
      { name: "Соевый соус", amount: 3, unit: "ст. л." },
      { name: "Мёд", amount: 2, unit: "ст. л." },
      { name: "Томатный соус", amount: 2, unit: "ст. л." },
      { name: "Рисовый уксус", amount: 1, unit: "ст. л." },
      { name: "Кунжут", amount: 1, unit: "ч. л." },
      { name: "Зелёный лук", amount: 2, unit: "пера" }
    ],
    steps: [
      "Нарежьте курицу кусочками и слегка обваляйте в крахмале.",
      "Обжарьте курицу на растительном масле до золотистой корочки и полной готовности.",
      "Смешайте соевый соус, мёд, томатный соус и рисовый уксус. Влейте смесь к курице.",
      "Готовьте, помешивая, пока соус не загустеет и не покроет курицу. Подавайте с кунжутом и зелёным луком."
    ],
    reviews: []
  },
  {
    id: "strawberry-sandwich",
    title: "Сэндвичи с клубникой и сливками",
    category: "Десерты",
    cuisine: "Япония",
    ingredient: "Клубника",
    time: 20,
    rating: 4.9,
    reviewsCount: 24,
    popularity: 79,
    date: "2025-03-30",
    badge: "Нежный десерт",
    image: "images/image_16.jpeg",
    description: "Мягкий молочный хлеб, воздушные сливки и сочная клубника в японском стиле.",
    ingredients: [
      { name: "Молочный хлеб", amount: 4, unit: "ломтика" },
      { name: "Сливки 33%", amount: 200, unit: "мл" },
      { name: "Клубника", amount: 200, unit: "г" },
      { name: "Сахарная пудра", amount: 1, unit: "ст. л." },
      { name: "Ванильный экстракт", amount: 0.5, unit: "ч. л." }
    ],
    steps: [
      "Охладите сливки и взбейте их с сахарной пудрой и ванилью до устойчивых пиков.",
      "Вымойте клубнику и тщательно обсушите, удалите листочки.",
      "Намажьте хлеб толстым слоем сливок, выложите целые ягоды и покройте ещё одним слоем крема.",
      "Накройте вторым ломтиком хлеба и аккуратно обрежьте корочки. Охладите и разрежьте сэндвичи."
    ],
    reviews: []
  },
  {
    id: "fruit-skewers",
    title: "Фруктовые шашлычки",
    category: "Десерты",
    cuisine: "Международная",
    ingredient: "Фрукты",
    time: 15,
    rating: 4.7,
    reviewsCount: 17,
    popularity: 73,
    date: "2025-03-31",
    badge: "Яркая подача",
    image: "images/image_17.jpeg",
    description: "Разноцветные фруктовые шашлычки с цитрусами, виноградом и ягодами.",
    ingredients: [
      { name: "Мандарины", amount: 2, unit: "шт." },
      { name: "Клубника", amount: 150, unit: "г" },
      { name: "Зелёный виноград", amount: 150, unit: "г" },
      { name: "Голубика", amount: 80, unit: "г" },
      { name: "Мёд", amount: 1, unit: "ст. л." },
      { name: "Лимонный сок", amount: 1, unit: "ч. л." }
    ],
    steps: [
      "Вымойте и обсушите фрукты и ягоды. Мандарины очистите и разделите на дольки.",
      "Нанижите фрукты и ягоды на небольшие шпажки, чередуя цвета.",
      "По желанию смешайте мёд с лимонным соком и подайте как лёгкий соус."
    ],
    reviews: []
  },
  {
    id: "strawberry-crepes",
    title: "Крепы с клубникой и шоколадом",
    category: "Завтраки",
    cuisine: "Франция",
    ingredient: "Клубника",
    time: 35,
    rating: 4.9,
    reviewsCount: 39,
    popularity: 85,
    date: "2025-04-01",
    badge: "Сладкое утро",
    image: "images/image_18.jpeg",
    description: "Тонкие французские блинчики с клубникой и растопленным шоколадом.",
    ingredients: [
      { name: "Пшеничная мука", amount: 150, unit: "г" },
      { name: "Молоко", amount: 300, unit: "мл" },
      { name: "Яйца", amount: 2, unit: "шт." },
      { name: "Сахар", amount: 1, unit: "ст. л." },
      { name: "Сливочное масло", amount: 30, unit: "г" },
      { name: "Клубника", amount: 200, unit: "г" },
      { name: "Шоколад", amount: 80, unit: "г" }
    ],
    steps: [
      "Взбейте яйца с молоком и сахаром. Постепенно всыпьте муку и перемешайте до однородности.",
      "Добавьте растопленное сливочное масло и дайте тесту постоять 10 минут.",
      "Жарьте тонкие крепы на слегка смазанной сковороде по 1–2 минуты с каждой стороны.",
      "Растопите шоколад, нарежьте клубнику. Подавайте крепы с ягодами и шоколадом."
    ],
    reviews: []
  },
  {
    id: "korean-corn-dog",
    title: "Корн-доги с картофельной корочкой",
    category: "Главные блюда",
    cuisine: "Корея",
    ingredient: "Сосиски",
    time: 40,
    rating: 4.8,
    reviewsCount: 21,
    popularity: 77,
    date: "2025-04-02",
    badge: "Хрустящий перекус",
    image: "images/image_19.jpeg",
    description: "Сосиски и сыр в пышном тесте с хрустящей картофельной корочкой.",
    ingredients: [
      { name: "Сосиски", amount: 4, unit: "шт." },
      { name: "Моцарелла", amount: 200, unit: "г" },
      { name: "Пшеничная мука", amount: 180, unit: "г" },
      { name: "Молоко", amount: 150, unit: "мл" },
      { name: "Яйцо", amount: 1, unit: "шт." },
      { name: "Сахар", amount: 1, unit: "ст. л." },
      { name: "Картофель", amount: 200, unit: "г" },
      { name: "Панировочные сухари", amount: 80, unit: "г" }
    ],
    steps: [
      "Нарежьте сосиски и моцареллу крупными кусочками, нанижите на шпажки и обсушите.",
      "Смешайте муку, сахар, щепотку соли, молоко и яйцо до густого однородного теста.",
      "Нарежьте картофель очень мелкими кубиками. Обмакните шпажки в тесто, затем обваляйте в картофеле и сухарях.",
      "Обжарьте во фритюре при 170 °C до золотистой корочки и полной готовности теста. Перед подачей удалите шпажки."
    ],
    reviews: []
  }
];

const grid = document.querySelector("#recipeGrid");
const searchInput = document.querySelector("#searchInput");
const cuisineFilter = document.querySelector("#cuisineFilter");
const ingredientFilter = document.querySelector("#ingredientFilter");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const detailElement = document.querySelector("#recipeDetail");
const backToTop = document.querySelector("#backToTop");
const customReviews = loadSavedReviews();
let activeCategory = document.body.dataset.category || "Все рецепты";
let activeSort = "popular";
let activeRecipe = null;
let servings = 2;

if (backToTop) {
  const updateBackToTopVisibility = () => {
    backToTop.hidden = window.scrollY < 320;
  };

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTop.addEventListener("click", () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function loadSavedReviews() {
  try {
    const storedReviews = JSON.parse(localStorage.getItem("vkusno-doma-reviews") || "{}");
    if (!storedReviews || Array.isArray(storedReviews) || typeof storedReviews !== "object") {
      return {};
    }
    return storedReviews;
  } catch (error) {
    console.error("Не удалось загрузить сохранённые отзывы.", error);
    return {};
  }
}

function getReviews(recipe) {
  return [...recipe.reviews, ...(customReviews[recipe.id] || [])];
}

function getRecipeRating(recipe) {
  const addedReviews = customReviews[recipe.id] || [];
  if (!addedReviews.length) return recipe.rating;
  const reviewTotal = addedReviews.reduce((total, review) => total + review.rating, 0);
  return (recipe.rating * recipe.reviewsCount + reviewTotal) / (recipe.reviewsCount + addedReviews.length);
}

function getTotalReviewCount(recipe) {
  return recipe.reviewsCount + (customReviews[recipe.id] || []).length;
}

function populateFilters() {
  const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))].sort((a, b) => a.localeCompare(b, "ru"));
  const ingredients = [...new Set(recipes.map((recipe) => recipe.ingredient))].sort((a, b) => a.localeCompare(b, "ru"));
  cuisineFilter.innerHTML = '<option value="">Любая страна</option>' + cuisines.map((cuisine) =>
    `<option value="${escapeHtml(cuisine)}">${escapeHtml(cuisine)}</option>`
  ).join("");
  ingredientFilter.innerHTML = '<option value="">Любой ингредиент</option>' + ingredients.map((ingredient) =>
    `<option value="${escapeHtml(ingredient)}">${escapeHtml(ingredient)}</option>`
  ).join("");
}

function getVisibleRecipes() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  return recipes.filter((recipe) => {
    const matchesCategory = activeCategory === "Все рецепты" || recipe.category === activeCategory;
    const matchesCuisine = !cuisineFilter.value || recipe.cuisine === cuisineFilter.value;
    const matchesIngredient = !ingredientFilter.value || recipe.ingredient === ingredientFilter.value;
    const searchableText = [
      recipe.title,
      recipe.description,
      recipe.cuisine,
      recipe.ingredient,
      recipe.category
    ].join(" ").toLocaleLowerCase("ru");
    return matchesCategory && matchesCuisine && matchesIngredient && searchableText.includes(query);
  }).sort((a, b) => activeSort === "popular"
    ? b.popularity - a.popularity
    : new Date(b.date).getTime() - new Date(a.date).getTime());
}

function renderRecipes() {
  const visibleRecipes = getVisibleRecipes();
  const hasFilters = activeCategory !== "Все рецепты"
    || searchInput.value
    || cuisineFilter.value
    || ingredientFilter.value;
  const sectionTitle = document.querySelector("#recipeSectionTitle");
  if (sectionTitle) {
    sectionTitle.textContent = hasFilters
      ? activeCategory === "Все рецепты" ? "Найденные рецепты" : activeCategory
      : grid.dataset.title || "Рецепты для вдохновения";
  }
  resultsCount.textContent = `${visibleRecipes.length} ${getRecipeCountWord(visibleRecipes.length)}`;
  grid.classList.toggle("d-none", visibleRecipes.length === 0);
  emptyState.classList.toggle("d-none", visibleRecipes.length !== 0);
  const isFiltering = searchInput.value || cuisineFilter.value || ingredientFilter.value;
  const limit = isFiltering ? visibleRecipes.length : Number(grid.dataset.limit) || visibleRecipes.length;
  grid.innerHTML = visibleRecipes.slice(0, limit).map((recipe) => {
    const rating = getRecipeRating(recipe).toFixed(1);
    return `
      <div class="col-12 col-sm-6 col-lg-4">
        <article
          class="recipe-card"
          data-recipe-url="recipe.html?id=${encodeURIComponent(recipe.id)}"
          tabindex="0"
          role="link"
          aria-label="Открыть рецепт: ${escapeHtml(recipe.title)}"
        >
          <div class="recipe-image-wrap">
            <img
              class="recipe-image"
              src="${escapeHtml(recipe.image)}"
              alt="${escapeHtml(recipe.title)}"
              loading="lazy"
            >
            <span class="recipe-badge">${escapeHtml(recipe.badge)}</span>
            <span class="favorite-button" aria-hidden="true"><i class="bi bi-heart"></i></span>
          </div>
          <div class="recipe-card-body">
            <div class="recipe-card-topline">
              <span>${escapeHtml(recipe.cuisine)} · ${escapeHtml(recipe.category)}</span>
              <span class="recipe-rating"><i class="bi bi-star-fill"></i>${rating}</span>
            </div>
            <h3 class="recipe-title">
              <a href="recipe.html?id=${encodeURIComponent(recipe.id)}">${escapeHtml(recipe.title)}</a>
            </h3>
            <p class="recipe-description">${escapeHtml(recipe.description)}</p>
            <div class="recipe-card-footer">
              <span><i class="bi bi-clock"></i>${recipe.time} мин</span>
              <span><i class="bi bi-chat-dots"></i>${getTotalReviewCount(recipe)} отзывов</span>
              <a
                class="recipe-open"
                href="recipe.html?id=${encodeURIComponent(recipe.id)}"
              >
                Рецепт <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join("");
}

function getRecipeCountWord(count) {
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 14) return "рецептов";
  const mod10 = count % 10;
  if (mod10 === 1) return "рецепт";
  if (mod10 >= 2 && mod10 <= 4) return "рецепта";
  return "рецептов";
}

function formatAmount(amount) {
  if (Number.isInteger(amount)) return String(amount);
  return amount.toFixed(1).replace(".", ",");
}

function renderIngredients() {
  const factor = servings / 2;
  return activeRecipe.ingredients.map((ingredient) => `
    <li>
      <span>${escapeHtml(ingredient.name)}</span>
      <span class="ingredient-amount">
        ${formatAmount(ingredient.amount * factor)} ${escapeHtml(ingredient.unit)}
      </span>
    </li>
  `).join("");
}

function renderReviews() {
  const reviews = getReviews(activeRecipe);
  const average = getRecipeRating(activeRecipe);
  const reviewItems = reviews.map((review) => `
    <div class="review-item">
      <div class="review-item-top">
        <strong>${escapeHtml(review.name)}</strong>
        <span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
      </div>
      <p>${escapeHtml(review.text)}</p>
    </div>
  `).join("");
  return `
    <div class="review-summary">
      <strong>${average.toFixed(1)}</strong>
      <span>${"★".repeat(Math.round(average))}${"☆".repeat(5 - Math.round(average))}</span>
      <small class="text-secondary">
        ${getTotalReviewCount(activeRecipe)} ${getReviewWord(getTotalReviewCount(activeRecipe))}
      </small>
    </div>
    <div>${reviewItems || '<p class="text-secondary small">Пока нет отзывов. Будьте первым!</p>'}</div>
  `;
}

function getReviewWord(count) {
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 14) return "отзывов";
  const mod10 = count % 10;
  if (mod10 === 1) return "отзыв";
  if (mod10 >= 2 && mod10 <= 4) return "отзыва";
  return "отзывов";
}

function openRecipe(recipeId) {
  activeRecipe = recipes.find((recipe) => recipe.id === recipeId);
  if (!detailElement) return;
  if (!activeRecipe) {
    detailElement.innerHTML = `
      <div class="empty-state">
        <h1>Рецепт не найден</h1>
        <p>Похоже, такой страницы нет. Вернитесь к списку рецептов.</p>
        <a class="btn btn-main" href="recipes.html">Все рецепты</a>
      </div>
    `;
    return;
  }
  servings = 2;
  detailElement.innerHTML = `
    <img class="modal-recipe-image" src="${escapeHtml(activeRecipe.image)}" alt="${escapeHtml(activeRecipe.title)}">
    <div class="modal-recipe-header">
      <span class="eyebrow">${escapeHtml(activeRecipe.cuisine)} · ${escapeHtml(activeRecipe.category)}</span>
      <h2 id="modalRecipeTitle">${escapeHtml(activeRecipe.title)}</h2>
      <p class="modal-recipe-description">${escapeHtml(activeRecipe.description)}</p>
      <div class="modal-meta">
        <span><i class="bi bi-clock"></i>${activeRecipe.time} минут</span>
        <span>
          <i class="bi bi-star-fill"></i>
          ${getRecipeRating(activeRecipe).toFixed(1)} (${getTotalReviewCount(activeRecipe)} отзывов)
        </span>
        <span><i class="bi bi-egg"></i>${escapeHtml(activeRecipe.ingredient)}</span>
      </div>
    </div>
    <div class="row g-5">
      <div class="col-12 col-lg-5">
        <h3 class="modal-section-title">Ингредиенты</h3>
        <div class="servings-control">
          <span>Количество порций</span>
          <button
            class="servings-button"
            type="button"
            data-servings="-1"
            aria-label="Уменьшить количество порций"
          >
            <i class="bi bi-dash"></i>
          </button>
          <strong class="servings-count" id="servingsCount">${servings}</strong>
          <button
            class="servings-button"
            type="button"
            data-servings="1"
            aria-label="Увеличить количество порций"
          >
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <ul class="ingredient-list" id="ingredientList">${renderIngredients()}</ul>
      </div>
      <div class="col-12 col-lg-7">
        <h3 class="modal-section-title">Как приготовить</h3>
        <ol class="recipe-steps">${activeRecipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </div>
      <div class="col-12">
        <div class="row g-4">
          <div class="col-12 col-lg-7">
            <h3 class="modal-section-title">Отзывы о рецепте</h3>
            <div id="reviewList">${renderReviews()}</div>
          </div>
          <div class="col-12 col-lg-5">
            <form class="review-form" id="reviewForm">
              <h3 class="h5 mb-3">Поделитесь впечатлением</h3>
              <div class="mb-3">
                <label class="form-label" for="reviewName">Ваше имя</label>
                <input class="form-control" id="reviewName" name="name" maxlength="40" required>
              </div>
              <div class="mb-3">
                <label class="form-label" for="reviewRating">Оценка</label>
                <select class="form-select" id="reviewRating" name="rating">
                  <option value="5">5 — очень вкусно</option>
                  <option value="4">4 — понравилось</option>
                  <option value="3">3 — неплохо</option>
                  <option value="2">2 — не моё</option>
                  <option value="1">1 — не понравилось</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label" for="reviewText">Ваш отзыв</label>
                <textarea
                  class="form-control"
                  id="reviewText"
                  name="text"
                  rows="3"
                  maxlength="500"
                  required
                ></textarea>
              </div>
              <button class="btn btn-main btn-sm" type="submit">Опубликовать отзыв</button>
              <div class="review-message mt-2" id="reviewMessage" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateServings(change) {
  servings = Math.min(12, Math.max(1, servings + change));
  document.querySelector("#servingsCount").textContent = servings;
  document.querySelector("#ingredientList").innerHTML = renderIngredients();
}

function saveReview(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const review = {
    name: String(formData.get("name")).trim(),
    rating: Number(formData.get("rating")),
    text: String(formData.get("text")).trim()
  };
  if (!review.name || !review.text || review.rating < 1 || review.rating > 5) return;
  const recipeReviews = customReviews[activeRecipe.id] || [];
  recipeReviews.push(review);
  customReviews[activeRecipe.id] = recipeReviews;
  try {
    localStorage.setItem("vkusno-doma-reviews", JSON.stringify(customReviews));
  } catch (error) {
    recipeReviews.pop();
    console.error("Не удалось сохранить отзыв.", error);
    document.querySelector("#reviewMessage").textContent =
      "Не удалось сохранить отзыв. Проверьте настройки браузера "
      + "и попробуйте ещё раз.";
    return;
  }
  document.querySelector("#reviewList").innerHTML = renderReviews();
  document.querySelector("#reviewMessage").textContent = "Спасибо! Ваш отзыв опубликован.";
  form.reset();
  if (grid) renderRecipes();
}

function resetFilters() {
  activeCategory = document.body.dataset.category || "Все рецепты";
  searchInput.value = "";
  cuisineFilter.value = "";
  ingredientFilter.value = "";
  renderRecipes();
}

if (grid) {
  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".recipe-card");
    if (!card || event.target.closest("a, button, input, select, textarea")) return;
    window.location.href = card.dataset.recipeUrl;
  });
  grid.addEventListener("keydown", (event) => {
    const card = event.target.closest(".recipe-card");
    if (!card || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    window.location.href = card.dataset.recipeUrl;
  });
  populateFilters();
  document.querySelector("#filterForm").addEventListener("submit", (event) => event.preventDefault());
  searchInput.addEventListener("input", renderRecipes);
  cuisineFilter.addEventListener("change", renderRecipes);
  ingredientFilter.addEventListener("change", renderRecipes);
  document.querySelector("#resetFilters").addEventListener("click", resetFilters);
  document.querySelector("#emptyReset").addEventListener("click", resetFilters);
  document.querySelectorAll(".recipe-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort;
      document.querySelectorAll(".recipe-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
      renderRecipes();
    });
  });
  renderRecipes();
}

if (detailElement) {
  openRecipe(new URLSearchParams(window.location.search).get("id"));
  detailElement.addEventListener("click", (event) => {
    const servingButton = event.target.closest("[data-servings]");
    if (servingButton) updateServings(Number(servingButton.dataset.servings));
  });
  detailElement.addEventListener("submit", (event) => {
    if (event.target.id === "reviewForm") saveReview(event);
  });
}
