import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';

const Index = () => {
    return (
        <SC.Header>
            <WC.MainWrapper>
                <SC.Nav>
                    <SC.Link>Все котики</SC.Link>
                    <SC.Link>Любимые котики</SC.Link>
                </SC.Nav>
            </WC.MainWrapper>
        </SC.Header>
    );
};

export default Index;