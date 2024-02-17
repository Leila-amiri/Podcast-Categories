import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'shared-components/Grid';
import Header from 'shared-components/Typography/Header';
import SortButton from 'shared-components/SortButton';
import spacing from 'src/styling/spacing';

const CategoryCardHeader = ({ totalCards , handleSortOptionClick }) => {
  const sortOptions = [
    { key: 'desc', value: 'SORT A-Z' },
    { key: 'asc', value: 'SORT Z-A' },
  ];
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      p={spacing.s}
    >
      <Header
        variant="m"
        text={`${totalCards} Podcasts`}
        mb={spacing.m}
        mt={spacing.m}
      />
      <SortButton options={sortOptions} onOptionClick={handleSortOptionClick} />
    </Flex>
  );
};

CategoryCardHeader.propTypes = {
  totalCards: PropTypes.number.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired,
};

CategoryCardHeader.defaultProps = {
  totalCards: 0,
};

export default CategoryCardHeader;
