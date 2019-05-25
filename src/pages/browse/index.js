import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://www.naijaloaded.com.ng/wp-content/uploads/2016/12/YUNGTIZZY-SHELEGANGAN-ART-700x700.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.naijaloaded.com.ng/wp-content/uploads/2016/12/YUNGTIZZY-SHELEGANGAN-ART-700x700.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.naijaloaded.com.ng/wp-content/uploads/2016/12/YUNGTIZZY-SHELEGANGAN-ART-700x700.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.naijaloaded.com.ng/wp-content/uploads/2016/12/YUNGTIZZY-SHELEGANGAN-ART-700x700.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);
export default Browse;
