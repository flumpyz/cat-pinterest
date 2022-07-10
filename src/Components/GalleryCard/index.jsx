import React, {useState} from 'react';
import * as SC from './styles';
import {useDispatch, useSelector} from "react-redux";
import {CAT_DELETE_INFO, CAT_SET_INFO} from "../../Actions/catsActions";
import {getFavoriteCatValues} from "../../Services/localStorageService";

const Index = (props) => {
    const dispatch = useDispatch();
    const favoriteCatValues = useSelector(state => state.catsInfo) ?? [];
    const [isFavorite, setIsFavorite] = useState(favoriteCatValues.find(favoriteCat => favoriteCat.url === props.src) !== undefined);

    const clickHandler = () => {
        let favorite = favoriteCatValues.find(favoriteCat => favoriteCat.url === props.src);
        if (favorite === undefined) {
            dispatch({type: CAT_SET_INFO, payload: {url: props.src}});
            setIsFavorite(true);
        } else {
            dispatch({type: CAT_DELETE_INFO, payload: {url: props.src}});
            setIsFavorite(false);
        }
        props.onChangeCatValuesHandler(getFavoriteCatValues());
    }

    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
            <SC.GalleryCardLikeButton clickHandler={clickHandler}
                                      isFavorite={isFavorite}/>
        </SC.GalleryCard>
    );
};

export default Index;