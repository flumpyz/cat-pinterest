import React from 'react';
import * as SC from './styles';
import {useDispatch, useSelector} from "react-redux";
import {CAT_SET_INFO} from "../../Actions/catsActions";

const Index = (props) => {
    const dispatch = useDispatch();
    const catValues = useSelector(state => state.catsInfo);

    const addFavoriteCat = () => {
        dispatch({type: CAT_SET_INFO, payload: {url: props.src}})
    }

    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
            <SC.GalleryCardLikeButton clickHandler={addFavoriteCat}/>
        </SC.GalleryCard>
    );
};

export default Index;