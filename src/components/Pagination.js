import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
const pageNumber = {
  display: 'inline',
  padding:'5px',
  border: '1px solid blue',
  marginRight: '20px',
  fontSize: '30px',
  cursor: 'pointer',
};

  return (
    <nav>
      <ul style={{textAlign: 'center'}} className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} style={pageNumber} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
