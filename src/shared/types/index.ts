export type LoginHttpResponse = {
  accessToken: string
  refreshToken: string
  applications: {
    gid: string
    organizationGid: string
    name: string
    serviceUrl: string
    url: string
    type: number
  }[]
}

export type Userinfo = {
  UserType: number
  PersonGid: string
  WorkingTel: string | null
  MobileTel: string | null
  HomeTel: string | null
  HomeAddress: string | null
  Email: string
  Birthday: string
  Gender: number
  ShortName: string
  FullName: string
  ThirdName: string
  SecondName: string
  FirstName: string
  Iin: string
  DateSynchronic: string
  PhotoUrl: string | null
  Klass: string | null
  School: string | null
  Logins: string[]
  Accesses: {
    ApplicationId: string
    RoleIds: string[]
    ApplicationType: number
    Disabled: boolean
  }[]
}

export type AdditionalUserInfo = {
  photoUrl: string
  klass: string
  school: {
    gid: string
    name: {
      kk: string
      ru: string
      en: string
    }
  }
  children: never
}

export type Schedule = {
  scheduleDays: {
    lessons: {
      number: number
      subjectName: {
        kk: string
        ru: string
        en: string
      }
      teacher: string
      classroom: string | never
      isReplacement: boolean
    }[]
    date: string
    scheduleNotWorkingDay: {
      isNotWorkingDay: boolean
      isWeekend: boolean
      isHoliday: boolean
      calendarEventName: {
        kk: string
        ru: string
        en: string
      }
    }
  }[]
}

export type Journal = [
  {
    number: 1
    subjects?: {
      id: string
      name: {
        kk: string
        ru: string
        en: string
      }
      currScore: number
      mark?: number
    }[]
  },
  {
    number: 2
    subjects?: {
      id: string
      name: {
        kk: string
        ru: string
        en: string
      }
      currScore: number
      mark?: number
    }[]
  },
  {
    number: 3
    subjects?: {
      id: string
      name: {
        kk: string
        ru: string
        en: string
      }
      currScore: number
      mark?: number
    }[]
  },
  {
    number: 4
    subjects?: {
      id: string
      name: {
        kk: string
        ru: string
        en: string
      }
      currScore: number
      mark?: number
    }[]
  },
]

export type Rubric = {
  id: string
  title: {
    kk: string
    ru: string
    en: string
  }
  mark: number
  maxMark: number
  description: {
    kk: string
    ru: string
    en: string
  }
  details: {
    name: string
    bad: string
    normal: string
    good: string
    badChecked: boolean
    normalChecked: boolean
    goodChecked: boolean
  }[]
}

export type RubricInfo = {
  sumChapterCriteria: Rubric[]
  sumQuarterCriteria: Rubric[]
}

export type ReportCard = {
  schoolYear: {
    isCurrent: boolean
    id: string
    name: {
      kk: string
      ru: string
      en: string
    }
  }
  reportCard: {
    person: {
      id: string
    }
    subject: {
      id: string
      name: {
        kk: string
        ru: string
        en: string
      }
    }
    firstPeriod?: {
      kk: string
      ru: string
      en: string
    } | null
    secondPeriod?: {
      kk: string
      ru: string
      en: string
    } | null
    thirdPeriod?: {
      kk: string
      ru: string
      en: string
    } | null
    fourthPeriod?: {
      kk: string
      ru: string
      en: string
    } | null
    firstHalfYearMark?: {
      kk: string
      ru: string
      en: string
    } | null
    secondHalfYearMark?: {
      kk: string
      ru: string
      en: string
    } | null
    yearMark?: {
      kk: string
      ru: string
      en: string
    } | null
    examMark?: {
      kk: string
      ru: string
      en: string
    } | null
    resultMark?: {
      kk: string
      ru: string
      en: string
    } | null
  }[]
}

export type Reports = ReportCard[]

export const MOCK_SCEDULE = {
  scheduleDays: [
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Химия',
            ru: 'Химия',
            en: 'Chemistry',
          },
          teacher: 'Ахмет М. Н.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Химия',
            ru: 'Химия',
            en: 'Chemistry',
          },
          teacher: 'Ахмет М. Н.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Человек. Общество. Право (Основы права)',
            ru: 'Человек. Общество. Право (Основы права)',
            en: 'Человек. Общество. Право (Основы права)',
          },
          teacher: 'Қайыржан Ә. Ж.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Человек. Общество. Право (Основы права)',
            ru: 'Человек. Общество. Право (Основы права)',
            en: 'Человек. Общество. Право (Основы права)',
          },
          teacher: 'Темиров Н. Р.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Орыс әдебиеті',
            ru: 'Русская литература',
            en: 'Russian literature',
          },
          teacher: 'Доскарина Г. М.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Орыс әдебиеті',
            ru: 'Русская литература',
            en: 'Russian literature',
          },
          teacher: 'Доскарина Г. М.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-11',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Дене шынықтыру',
            ru: 'Физическая культура',
            en: 'Physical education',
          },
          teacher: 'Нурсеитов Д. Ф.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Дене шынықтыру',
            ru: 'Физическая культура',
            en: 'Physical education',
          },
          teacher: 'Нурсеитов Д. Ф.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Информатика',
            ru: 'Информатика',
            en: 'Informatics',
          },
          teacher: 'Омаров А. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Информатика',
            ru: 'Информатика',
            en: 'Informatics',
          },
          teacher: 'Омаров А. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Дүниежүзілік тарихы',
            ru: 'Всемирная история',
            en: 'World History',
          },
          teacher: 'Питюкова О. М.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Өнер',
            ru: 'Искусство',
            en: 'Art',
          },
          teacher: 'Новосельцева Д. А.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 9,
          subjectName: {
            kk: 'Өнер',
            ru: 'Искусство',
            en: 'Art',
          },
          teacher: 'Новосельцева Д. А.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-12',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'География',
            ru: 'География',
            en: 'Geography',
          },
          teacher: 'Конкышева Н. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'География',
            ru: 'География',
            en: 'Geography',
          },
          teacher: 'Конкышева Н. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Қазақстан тарихы',
            ru: 'История Казахстана',
            en: 'History of Kazakhstan',
          },
          teacher: 'Райсбек Ү.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 9,
          subjectName: {
            kk: 'Орыс тілі',
            ru: 'Русский язык',
            en: 'Russian',
          },
          teacher: 'Осипова Н. А.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-13',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Казақ тілі және әдебиет',
            ru: 'Казахский язык и литература',
            en: 'Kazakh language and literature',
          },
          teacher: 'Ережепова А. Х.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Казақ тілі және әдебиет',
            ru: 'Казахский язык и литература',
            en: 'Kazakh language and literature',
          },
          teacher: 'Ережепова А. Х.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Биология',
            ru: 'Биология',
            en: 'Biology',
          },
          teacher: 'Алтаева И. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Биология',
            ru: 'Биология',
            en: 'Biology',
          },
          teacher: 'Алтаева И. Б.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-14',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Казақ тілі және әдебиет',
            ru: 'Казахский язык и литература',
            en: 'Kazakh language and literature',
          },
          teacher: 'Ережепова А. Х.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Казақ тілі және әдебиет',
            ru: 'Казахский язык и литература',
            en: 'Kazakh language and literature',
          },
          teacher: 'Ережепова А. Х.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Орыс тілі',
            ru: 'Русский язык',
            en: 'Russian',
          },
          teacher: 'Осипова Н. А.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Орыс тілі',
            ru: 'Русский язык',
            en: 'Russian',
          },
          teacher: 'Осипова Н. А.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Химия',
            ru: 'Химия',
            en: 'Chemistry',
          },
          teacher: 'Ахмет М. Н.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Биология',
            ru: 'Биология',
            en: 'Biology',
          },
          teacher: 'Алтаева И. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-15',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-16',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: true,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-17',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: true,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Химия',
            ru: 'Химия',
            en: 'Chemistry',
          },
          teacher: 'Ахмет М. Н.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Химия',
            ru: 'Химия',
            en: 'Chemistry',
          },
          teacher: 'Ахмет М. Н.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Человек. Общество. Право (Основы права)',
            ru: 'Человек. Общество. Право (Основы права)',
            en: 'Человек. Общество. Право (Основы права)',
          },
          teacher: 'Қайыржан Ә. Ж.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Человек. Общество. Право (Основы права)',
            ru: 'Человек. Общество. Право (Основы права)',
            en: 'Человек. Общество. Право (Основы права)',
          },
          teacher: 'Темиров Н. Р.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Орыс әдебиеті',
            ru: 'Русская литература',
            en: 'Russian literature',
          },
          teacher: 'Доскарина Г. М.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Орыс әдебиеті',
            ru: 'Русская литература',
            en: 'Russian literature',
          },
          teacher: 'Доскарина Г. М.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-18',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Дене шынықтыру',
            ru: 'Физическая культура',
            en: 'Physical education',
          },
          teacher: 'Нурсеитов Д. Ф.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Дене шынықтыру',
            ru: 'Физическая культура',
            en: 'Physical education',
          },
          teacher: 'Нурсеитов Д. Ф.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'Информатика',
            ru: 'Информатика',
            en: 'Informatics',
          },
          teacher: 'Омаров А. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'Информатика',
            ru: 'Информатика',
            en: 'Informatics',
          },
          teacher: 'Омаров А. Б.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Ағылшын тілі',
            ru: 'Английский язык',
            en: 'English language',
          },
          teacher: 'Кушваева Р. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Дүниежүзілік тарихы',
            ru: 'Всемирная история',
            en: 'World History',
          },
          teacher: 'Питюкова О. М.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 8,
          subjectName: {
            kk: 'Өнер',
            ru: 'Искусство',
            en: 'Art',
          },
          teacher: 'Новосельцева Д. А.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 9,
          subjectName: {
            kk: 'Өнер',
            ru: 'Искусство',
            en: 'Art',
          },
          teacher: 'Новосельцева Д. А.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-19',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [
        {
          number: 1,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 2,
          subjectName: {
            kk: 'Математика',
            ru: 'Математика',
            en: 'Mathematics',
          },
          teacher: 'Мустафин Т. Т.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 3,
          subjectName: {
            kk: 'География',
            ru: 'География',
            en: 'Geography',
          },
          teacher: 'Конкышева Н. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 4,
          subjectName: {
            kk: 'География',
            ru: 'География',
            en: 'Geography',
          },
          teacher: 'Конкышева Н. С.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 5,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 6,
          subjectName: {
            kk: 'Физика',
            ru: 'Физика',
            en: 'Physics',
          },
          teacher: 'Дыкова Ю. В.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 7,
          subjectName: {
            kk: 'Қазақстан тарихы',
            ru: 'История Казахстана',
            en: 'History of Kazakhstan',
          },
          teacher: 'Райсбек Ү.',
          classroom: '',
          isReplacement: false,
        },
        {
          number: 9,
          subjectName: {
            kk: 'Орыс тілі',
            ru: 'Русский язык',
            en: 'Russian',
          },
          teacher: 'Осипова Н. А.',
          classroom: '',
          isReplacement: false,
        },
      ],
      date: '2024-03-20',
      scheduleNotWorkingDay: {
        isNotWorkingDay: false,
        isWeekend: false,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-21',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: false,
        isHoliday: true,
        calendarEventName: {
          kk: 'Көктемгі демалыс',
          ru: 'Весенние каникулы',
          en: 'Spring holidays',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-22',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: false,
        isHoliday: true,
        calendarEventName: {
          kk: 'Көктемгі демалыс',
          ru: 'Весенние каникулы',
          en: 'Spring holidays',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-23',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: true,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
    {
      lessons: [],
      date: '2024-03-24',
      scheduleNotWorkingDay: {
        isNotWorkingDay: true,
        isWeekend: true,
        isHoliday: false,
        calendarEventName: {
          kk: '',
          ru: '',
          en: '',
        },
      },
    },
  ],
  startDate: '2024-03-11',
  endDate: '2024-03-24',
}
