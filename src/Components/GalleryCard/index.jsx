import React from 'react';
import * as SC from './styles';
import {useDispatch} from "react-redux";
import {CAT_DELETE_INFO, CAT_SET_INFO} from "../../Actions/catsActions";
import {getFavoriteCatValues} from "../../Services/localStorageService";

const Index = (props) => {
    const dispatch = useDispatch();
    const favoriteCatValues = getFavoriteCatValues() ?? [];

    const clickHandler = () => {
        let favorite = favoriteCatValues.find(favoriteCat => favoriteCat.url === props.src);
        favorite === undefined
            ? dispatch({type: CAT_SET_INFO, payload: {url: props.src}})
            : dispatch({type: CAT_DELETE_INFO, payload: {url: props.src}});
        props.onChangeCatValuesHandler(getFavoriteCatValues());
    }

    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
            <SC.GalleryCardLikeButton clickHandler={clickHandler}/>
        </SC.GalleryCard>
    );
};

export default Index;