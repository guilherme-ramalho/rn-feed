import React, {useEffect, useState} from 'react';

import Post from '../../components/Post';
import Loader from '../../components/Loader';

import {Container, List, ListItemSeparator} from './styles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pager, setPager] = useState({
    current: 0,
    total: 1,
  });

  const getPosts = (page = 0, refreshing) => {
    if (refreshing) setIsRefreshing(true);
    else setIsLoading(true);

    fetch(`https://dummyapi.io/data/api/post?page=${page}&limit=10`, {
      headers: {
        'app-id': '5fc42e8d5dfaf5c04f2ef03a',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (refreshing) {
          setIsRefreshing(false);
          setPosts(response.data);
        } else {
          setIsLoading(false);
          setPosts([...posts, ...response.data]);
        }

        delete response.data;
        setPager(response);
      })
      .catch(() => {
        setIsRefreshing(false);
        setIsLoading(false);
      });
  };

  const loadMoreItems = () => {
    const {page: currentPage, total: totalItems, limit} = pager;
    const totalPages = Math.ceil(totalItems / limit - 1);
    const nextPage = currentPage + 1;

    if (currentPage < totalPages && !isLoading && !isRefreshing) {
      getPosts(nextPage);
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  }, []);

  return (
    <Container>
      {isLoading && posts.length === 0 ? (
        <Loader />
      ) : (
        <List
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={({item: post}) => <Post post={post} />}
          onEndReached={loadMoreItems}
          onRefresh={() => getPosts(0, true)}
          refreshing={isRefreshing}
          ListFooterComponent={isLoading && posts.length > 0 && <Loader />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      )}
    </Container>
  );
};

export default Home;
