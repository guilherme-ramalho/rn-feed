import React, {useState} from 'react';

import {Pressable} from 'react-native';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

import {Container, ImageWrapper, PostImage, LikeAnimation} from './styles';

const Post = ({post}) => {
  const {image, owner, likes} = post;
  const [showAnimation, setShowAnimation] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesQty, setLikesQty] = useState(likes);
  let lastPostTap = null;

  const likeTouchHandler = () => {
    setLiked(true);

    if (!liked) {
      setShowAnimation(true);
      setLikesQty(likesQty + 1);
    }
  };

  const handleImageDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastPostTap && now - lastPostTap < DOUBLE_TAP_DELAY) {
      likeTouchHandler();
    } else {
      lastPostTap = now;
    }
  };

  return (
    <Container>
      <PostHeader userData={owner} />
      <Pressable onPress={() => handleImageDoubleTap()}>
        <ImageWrapper>
          <PostImage source={{uri: image}} />
          {showAnimation && (
            <LikeAnimation
              autoPlay
              loop={false}
              duration={1500}
              onAnimationFinish={() => setShowAnimation(false)}
            />
          )}
        </ImageWrapper>
      </Pressable>
      <PostFooter
        post={post}
        liked={liked}
        likeTouchHandler={likeTouchHandler}
        likesQty={likesQty}
      />
    </Container>
  );
};

export default Post;
