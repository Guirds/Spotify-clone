import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/37129994?v=4" alt="Foto Perfil" />
      Guilherme Santos
    </User>
  </Container>
);

export default Header;
