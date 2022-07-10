import React from 'react';
import * as SC from './styles';

const Index = (props) => {
    return (
        <SC.LikeButton onClick={props.clickHandler} isFavorite={props.isFavorite}>
            {props.isFavorite ?
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.4366 39.6903L21.4359 39.6896C16.2758 35.0105 12.0332 31.1632 9.07453 27.5459C6.12162 23.9357 4.5 20.6158 4.5 17C4.5 11.1161 9.11614 6.5 15 6.5C18.3286 6.5 21.5311 8.05197 23.6193 10.5042L24 10.9512L24.3807 10.5042C26.4689 8.05197 29.6714 6.5 33 6.5C38.8839 6.5 43.5 11.1161 43.5 17C43.5 20.6158 41.8784 23.9358 38.9254 27.5486C35.9767 31.1561 31.7528 34.9945 26.6165 39.6621L26.5648 39.709L26.5637 39.71L24.0013 42.025L21.4366 39.6903Z"
                        fill="#F24E1E"/>
                </svg> :
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z"
                    />
                </svg>
            }
        </SC.LikeButton>
    );
};

export default Index;