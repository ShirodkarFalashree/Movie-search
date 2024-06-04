import React from 'react'
import { useGlobalContext } from './context';



const Search = () => {

  const { query, setQuery,isError } = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>Search movie here...</h2>
        <form action="#" onSubmit={(e) => e.preventDefault}>
          <div>
            <input type="text" placeholder='Type here...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='class-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search;