import { MenuComponent } from "../Menu/Menu.component";
import { Header, Logo } from "./Header.style";

export const HeaderComponent = () => {
  return(
    <Header data-testid="header">
      <Logo className="logo-wrapper">
        <span>Robert</span>
        <span className="detail">Santos</span>
        <span>Ti</span>
      </Logo>

      <MenuComponent/>
    </Header>
  ); 
}