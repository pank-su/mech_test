window.MECH_TESTS = [
  {
    id: "test1",
    title: "Тест 1",
    questions: [
      {
        id: "test1-001",
        source: "тест1.pdf",
        page: 1,
        type: "multiple",
        text: "Угол наклона кривошипа длиной OA = 1 м меняется по закону φ = πt. В момент времени t = 1 с проекция ускорения на ось OX точки A равна",
        options: ["aₓ = 2π²", "aₓ = 3π²", "aₓ = π² + 1", "aₓ = π² - 1", "aₓ = π²"],
        correct: [4],
        media: "assets/question-media/test1-001.png",
        pageImage: "assets/pdf-pages/test1-page-01.png"
      },
      {
        id: "test1-002",
        source: "тест1.pdf",
        page: 2,
        type: "single",
        text: "Определить ускорение точки B в момент времени, когда угол φ = 60°, если длина |OA| = |AB| = 0,2 м, а закон изменения угла φ = 3t.",
        options: ["5,1", "-1,8", "0", "37,6"],
        correct: [1],
        media: "assets/question-media/test1-002.png",
        pageImage: "assets/pdf-pages/test1-page-02.png"
      },
      {
        id: "test1-003",
        source: "тест1.pdf",
        page: 3,
        type: "single",
        text: "На рисунке изображен способ",
        options: ["нахождения МЦС", "вращения твердого тела вокруг оси", "задания движения кривошипа", "задания свободного движения"],
        correct: [0],
        media: "assets/question-media/test1-003.png",
        pageImage: "assets/pdf-pages/test1-page-03.png"
      },
      {
        id: "test1-004",
        source: "тест1.pdf",
        page: 4,
        type: "single",
        text: "Диск радиуса R катится по горизонтальной поверхности без проскальзывания со скоростью оси v₀. Скорость точки A равна",
        options: ["Vₐ = V₀", "Vₐ = 3V₀", "Vₐ = RV₀", "Vₐ = 2V₀", "Vₐ = 2RV₀"],
        correct: [3],
        media: "assets/question-media/test1-004.png",
        pageImage: "assets/pdf-pages/test1-page-04.png"
      },
      {
        id: "test1-005",
        source: "тест1.pdf",
        page: 5,
        type: "single",
        text: "Задавая движение плоской фигуры, полученной сечением тела, мы задаем",
        options: ["пространственное движение", "вращательное движение", "плоское движение", "сферическое движение"],
        correct: [2],
        media: "assets/question-media/test1-005.png",
        pageImage: "assets/pdf-pages/test1-page-05.png"
      },
      {
        id: "test1-007",
        source: "тест1.pdf",
        page: 7,
        type: "single",
        text: "Два шкива радиуса 3r и r соединены ременной передачей. Линейные скорости точек на поверхности шкивов:",
        options: ["относятся как 3 к π", "относятся как 3π к 1", "относятся как 3 к 1", "равны", "относятся как 1 к 3"],
        correct: [3],
        media: "assets/question-media/test1-007.png",
        pageImage: "assets/pdf-pages/test1-page-07.png"
      },
      {
        id: "test1-008",
        source: "тест1.pdf",
        page: 8,
        type: "single",
        text: "Данная система уравнений",
        formula: "ωₓ = ψ̇ sinθ sinφ + θ̇ cosφ; ωᵧ = ψ̇ sinθ cosφ − θ̇ sinφ; ωᵣ = ψ̇ cosθ + φ̇",
        options: ["называется уравнениями вращательного движения тела вокруг неподвижной оси", "представляет описание свободного движения тела", "представляет уравнения плоского движения", "называется уравнениями Эйлера"],
        correct: [3],
        media: "assets/question-media/test1-008.png",
        pageImage: "assets/pdf-pages/test1-page-08.png"
      },
      {
        id: "test1-009",
        source: "тест1.pdf",
        page: 9,
        type: "single",
        text: "Мгновенная скорость точки при ее криволинейном движении направлена",
        options: ["по касательной к траектории точки", "по внешней нормали к траектории", "в сторону выпуклости траектории", "по внутренней нормали к траектории", "в сторону вогнутости траектории"],
        correct: [0],
        pageImage: "assets/pdf-pages/test1-page-09.png"
      },
      {
        id: "test1-010",
        source: "тест1.pdf",
        page: 10,
        type: "single",
        text: "Диск катится без скольжения по плоскости с постоянной скоростью Vc. Что можно сказать о мгновенном центре ускорений и мгновенном центре скоростей?",
        formula: "a⃗c = dV⃗c / dt, V⃗c = const",
        options: ["не определить мгновенный центр ускорений (МЦУ) и мгновенный центр скоростей (МЦС)", "центр диска C - это мгновенный центр ускорений (МЦУ), а мгновенный центр скоростей (МЦС) не определить", "точка контакта с поверхностью P - мгновенный центр скоростей (МЦС), мгновенный центр ускорений (МЦУ) не определить", "центр диска C - это мгновенный центр ускорений (МЦУ), а точка контакта с поверхностью P - мгновенный центр скоростей (МЦС)"],
        correct: [3],
        media: "assets/question-media/test1-010.png",
        pageImage: "assets/pdf-pages/test1-page-10.png"
      },
      {
        id: "test1-011",
        source: "тест1.pdf",
        page: 11,
        type: "single",
        text: "Определить модуль угловой скорости сферического движения тела, если закон его движения задан уравнениями:",
        formula: "ψ = π sin t; θ = π cos t; φ = π",
        options: ["-9,87", "0", "5,11", "-3,14", "3,14"],
        correct: [4],
        media: "assets/question-media/test1-011.png",
        pageImage: "assets/pdf-pages/test1-page-11.png"
      },
      {
        id: "test1-012",
        source: "тест1.pdf",
        page: 12,
        type: "single",
        text: "Поступательное движение тела вместе с выбранным полюсом и его сферическое движение вокруг выбранного полюса называется",
        options: ["плоско-поступательным движением", "свободным движением", "сферическим движением", "плоским движением"],
        correct: [1],
        pageImage: "assets/pdf-pages/test1-page-12.png"
      },
      {
        id: "test1-013",
        source: "тест1.pdf",
        page: 13,
        type: "single",
        text: "Выберите выражение для определения скорости точек при плоском движении",
        options: ["v⃗B = v⃗A + ω⃗A", "v⃗B = ω⃗A × ρ⃗", "v⃗B = v⃗A", "v⃗B = v⃗A + ω⃗A × ρ⃗"],
        correct: [3],
        media: "assets/question-media/test1-013.png",
        pageImage: "assets/pdf-pages/test1-page-13.png"
      },
      {
        id: "test1-014",
        source: "тест1.pdf",
        page: 14,
        type: "single",
        text: "Определение мгновенного центра скоростей: известны направления скоростей двух точек плоской фигуры A и B.",
        options: ["на рисунке найдено правильно", "на рисунке найдено неправильно", "не хватает данных для определения МЦС", "МЦС отсутствует"],
        correct: [0],
        media: "assets/question-media/test1-014.png",
        pageImage: "assets/pdf-pages/test1-page-14.png"
      },
      {
        id: "test1-015",
        source: "тест1.pdf",
        page: 15,
        type: "single",
        text: "Величина ω²d характеризует _____ ускорение",
        options: ["полное сферическое", "вращательное", "свободное", "осестремительное"],
        correct: [3],
        pageImage: "assets/pdf-pages/test1-page-15.png"
      }
    ]
  },
  {
    id: "test2",
    title: "Тест 2",
    questions: [
      {
        id: "test2-001",
        source: "тест2.pdf",
        page: 1,
        type: "single",
        text: "Выражение определяет",
        formula: "T = 1/2 ∫W V² dm",
        options: ["кинетическую энергию для твердого тела с непрерывным распределением массы внутри заданного объема W", "изменение массы для сферы с непрерывным распределением массы внутри заданного объема W", "условие равенства кинетической энергии", "интегральную скорость движения"],
        correct: [0],
        media: "assets/question-media/test2-001.png",
        pageImage: "assets/pdf-pages/test2-page-01.png"
      },
      {
        id: "test2-002",
        source: "тест2.pdf",
        page: 2,
        type: "single",
        text: "Рассмотрим неподвижную СК OXYZ и подвижную СК Axyz, движение которой задано относительно неподвижной СК с помощью траектории движения ее начала A: XA(t), YA(t), ZA(t). F - равнодействующая активных сил, R - равнодействующая реакций связей. Основное уравнение динамики в неподвижной системе координат имеет вид:",
        options: ["m a⃗ = F⃗ + R⃗", "dv⃗/dt = a⃗", "dr⃗/dt = a⃗", "m a⃗ = F⃗ + R⃗ + J⃗e + J⃗c"],
        correct: [0],
        media: "assets/question-media/test2-002.png",
        pageImage: "assets/pdf-pages/test2-page-02.png"
      },
      {
        id: "test2-003",
        source: "тест2.pdf",
        page: 3,
        type: "single",
        text: "Поступательное движение тела вместе с выбранным полюсом и его сферическое движение вокруг выбранного полюса называется",
        options: ["свободным движением", "плоским движением", "сферическим движением", "плоско-поступательным движением"],
        correct: [0],
        pageImage: "assets/pdf-pages/test2-page-03.png"
      },
      {
        id: "test2-004",
        source: "тест2.pdf",
        page: 4,
        type: "single",
        text: "Тело движется вниз по гладкой плоскости, которая наклонена под углом α = 30° к горизонту. Ускорение тела равно",
        options: ["a = -g", "a = 2g", "a = 0,5g", "a = g", "a = 1,5g"],
        correct: [2],
        pageImage: "assets/pdf-pages/test2-page-04.png"
      },
      {
        id: "test2-005",
        source: "тест2.pdf",
        page: 5,
        type: "single",
        text: "Два шкива радиуса 3r и r соединены ременной передачей. Линейные скорости точек на поверхности шкивов:",
        options: ["равны", "относятся как 3 к π", "относятся как 3π к 1", "относятся как 3 к 1", "относятся как 1 к 3"],
        correct: [0],
        media: "assets/question-media/test2-005.png",
        pageImage: "assets/pdf-pages/test2-page-05.png"
      },
      {
        id: "test2-006",
        source: "тест2.pdf",
        page: 6,
        type: "single",
        text: "Если проекция главного вектора всех внешних сил, приложенных к системе, на некоторую неподвижную ось равна нулю, то проекция вектора количества движения системы на эту ось остается постоянной. Данное утверждение является",
        options: ["формулировкой обратной задачи динамики", "формулировкой основной задачи динамики", "одной из формулировок закона сохранения количества движения механической системы", "одним из определений главного вектора сил"],
        correct: [2],
        pageImage: "assets/pdf-pages/test2-page-06.png"
      },
      {
        id: "test2-007",
        source: "тест2.pdf",
        page: 7,
        type: "single",
        text: "На тело действует постоянная по величине и направлению сила F = 20 Н. Определить работу этой силы при перемещении тела из положения x = 0 в положение x = 1 м",
        options: ["A = 25 Дж", "A = 13 Дж", "A = 20 Дж", "A = 18 Дж", "A = 15 Дж"],
        correct: [2],
        pageImage: "assets/pdf-pages/test2-page-07.png"
      },
      {
        id: "test2-008",
        source: "тест2.pdf",
        page: 8,
        type: "single",
        text: "На рисунке показаны повороты вокруг оси, последний поворот - это один из углов Эйлера",
        options: ["угол нутации", "угол полюса вращения", "угол прецессии", "угол собственного вращения"],
        correct: [3],
        media: "assets/question-media/test2-008.png",
        pageImage: "assets/pdf-pages/test2-page-08.png"
      },
      {
        id: "test2-009",
        source: "тест2.pdf",
        page: 9,
        type: "single",
        text: "На тело действует постоянная по величине и направлению сила F = 20 Н. Определить работу этой силы при перемещении тела из положения x = 0 в положение x = 1 м",
        options: ["A = 25 Дж", "A = 13 Дж", "A = 20 Дж", "A = 18 Дж", "A = 15 Дж"],
        correct: [2],
        pageImage: "assets/pdf-pages/test2-page-09.png"
      },
      {
        id: "test2-010",
        source: "тест2.pdf",
        page: 10,
        type: "multiple",
        text: "Положение кривошипа определяется углом φ = 0,5t. Определить скорость ползуна B в момент времени t = 4 с, если |OA| = |AB| = 1,5 м.",
        options: ["-1,36", "16,3", "18,2", "-10,1"],
        correct: [0],
        media: "assets/question-media/test2-010.png",
        pageImage: "assets/pdf-pages/test2-page-10.png"
      },
      {
        id: "test2-011",
        source: "тест2.pdf",
        page: 11,
        type: "single",
        text: "Производная по времени от кинетической энергии МТ равна суммарной _____ всех действующих сил",
        formula: "d/dt (mv²/2) = dA/dt",
        options: ["скорости", "энергии", "мощности", "работе"],
        correct: [2],
        media: "assets/question-media/test2-011.png",
        pageImage: "assets/pdf-pages/test2-page-11.png"
      },
      {
        id: "test2-012",
        source: "тест2.pdf",
        page: 12,
        type: "single",
        text: "Перегрузка - _____ величина",
        options: ["векторная", "независимая от веса", "противоположена направлению равнодействующей", "скалярная"],
        correct: [3],
        pageImage: "assets/pdf-pages/test2-page-12.png"
      },
      {
        id: "test2-013",
        source: "тест2.pdf",
        page: 13,
        type: "single",
        text: "Если в качестве полюса движения плоской фигуры выбрать МЦС, то",
        options: ["V⃗B = P⃗B × ω⃗", "не хватает данных определить V⃗B", "необходимо знать угол наклона вектора скорости к местному горизонту", "V⃗B = ω⃗ × P⃗B"],
        correct: [3],
        media: "assets/question-media/test2-013.png",
        pageImage: "assets/pdf-pages/test2-page-13.png"
      },
      {
        id: "test2-014",
        source: "тест2.pdf",
        page: 14,
        type: "multiple",
        text: "Точка движется в пространстве по криволинейной траектории из M₀ в M₁. Вектор средней скорости направлен:",
        options: ["по касательной к траектории в точке M₁", "по хорде M₀M₁", "к центру кривизны траектории в точке M₀", "к центру кривизны траектории в точке M₁", "по касательной к траектории в точке M₀"],
        correct: [1],
        media: "assets/question-media/test2-014.png",
        pageImage: "assets/pdf-pages/test2-page-14.png"
      },
      {
        id: "test2-015",
        source: "тест2.pdf",
        page: 15,
        type: "single",
        text: "Движение точки задано в координатной форме уравнениями x = 3t, y = 9t² + 6. Уравнение траектории имеет вид:",
        options: ["y = √(9t² + (9t² + 6)²)", "y = x² + 6", "y = 3x² + 6", "y = 3x + 6", "y = 3x"],
        correct: [1],
        pageImage: "assets/pdf-pages/test2-page-15.png"
      },
      {
        id: "test2-016",
        source: "тест2.pdf",
        page: 16,
        type: "single",
        text: "_____ называется вектор, равный произведению силы на элементарный промежуток времени ее действия",
        options: ["ускорением", "количеством движения", "элементарным изменением количества движения", "элементарным импульсом силы"],
        correct: [3],
        pageImage: "assets/pdf-pages/test2-page-16.png"
      }
    ]
  }
];
