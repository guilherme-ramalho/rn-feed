import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ButtonRow,
  Separator,
  Row,
  PostText,
  UserName,
  LikesText,
} from './styles';

const PostFooter = ({post, liked, likeTouchHandler, likesQty}) => {
  const {owner: user, text} = post;
  const {firstName, lastName} = user;

  return (
    <Container>
      <ButtonRow>
        <Icon
          onPress={() => likeTouchHandler()}
          size={24}
          name="heart"
          color={liked ? '#FF0000' : '#fff'}
        />
      </ButtonRow>
      <Separator />
      <Row>
        <Icon size={12} name="heart" color="#FF0000" />
        <LikesText>{`${likesQty} likes`}</LikesText>
      </Row>
      <Row>
        <PostText>
          <UserName>
            {firstName.toLowerCase() + lastName.toLowerCase()}
          </UserName>
          {` ${text}`}
        </PostText>
      </Row>
    </Container>
  );
};

export default PostFooter;
