import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const ButtonRow = styled.View``;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c2c2cf;
  margin: 5px 0;
`;

export const PostText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const UserName = styled(PostText)`
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LikesText = styled.Text`
  color: #c2c2cf;
  font-weight: bold;
  font-size: 12px;
  margin-left: 5px;
`;
