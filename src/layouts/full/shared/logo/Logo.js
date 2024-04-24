import { Link } from "react-router-dom";
import LogoDark1 from "src/assets/images/logos/logo.png"; 
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  width: "70px",
  overflow: "hidden",
  display: "block"
  
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/"
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <img src={LogoDark1} alt="Logo" style={{ width: "100%" }} />
    </LinkStyled>
  );
};

export default Logo;
