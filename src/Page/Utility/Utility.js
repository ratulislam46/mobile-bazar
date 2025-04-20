
export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) return JSON.parse(favorites)
        return []
}


export const addFavorites = phone => {
    // console.log(phone);
    const favorites = getFavorites();
    const isExist = favorites.find(p=> p.id === phone.id)

    if(isExist) return ('Phone already added')
    favorites.push(phone)

    const phoneSTR = JSON.stringify(favorites);
    localStorage.setItem('favorites', phoneSTR)
}


export const removeFavorites = id =>{
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(phone=> phone.id !==id);
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
}

