export const products = [
    {
        id: 1,
        name: 'Fender American Pro II Jazz Bass V',
        price: 1767,
        despcription: 'El American Professional II Jazz Bass se basa en más de sesenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual.',
        stock: 10,
        img: './fender-american-pro-ii-jazz-bass-v-mn-mystic-surf-green.jpg',
        category: 'Bajos V',
    },
    {
        id: 2,
        name: 'Fender Jazz Bass IV',
        price: 1500,
        despcription: 'Con sus dos cápsulas de una bobina y su tacto suave, el Jazz Bass Player es un instrumento inspirador con un estilo clásico, superior y un auténtico tono de bajo Fender. Es poderoso, el sonido retumbante es fuerte y notorio; un gruñido que combina con una sensación de comodidad para una inyección de inspiración creativa. Listo para la acción en el estudio o en el escenario, con el Player Jazz Bass puedes tocar todo lo que se te ocurra, y todo lo que aún no se haya hecho.',
        stock: 40,
        img: './Fender Jazz Bass IV blanco.jpg',
        category: 'Bajos IV',
    },
    {
        id: 3,
        name: 'Yamaha TRB1006J Natural',
        price: 1899,
        despcription: 'Esta es la versión de 6 cuerdas de la legendaria serie TRB. Esta versátil serie nació durante los años ’80, paralelamente al auge de los sintetizadores. La serie se ha diseñado para abarcar un mayor rango tonal, tanto en las frecuencias graves como en las agudas, y existen también versiones de 4 y 5 cuerdas. En este modelo se añade una quinta cuerda (Si grave) y una sexta (Do agudo), manteniendo una relación perpetua de 5 semitonos entre todas las cuerdas, lo que permite a los músicos avanzados llevar al límite su creatividad y capacidad de improvisación.',
        stock: 3,
        img: './VI.jpg',
        category: 'Bajos VI',
    },
    {
        id: 4,
        name: 'Atelier z',
        price: 3799,
        despcription: 'Tiene un carácter sonoro ortodoxo que es compatible con todo tipo de música que tiene el jazz bass, y ha heredado el sonido claro característico de los modelos antiguos. Logró resaltar claramente la sensación de ataque única del slap. Este modelo cuenta con materiales que pueden combinar con la amplia gama de amplificadores de alta gama.',
        stock: 5,
        img: './Atelierz.jpg',
        category: 'Bajos V',
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};