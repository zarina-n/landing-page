import { Product } from '../types/types'

import Voda from '../assets/img/voda.jpg'
import Ronald from '../assets/img/ronald.jpg'
import Vent from '../assets/img/vent.jpg'
import Tatran from '../assets/img/tatran.jpg'
import Vilora from '../assets/img/vilora.jpg'
import Menu from '../assets/img/menu.jpg'
import Asketa from '../assets/img/asketa.jpg'
import Norman from '../assets/img/norman.jpg'
import Nastan from '../assets/img/nastan.jpg'
import AsketaCouch from '../assets/img/asketa_couch.jpg'
import Lunar from '../assets/img/lunar.jpg'
import NastanCloset from '../assets/img/nastan_drawer.jpg'

export const productsList: Product[] = [
    {
        name: 'Chandelier VODA',
        img: Voda,
        description:
            'Polished stainless steel base for an original floating effect.',
        price: 45000,
        salePrice: 67000,
        id: 1,
        specialOffer: true,
        favorite: false,
    },
    {
        name: 'Sofa RONALD',
        img: Ronald,
        description:
            'The model is distinguished by the simplicity of lines and shapes, the absence of catchy decor.',
        price: 156000,
        salePrice: 198000,
        id: 2,
        specialOffer: true,
        favorite: false,
    },
    {
        name: 'Dresser VENT',
        img: Vent,
        description: 'European oak is particularly durable and stable.',
        price: 34000,
        salePrice: 45000,
        id: 3,
        specialOffer: true,
        favorite: false,
    },
    {
        name: 'Bed TATRAN',
        img: Tatran,
        description:
            'Polished stainless steel base for an original floating effect.',
        price: 120000,
        salePrice: 0,
        id: 4,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Chair VILORA',
        img: Vilora,
        description:
            'Soft and comfortable, neat and stylish. Resilient seat cushions and soft-touch fabric.',
        price: 21000,
        salePrice: 0,
        id: 5,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Table MENU',
        img: Menu,
        description:
            'In order to have a pleasant meal, you need the right dining table.',
        price: 34000,
        salePrice: 0,
        id: 6,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Chair ASKESTA',
        img: Asketa,
        description:
            'Highly elastic polyurethane foam in the "stuffing" of the chair is reliable and durable.',
        price: 68000,
        salePrice: 0,
        id: 7,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Table NORMAN',
        img: Norman,
        description:
            'Perfectly tolerates sunlight, changes in humidity and any precipitation.',
        price: 40000,
        salePrice: 0,
        id: 8,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Sofa NASTAN',
        img: Nastan,
        description:
            'The model is distinguished by the simplicity of lines and shapes, the absence of catchy decor.',
        price: 80000,
        salePrice: 0,
        id: 9,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Sofa ASKETA',
        img: AsketaCouch,
        description:
            'Thanks to the latching mechanism, the sofa easily unfolds into a comfortable bed.',
        price: 68000,
        salePrice: 0,
        id: 10,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Chair LUNAR',
        img: Lunar,
        description:
            'Perfectly tolerates sunlight, changes in humidity and any precipitation.',
        price: 40000,
        salePrice: 0,
        id: 11,
        specialOffer: false,
        favorite: false,
    },
    {
        name: 'Closet Nastan',
        img: NastanCloset,
        description:
            'Furniture can be equipped with a variety of lighting systems.',
        price: 80000,
        salePrice: 0,
        id: 12,
        specialOffer: false,
        favorite: false,
    },
]
