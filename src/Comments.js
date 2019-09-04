import React from 'react';
import { DataProvider } from './DataProvider';
import { Fetch } from './Fetch';
function CommentsComponent(props) {
  const { data, loading } = props;
  return (
    <div>
      <h1>Comments</h1>
      {loading ? (
        <div> loading</div>
      ) : (
        <div>
          {data.map(x => (
            <div style={{ padding: '20px' }}>
              <span style={{ color: '#d77d77' }}>{x.name}</span>
              <div>{x.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// export function Comments() {
//   return (
//     <DataProvider url="https://jsonplaceholder.typicode.com/comments">
//       {({ loading, data }) => (
//         <CommentsComponent loading={loading} data={data}></CommentsComponent>
//       )}
//     </DataProvider>
//   );
// }

export const Comments = Fetch(
  'https://jsonplaceholder.typicode.com/comments',
  CommentsComponent
);
