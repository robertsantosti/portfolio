import { useLocation } from 'react-router';
import { MENUS } from '../../utils/const/menu';
import * as Styled from './Menu.style';

export const MenuComponent = () => {
  const { pathname } = useLocation();

  const renderMenu = () => {
    return MENUS.map(menu => 
      <Styled.MenuItem key={menu.id} to={menu.path} $active={ pathname === menu.path } data-testid={menu.testId}>
        { menu.title }
      </Styled.MenuItem>
    )
  }

  return(
    <Styled.Menu data-testid="menu">
      { renderMenu() }
    </Styled.Menu>
  )
}