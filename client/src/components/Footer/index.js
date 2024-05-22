import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function Footer({
  links = [
    { href: "/", name: "About Us" },
    { href: "/", name: "License" },
  ],
}) {
  const renderLinks = () =>
    links.map((link) => (
      <Box key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <Typography variant="button" fontWeight="regular" color="text">
            {link.name}
          </Typography>
        </Link>
      </Box>
    ));

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize="sm"
        px={1.5}
      >
        <Typography color="grey">
          &copy; {new Date().getFullYear()}, made with <FavoriteIcon />
        </Typography>
      </Box>
      <Box
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
