import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import {FC, MouseEventHandler} from "react";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {StorageCapacity} from "./StorageCapacity.tsx";

export default function Sidebar() {
  return (
      <Sheet
          sx={ {
            position: 'sticky',
            height: '100dvh',
            width: 240,
            top: 0,
            padding: 2,
            gap: 2,
            display: 'flex',
            flexShrink: 0,
            flexDirection: 'column',
            borderRight: '1px solid',
            borderColor: 'divider',
          } }
      >
        <Header title="MMP"/>
        <MainContents/>
        <Divider/>
        <Footer/>
      </Sheet>
  );
}


const Header: FC<{ title: string }> = ({ title }) => (
    <Box sx={ { display: 'flex', gap: 1, alignItems: 'center' } }>
      <IconButton variant="plain" color="primary" size="md">
        <SavingsRoundedIcon/>
      </IconButton>

      <Typography level="title-lg">{ title }</Typography>
    </Box>
);


const MainContents = () => (
    <Box sx={ {
      minHeight: 0,
      overflow: 'hidden auto',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
    } }>
      <List size="md" sx={ { gap: 1 } }>
        <MenuItem selected={ true }>
          <HomeRoundedIcon/> ホーム
        </MenuItem>

        <MenuItem>
          <SettingsRoundedIcon/> 設定
        </MenuItem>

        <MenuItem>
          <InfoRoundedIcon/> 本アプリについて
        </MenuItem>
      </List>

      <StorageCapacity/>
    </Box>
)


const Footer = () => (
    <Box sx={ { display: 'flex', gap: 1, alignItems: 'center' } }>
      <Avatar
          variant="outlined"
          size="sm"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYzDrdpP9qfb631EvpTjLi3HhdMz1ulrrWogJggMJ36vUvzkQARbgnPoNw9-onioJMiXsHlx9BSA51Ii6lTH6G4YfVYJTxc12mGmjHQjyGU83QvP7a6GUpXrIhtSh96rAAUmpco7AWjgE/s800/war_panjandrum.png"
      />

      <Box sx={ { minWidth: 0, flex: 1 } }>
        <Typography level="title-sm">Alpherg</Typography>
        <Typography level="body-xs">mmp@alpherg.dev</Typography>
      </Box>

      <IconButton size="sm" variant="plain" color="neutral">
        <LogoutRoundedIcon/>
      </IconButton>
    </Box>
);


type MenuItemProps = {
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: [JSX.Element, string];
}

const MenuItem: FC<MenuItemProps> = ({ selected, onClick, children }) => (
    <ListItem>
      <ListItemButton
          selected={ selected }
          onClick={ onClick }
          color="primary"
          sx={ (theme) => ({ gap: 1.5, borderRadius: theme.vars.radius.sm }) }
      >
        { children[0] }
        <Typography level="title-sm">{ children[1] }</Typography>
      </ListItemButton>
    </ListItem>
)