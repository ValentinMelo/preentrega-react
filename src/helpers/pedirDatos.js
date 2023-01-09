import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
                resolve(MOCK_DATA)
        }, 1)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = MOCK_DATA.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }
        }, 1)
    })
}

export const pedirItemPorGenre = (genre) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const genero = MOCK_DATA.find((el) => el.genre === genre)

            if (genero) {
                resolve(genero)
            } else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }
        }, 100)
    })
}