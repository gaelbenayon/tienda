const discografia = [
    {
        "id":1,
        "artist":"Lali",
        "name":"LALI",
        "type":"Álbum",
        "tracks":["Obsesión","Disciplina","Cómprame un brishito","KO","2 Son 3","Incondicional","Quiénes Son?","Diva","N5","Ahora","MOTIVEISHON","Como Tú","Sola"],
        "category":"albumes",
        "genre":["Pop","Hyperpop","Dance","EDM"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/0/02/Lali_-_Lali.jpg",
        "price":9.99
    },
    {
        "id":2,
        "artist":"TINI",
        "name":"Cupido",
        "type":"Álbum",
        "tracks":["Cupido","Te Pido","Muñecas","El último Beso","Carne y Hueso","La Loto","Las Jordans","Beso En Las Rocas","7 Veces","Fantasi","Miénteme","Maldita Foto","Bar","La Triple T"],
        "category":"albumes",
        "genre":["Latin"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/0/0f/Tini_-_Cupido_album_cover.jpeg",
        "price":9.99
    },
    {
        "id":3,
        "artist":"Maria Becerra",
        "name":"LA NENA DE ARGENTINA",
        "type":"Álbum",
        "tracks":["PERREO FURIOSO","AUTOMÁTICO","CUANDO HACEMOS EL AMOR","OJALÁ","ADIÓS","HASTA QUE LA MUERTE NOS SEPARE","DOBLE VIDA","INSPIRADORA","PÍDELO","MANDAMIENTOS","NUNCA PASARÁ","LA NENA DE ARGENTINA","DESAFIANDO EL DESTINO"],
        "category":"albumes",
        "genre":["Reggaeton","Bachata","Cumbia","Dancehall pop","Latin pop","Latin"],
        "releaseYear":2022,
        "image":"https://upload.wikimedia.org/wikipedia/en/8/85/Mar%C3%ADa_Becerra_-_La_Nena_de_Argentina.jpg",
        "price":9.99
    },
    {
        "id":4,
        "artist":"Maria Becerra",
        "name":"Automático",
        "type":"Single",
        "category":"sencillos",
        "genre":["Reggaeton"],
        "releaseYear":2022,
        "image":"https://upload.wikimedia.org/wikipedia/en/9/90/Autom%C3%A1tico_single_cover.jpeg",
        "price":1.29
    },
    {
        "id":5,
        "artist":"Lali",
        "name":"N5",
        "type":"Single",
        "category":"sencillos",
        "genre":["Pop","Flamenco pop","House"],
        "releaseYear":2022,
        "image":"https://upload.wikimedia.org/wikipedia/en/9/98/Lali_N5_Artwork.jpeg",
        "price":0.99
    },
    {
        "id":6,
        "artist":"Miranda!",
        "name":"Hotel Miranda!",
        "type":"Álbum",
        "tracks":["Don","Yo Te Diré","Perfecta (Versión 2023)","Traición","Uno los Dos","Prisionero","Enamorada","Tu Misterioso Alguien","Mentía","Ya Lo Sabía","Navidad"],
        "category":"albumes",
        "genre":["Latin pop"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/a/a4/Hotel_Miranda%21.jpg",
        "price":9.99
    },
    {
        "id":7,
        "artist":"Duki",
        "name":"Antes de Ameri",
        "type":"Álbum",
        "tracks":["01 dE ENEro","JEFES DEL SUDOESTE","RoCKSTAR 2.0","hARAkiRI","cONTRA><Mi","CSIpher (audio latino)","GiGi","don't liE","antes de perderte (OG VERSION)","uNO dOS","N.C.L.C","aPoLLo13","Ultimo Tren a Ameri","bUSCANDO Ameri","Remember Me"],
        "category":"albumes",
        "genre":["Latin trap","Pop rap"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/c/cb/Duki_-_Antes_de_Ameri.jpeg",
        "price":9.99
    },
    {
        "id":8,
        "artist":"Emilia",
        "name":"Tú Crees en Mí?",
        "type":"Álbum",
        "tracks":["latin girl","como si no importara","cuatro veinte","intoxicao","mi otra mitad","la balada","rápido lento","cielo en la mente"],
        "category":"albumes",
        "genre":["Latin pop","Latin trap","R&B","Urban"],
        "releaseYear":2022,
        "image":"https://upload.wikimedia.org/wikipedia/en/5/58/T%C3%BA_Crees_En_M%C3%AD%3F_-_Emilia.jpg",
        "price":7.92
    },
    {
        "id":9,
        "artist":"Emilia",
        "name":"No_se_ve.mp3",
        "type":"Single",
        "category":"sencillos",
        "genre":["Funk carioca","Urban","EDM"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/d/d6/No_Se_Ve%2C_Emilia_and_Ludmilla.jpg",
        "price":0.99
    },
    {
        "id":10,
        "artist":"Rosalía",
        "name":"Despechá",
        "type":"Single",
        "category":"sencillos",
        "genre":["Mambo"],
        "releaseYear":2022,
        "image":"https://upload.wikimedia.org/wikipedia/en/5/56/Rosal%C3%ADa_-_Despech%C3%A1.png",
        "price":1.29
    },
    {
        "id":11,
        "artist":"Big One",
        "name":"En la Intimidad",
        "type":"Single",
        "category":"sencillos",
        "genre":["Reggaeton","Pop","RKT","Cumbia"],
        "releaseYear":2023,
        "image":"https://upload.wikimedia.org/wikipedia/en/d/d9/En_la_Intimidad_-_Big_One%2C_Emilia_and_Callejero_Fino.jpg",
        "price":0.99
    }
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(discografia)
        },500)
    } )
}

export const getProductById = (productId) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(discografia.find(item => item.id == productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(discografia.filter(items => items.category.toLowerCase() == productCategory.toLowerCase()))
        },500)
    })
}