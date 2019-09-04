import React from 'react';

import { Fetch } from './Fetch';
function PostsComponent(props) {
  const { data, loading } = props;
  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <div> loading</div>
      ) : (
        <div>
          {data.map(x => (
            <div>
              <h1>{x.title}</h1>
              <div>{x.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// export const Posts = () => (
//   <DataProvider url="https://jsonplaceholder.typicode.com/posts">
//     {({ loading, data }) => (
//       <PostsComponent loading={loading} data={data}></PostsComponent>
//     )}
//   </DataProvider>
// );

export const Posts = Fetch(
  'https://jsonplaceholder.typicode.com/posts',
  PostsComponent
);
console.log(Posts);
