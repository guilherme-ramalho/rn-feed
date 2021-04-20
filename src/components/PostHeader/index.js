import React from 'react';

import {Container, UserImage, UserImageWrapper, UserName} from './styles';

const PostHeader = ({userData}) => {
  const {lastName, firstName, picture} = userData;

  return (
    <Container>
      <UserImageWrapper>
        <UserImage
          source={{
            uri: picture,
          }}
        />
      </UserImageWrapper>
      <UserName>{`${firstName} ${lastName}`}</UserName>
    </Container>
  );
};

export default PostHeader;
