import React, { useState } from 'react';
import {
    Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton, Typography
} from '@mui/material';

const Sidebar = ({ onPageChange, selectedPage, children }) => {
    const [open, setOpen] = useState(true);
    const menuItems = [
        { text: 'Account' },
        { text: 'Accounting' },
        { text: 'Inventory' },
        { text: 'Projects' }
    ];

    const handleListItemClick = (index) => {
        onPageChange(index);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const drawerWidth = 240;

    return(
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant='permanent'
                open={open}
                sx={{
                    width: open? drawerWidth: 64,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? drawerWidth: 64,
                        boxSizing: 'border-box',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        transition: theme => theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
                    {open && <Typography variant='h6' sx={{ flexGrow: 1, ml: 2 }}>Dashboard</Typography> }
                    <IconButton onClick={toggleDrawer}>
                        {open ? '←' : '→'}
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                selected={selectedPage === index}
                                onClick={() => handleListItemClick(index)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{ 
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};

export default Sidebar;