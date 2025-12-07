export class Cosmonaut {
  constructor(
    public fullname: string,
    public photo: string,
    public description: string
  ) {}
}

export class Model {
  cosmonauts: Cosmonaut[];

  constructor() {
    this.cosmonauts = [
      new Cosmonaut(
        'Юрий Алексеевич Гагарин',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Yuri_Gagarin_with_awards.jpg/960px-Yuri_Gagarin_with_awards.jpg',
        'Первый человек в космосе. 12 апреля 1961 года совершил орбитальный полёт на корабле "Восток-1" и навсегда вписал своё имя в историю освоения космоса.'
      ),
      new Cosmonaut(
        'Валентина Владимировна Терешкова',
        'https://upload.wikimedia.org/wikipedia/commons/6/61/RIAN_archive_612748_Valentina_Tereshkova.jpg',
        'Первая женщина-космонавт. В 1963 году совершила полёт на корабле "Восток-6", доказав, что женщина способна выдержать все испытания космического полёта.'
      ),
      new Cosmonaut(
        'Алексей Архипович Леонов',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Alexei_Leonov_%28cropped_2%29.jpg/960px-Alexei_Leonov_%28cropped_2%29.jpg',
        'Советский космонавт, первым вышедший в открытое космическое пространство в 1965 году. Участвовал в программе "Союз — Аполлон" и внёс огромный вклад в развитие пилотируемых полётов.'
      ),
      new Cosmonaut(
        'Светлана Евгеньевна Савицкая',
        'https://i.pinimg.com/736x/b7/34/34/b734343a1683d3bf78a1ae21c8ec430d.jpg',
        'Вторая женщина-космонавт и первая женщина, вышедшая в открытый космос. Работала на станции "Салют-7", проводила эксперименты и отрабатывала операции в скафандре.'
      ),
      new Cosmonaut(
        'Владимир Александрович Джанибеков',
        'https://api.retrofm.ru/images/YtttmFU47QQ6pBJpgkI5lGaSkKO9LzRw7yhqm9GR_vertical_desktop.webp',
        'Советский космонавт, совершивший пять полётов и прославившийся мастерством в стыковках и спасательных операциях. Участник исторического возврата станции "Салют-7".'
      )
    ];
  }
}
