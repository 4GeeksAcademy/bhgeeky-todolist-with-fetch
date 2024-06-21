// src/data/productos.js

const productos = [
    {
        id: 1,
        name: 'Meditaciones',
        author: 'Marco Aurelio',
        description: 'Marco Aurelio plantea que la felicidad se encuentra en la virtud y en aceptar las cosas que no podemos cambiar. Sus meditaciones ofrecen una guía práctica para alcanzar la serenidad y la paz interior.',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37dWeszD1cekX9flKByft0sfGjpUSw1hKzg&s'],
        price: { value: 15, currency: '€' },
        origin: 'Roma',
        ISBN: '9780140449334',
    },
    {
        id: 2,
        name: 'Así habló Zaratustra',
        author: 'Friedrich Nietzsche',
        description: 'Nietzsche plantea que lo bueno es todo aquello que aumenta nuestro sentimiento de poder, nuestra voluntad de poder y el poder mismo en el individuo.  Nietzsche define la felicidad como el sentimiento de cómo crece el poder, de vencer una resistencia. Sugiere que la verdadera felicidad proviene de superar desafíos y obstáculos, y de sentirse poderoso y triunfante.',
        images: ['https://www.editorialatenea.com.co/wp-content/uploads/2018/07/As%C3%AD-Habl%C3%B3-Zaratustra.jpg'],
        price: { value: 18, currency: '€' },
        origin: 'Alemania',
        ISBN: '9786070745268',
    },
    {
        id: 3,
        name: 'Suma Teológica',
        author: 'Tomás de Aquino',
        description: 'Tomás de Aquino argumenta que la felicidad suprema se encuentra en la contemplación de Dios y en vivir de acuerdo con la ley divina. "Suma Teológica" es una obra fundamental de la teología católica que explora la naturaleza de Dios, la moralidad y la felicidad.',
        images: ['suma_teologica.jpg'],
        price: { value: 25, currency: '€' },
        origin: 'Italia',
        ISBN: '9788498406941',
    },
    {
        id: 4,
        name: 'La República',
        author: 'Platón',
        description: 'En "La República", Platón argumenta que la felicidad se alcanza viviendo una vida justa y en armonía con la razón. Discute la naturaleza de la justicia, el estado ideal y la formación del alma.',
        images: ['la_republica.jpg'],
        price: { value: 20, currency: '€' },
        origin: 'Antigua Grecia',
        ISBN: '9788497403387',
    },
    {
        id: 5,
        name: 'El hombre en busca de sentido',
        author: 'Viktor Frankl',
        description: 'Viktor Frankl reflexiona sobre su experiencia en campos de concentración y plantea que la felicidad se encuentra al encontrar un propósito significativo en la vida, incluso en medio del sufrimiento.',
        images: ['el_hombre_en_busca_de_sentido.jpg'],
        price: { value: 12, currency: '€' },
        origin: 'Austria',
        ISBN: '9788425432010',
    },
    {
        id: 6,
        name: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        description: 'En "Cien años de soledad", García Márquez explora la búsqueda de la felicidad a través de generaciones en un pueblo latinoamericano. La novela reflexiona sobre el amor, la soledad y la búsqueda del significado en la vida.',
        images: ['cien_anios_de_soledad.jpg'],
        price: { value: 16, currency: '€' },
        origin: 'Colombia',
        ISBN: '9780307474728',
    },
    {
        id: 7,
        name: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes',
        description: 'Miguel de Cervantes narra las aventuras de un caballero soñador en busca de la grandeza y la felicidad en "Don Quijote de la Mancha". La obra reflexiona sobre la realidad y la imaginación, la locura y la cordura.',
        images: ['don_quijote.jpg'],
        price: { value: 22, currency: '€' },
        origin: 'España',
        ISBN: '9788420663711',
    },
    {
        id: 8,
        name: 'La peste',
        author: 'Albert Camus',
        description: 'En "La peste", Albert Camus explora la condición humana en tiempos de crisis y plantea que la felicidad se encuentra en la solidaridad y la esperanza, incluso en medio de la adversidad y la muerte.',
        images: ['la_peste.jpg'],
        price: { value: 14, currency: '€' },
        origin: 'Francia',
        ISBN: '9788437622631',
    },
    {
        id: 9,
        name: 'La rebelión de Atlas',
        author: 'La rebelión de Atlas',
        description: 'En la filosofía de Rand, el individuo es el centro y el motor de la historia. Promovía la idea de que cada persona tiene el derecho y la capacidad de perseguir sus propios intereses y metas. Rand defendía la idea de que el egoísmo racional, entendido como la búsqueda racional del interés propio, es una virtud moral y esencial para la realización personal.',
        images: ['la_peste.jpg'],
        price: { value: 14, currency: '€' },
        origin: 'Francia',
        ISBN: '9788437622631',
    },
];

export default productos;