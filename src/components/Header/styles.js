import styled from 'styled-components/native';
import LinearGradientLib from 'react-native-linear-gradient';

export const WrapGradient = styled(LinearGradientLib)`
  height: 183px;

  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const Container = styled.View`
  position: relative;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  align-items: center;
  justify-content: center;

  height: 180px;
  overflow: hidden;
  background-color: #111;
`;

export const BackgroundImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  top: -60px;
  right: -60px;

  height: 260px;
  width: 160px;

  opacity: 0.1;
`;

export const Title = styled.View`
  margin-top: 60px;
`;
