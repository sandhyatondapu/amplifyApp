import React from 'react';
import {useHistory} from 'react-router-dom';

const Posts = ({ posts, loading }) => {
  const history = useHistory();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const listStyle = {
    border: '1px solid black',
    listStyle: 'none',
    padding: '5px',
    cursor: 'pointer',
  };
  function handleClick(item) {
    console.log(item.user.id);
    history.push({
      pathname: '/details',
      state: {
        detail: item.user.login,
        createdAt: item.created_at,
        body: item.body,
        title: item.title,
        id: item.id,
        status: item.state,
       }
  });
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li style={listStyle} className='list-group-item' onClick={() => handleClick(post)}>
        <h4><strong>Title: </strong>{post.title} </h4>
        <li><strong>Id:</strong>&nbsp;&nbsp;{post.id}</li>
        <li><strong>Status:</strong>&nbsp;&nbsp;{post.state}</li>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
