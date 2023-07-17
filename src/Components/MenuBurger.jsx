import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

const MenuBurger = () => {

  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
 <List>
      {[
        { text: t('navbar.mbm'), link: '/MainMul' },
        { text: t('navbar.writing'), link: '/' },
        { text: t('navbar.events'), link: '/' },
        { text: t('navbar.others'), link: '/Others' },
        { text: t('navbar.about'), link: '/About' },
        { text: t('navbar.contact'), link: '/Contact' },
      ].map((item) => (
        <ListItem  key={item.text} component={Link} to={item.link}>
          <ListItemText primary={item.text} sx={{ color: 'white' }} />
        </ListItem>
      ))}
    </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default MenuBurger;
