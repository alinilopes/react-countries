import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../features/Header/Header';
import CountryList from '../../features/CountryList/CountryList';

import { Container, TitleMain, ButtonRound } from '../../assets/style/Lib';

const Favs = props => {
  const { favs } = props;
  return (
    <>
      <Header />
      <Container direction="column">
        <TitleMain>Favoritos</TitleMain>

        <div>
          <ButtonRound margintop="0" onClick={() => props.history.goBack()}>
            Voltar
          </ButtonRound>
        </div>

        <Container>
          <CountryList countries={favs} />
        </Container>
      </Container>
    </>
  );
};

const mapStateToProps = store => ({
  favs: store.favReducer.favs
});

export default connect(mapStateToProps)(withRouter(Favs));
