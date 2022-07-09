import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';

const Index = (props) => {
    return (
        <SC.Header>
            <WC.MainWrapper>
                <SC.Nav>
                    <SC.Link to="/"
                             isActive={props.isActive[0]}>Все котики</SC.Link>
                    <SC.Link to="/favorite-cats"
                             isActive={props.isActive[1]}>Любимые котики</SC.Link>
                </SC.Nav>
            </WC.MainWrapper>
        </SC.Header>
    );
};

export default Index;