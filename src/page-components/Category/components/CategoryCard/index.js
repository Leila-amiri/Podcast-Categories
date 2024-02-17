import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import { Box } from 'shared-components/Grid';
import spacing from 'src/styling/spacing';
import { StyledImage } from './styled';

const CategoryCard = ({ show }) => {
  const { description, images, name } = show;
  const imageUrl = images.squareLarge.url;

  return (
    <Box width={[1 / 2, 1 / 3, 1 / 4]} mb={spacing.l} p={spacing.s}>
      <StyledImage src={imageUrl} alt={name} />
      <Header as="h2" variant="s" text={name} linesToShow={1} mb={spacing.xs} />
      {description && (
        <Paragraph linesToShow={3} opacity={0.7}>
          {description}
        </Paragraph>
      )}
    </Box>
  );
};

CategoryCard.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CategoryCard;
