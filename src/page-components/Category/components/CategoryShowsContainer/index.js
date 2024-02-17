import React, { useState } from 'react';
import { Flex } from 'shared-components/Grid';
import CategoryCardHeader from '../CategoryCardHeader';
import CategoryCard from '../CategoryCard';

function CategoryShowsContainer({ shows }) {
  const [sortedShows, setSortedShows] = useState([...shows]);

  const handleSortOptionClick = (key) => {
    // Sort shows based on the selected option. 'desc': Sort A-Z , 'asc: Sort Z-A
    if (key === 'desc') {
      setSortedShows((prevShows) => [...prevShows].sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setSortedShows((prevShows) => [...prevShows].sort((a, b) => b.name.localeCompare(a.name)));
    }
  };

  return (
    <>
      <CategoryCardHeader totalCards={shows.length} handleSortOptionClick={handleSortOptionClick} />
      <Flex flexWrap="wrap">
        {sortedShows.map((show) => (
          <CategoryCard key={show.id} show={show} />
        ))}
      </Flex>
    </>
  );
}

export default CategoryShowsContainer;
