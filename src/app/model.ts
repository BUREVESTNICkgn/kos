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
        'https://upload.wikimedia.org/wikipedia/commons/2/22/Yuri_Gagarin_%281961%29_-_Restoration.jpg',
        'Первый человек в космосе. 12 апреля 1961 года совершил орбитальный полёт на корабле "Восток-1" и навсегда вписал своё имя в историю освоения космоса.'
      ),
      new Cosmonaut(
        'Валентина Владимировна Терешкова',
        'https://upload.wikimedia.org/wikipedia/commons/9/99/RIAN_archive_612748_Valentina_Tereshkova.jpg',
        'Первая женщина-космонавт. В 1963 году совершила полёт на корабле "Восток-6", доказав, что женщина способна выдержать все испытания космического полёта.'
      ),
      new Cosmonaut(
        'Алексей Архипович Леонов',
        'https://upload.wikimedia.org/wikipedia/commons/5/56/Alexei_Leonov.jpg',
        'Советский космонавт, первым вышедший в открытое космическое пространство в 1965 году. Участвовал в программе "Союз — Аполлон" и внёс огромный вклад в развитие пилотируемых полётов.'
      ),
      new Cosmonaut(
        'Сергей Павлович Королёв',
        'https://upload.wikimedia.org/wikipedia/commons/5/5b/Sergey_Korolyov%2C_by_unknown_artist%2C_Gagarin_Center.jpg',
        'Главный конструктор советской космической программы. Благодаря его инженерным решениям состоялись первые запуски спутников и полёт Гагарина.'
      ),
      new Cosmonaut(
        'Светлана Евгеньевна Савицкая',
        'https://upload.wikimedia.org/wikipedia/commons/6/66/Svetlana_Savitskaya.jpg',
        'Вторая женщина-космонавт и первая женщина, вышедшая в открытый космос. Работала на станции "Салют-7", проводила эксперименты и отрабатывала операции в скафандре.'
      ),
      new Cosmonaut(
        'Владимир Александрович Джанибеков',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Vladimir_Dzhanibekov_1985.jpg',
        'Советский космонавт, совершивший пять полётов и прославившийся мастерством в стыковках и спасательных операциях. Участник исторического возврата станции "Салют-7".'
      )
    ];
  }
}
