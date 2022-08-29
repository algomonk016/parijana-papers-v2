import {
  // Box, Link, Typography, 
  Container,
  styled
} from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => ` margin-top: ${theme.spacing(4)}; `
);

function Footer() {
  return (
    <>
      <FooterWrapper className="footer-wrapper">
        this is footer
      </FooterWrapper>
    </>
  );
}

export default Footer;
