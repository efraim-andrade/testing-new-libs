import React from 'react';

import TitleSvg from './TitleSvg';
import { WrapGradient, Container, BackgroundImage, Title } from './styles';

export default function Header({ title, ...props }) {
  return (
    <WrapGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1, width: `100%` }}
      colors={['#f89819', '#ff5858']}
    >
      <Container>
        <BackgroundImage
          source={{
            uri:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de509521-7022-419d-94e5-cacaa4d07782/d6b8ml7-ce99cc7d-49c9-45bd-b567-11d7022f3b8a.png/v1/fill/w_900,h_1615,strp/planeswalker_symbol_by_drdraze_d6b8ml7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYxNSIsInBhdGgiOiJcL2ZcL2RlNTA5NTIxLTcwMjItNDE5ZC05NGU1LWNhY2FhNGQwNzc4MlwvZDZiOG1sNy1jZTk5Y2M3ZC00OWM5LTQ1YmQtYjU2Ny0xMWQ3MDIyZjNiOGEucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W9b6pjrzphghocy95leVWX6cRT0W2mNBBwy5oIVrkkQ',
          }}
        />

        <Title>
          <TitleSvg {...props} />
        </Title>
      </Container>
    </WrapGradient>
  );
}
