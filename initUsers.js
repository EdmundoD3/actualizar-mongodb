import UserRepository from "./repository/User"

const users= [
    'rosy',               'mary',           'loly´s',
    'falso',              'sonia rdz.',     'blanca',
    'elizabeth',          'elisa moreno',   'celia',
    'ana',                'juany castillo', 'sofia',
    'cristina',           'kitzel',         'juany rios',
    'blanca gza.',        'virginia r.r',   'hilda garcia',
    'marlen puga',        'aurora rios',    'gpe. gaitan',
    'blanca bustos rdz.', 'josefina',       'marlene',
    'monse rdz.',         'mara',           'monserrath',
    'oficina',            'michell',        'lorena',
    'hugo',               'laura morales',  'celeste',
    'liliana',            'elvira',         'brenda',
    'rosa',               'itsa',           'alondra',
    'angelica hdz.',      'azalia',         'mary mtz.',
    'martha',             'rocio',          'aracely',
    'lili',               'gladys',         'mayra',
    'liiana',             'eva',            'judith',
    'monica',             'lucero',         'angelica',
    'magda',              'evelia'
  ]
class UserSav {
    constructor({
        name,
        username,
        password,
        }){
            this.name = name
            this.username = username || new Date().getFullYear();
            this.phone = null
            this.email = null
            this.password = null
            this.roles = []
            this.lastUpdate = new Date()
            this.isActive=false
    }
}
export default function initUsers() {
    UserRepository.save({})
}