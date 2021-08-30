import Footer from 'components/Footer';
import { Box, Container } from 'components/Grid';
import FixContent from 'components/Layout/FixContentBlock';
import NavBar from 'components/NavBar';
import { bool, string, node } from 'prop-types';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import screen from 'styles/helpers/media';
import zIndex from 'styles/helpers/zIndex';
import spacing from 'styles/helpers/spacing';
import { Flex } from '@rebass/grid';
import addNavbarHeight from '../../../styles/helpers/add-navbar-height';

const StyledBg = styled(Box)`
   position: relative;
   top: -49px;

  ${screen.sm} {
   top: -100px;
  }

   ${screen.lg} {
    top: -138px;
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.light};
  padding-bottom: 0;
`;

const HeaderBar = styled(Box)`
  z-index: ${zIndex.headerBar};
  width: 100%;
  position: relative;

  ${screen.md} {
    z-index: 13;
  }
`;

const StyledWrapper = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const StyledChildren = styled(Box)`
  position: relative;
  ${screen.sm} {
    padding-top: 120px;
  }
  ${addNavbarHeight('padding-top', [20, 0, 46])};
`;

const StyledBackground = styled(Flex)`
   position: absolute;
   background: ${props => (props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : props.backgroundColor)} no-repeat center;
   background-size: cover;
   width: 102%;
   filter: blur(3px);
   ${addNavbarHeight('height', [290, 390, 593])};
`;

const StyledBackgroundGradient = styled(Box)`
   position: absolute;
   width: inherit;
   height: inherit;
   background: ${props => props.theme.backgroundGradient};
`;

/**
 * Page
 * @description A helper function to add components to a page based on the page requirements.
 */
function Page({ children, withFooter, backgroundColor, backgroundImageUrl }) {
  const playerOverlayVisible = useSelector(state => state.playerOverlay.visible, shallowEqual);

  return (
    <FixContent playerOverlayVisible={playerOverlayVisible}>
      <StyledPage>
        <HeaderBar flex="0 1 auto" mb={[spacing.l, spacing.none, spacing.l]}>
          <NavBar />
        </HeaderBar>
        <StyledBg>
          <StyledWrapper>
            <StyledBackground backgroundColor={backgroundColor} backgroundImageUrl={backgroundImageUrl} alignItems="center" justifyContent="center">
              <StyledBackgroundGradient />
            </StyledBackground>
            <StyledChildren>
              {children}
            </StyledChildren>
          </StyledWrapper>
        </StyledBg>

        {withFooter && (
          <Container>
            <Footer />
          </Container>
        )}
      </StyledPage>
    </FixContent>
  );
}

Page.propTypes = {
  backgroundColor: string,
  backgroundImageUrl: string,
  children: node.isRequired,
  withFooter: bool,
};

Page.defaultProps = {
  backgroundColor: null,
  backgroundImageUrl: null,
  withFooter: false,
};

export default Page;
