export const setFavoriteCatValues = (favoriteCatValues) => {
    localStorage.setItem('favorite-cats', JSON.stringify(favoriteCatValues));
}

export const getFavoriteCatValues = () => {
    return JSON.parse(localStorage.getItem('favorite-cats'));
}