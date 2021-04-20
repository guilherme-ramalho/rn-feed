import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  padding: 12px 15px;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 25px;
`;

export const UserImageWrapper = styled(LinearGradient).attrs({
  colors: [
    '#0040E0',
    '#4140E0',
    '#7640E0',
    '#A540E0',
    '#FF40E0',
    '#FF4059',
    '#FF8340',
  ],
})`
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
