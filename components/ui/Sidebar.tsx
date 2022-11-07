import { useContext } from 'react';

import NextLink from 'next/link'

import { Box, Drawer, ListItem, Typography, Button } from '@mui/material'
import { UIContext } from '../../context/ui';

import { Link } from 'react-scroll'



export const Sidebar = () => {


  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)



  return (
    <Drawer
      open={sidemenuOpen}
      anchor='right'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={closeSideMenu}



    >
      <Box sx={{ width: '250px', paddingTop: 10, backgroundColor: '#2c2c2c' }}>

        <Button className='btn__navbar'>

          <Link to='about' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
              }}
            >
              About
            </Typography>
          </Link>

        </Button>

        <Button className='btn__navbar'>

          <Link to='skills' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
              }}
            >
              Skills
            </Typography>
          </Link>

        </Button>

        <Button className='btn__navbar'>

          <Link to='projects' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
              }}
            >
              Projects
            </Typography>
          </Link>

        </Button>

        <Button className='btn__navbar'>

          <Link to='contact' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
              }}
            >
              Contact
            </Typography>
          </Link>

        </Button>

      </Box>

    </Drawer>
  )
}
