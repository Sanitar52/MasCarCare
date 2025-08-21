// web/src/layouts/NavbarLayout/NavbarLayout.tsx
import React from 'react'
import { Link, useLocation } from '@redwoodjs/router'
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FooterLayout from '../FooterLayout/FooterLayout'

type NavbarLayoutProps = { children?: React.ReactNode }

// Use plain paths (works even if route helpers aren’t defined yet)
const NAV = [
  { label: 'HAKKIMIZDA', to: '/about' },
  { label: 'ÜRÜNLER', to: '/products' },
  { label: 'ORTAKLIKLAR', to: '/technology' },       // adjust when you add a page
  { label: 'BİZE ULAŞIN', to: '/contact' },
  { label: 'BLOG', to: '/contact' },
]

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

const APPBAR_HEIGHT = 72
const ACCENT_TOP = '#2E4A8F' // underline color

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const scrolled = useScrolled(10)
  const { pathname } = useLocation()
  const [open, setOpen] = React.useState(false)
  const toggle = (v: boolean) => () => setOpen(v)

  // Overlay on ALL pages:
  const solid = scrolled // only becomes solid after scroll
  const bg = solid ? 'rgba(255,255,255,0.98)' : 'transparent'
  const text = solid ? '#0B0B12' : '#FFFFFF'
  const hairline = solid ? '1px solid rgba(17,24,39,0.08)' : '1px solid rgba(255,255,255,0.12)'

  return (
    <>
      <AppBar
        position="fixed"
        elevation={solid ? 2 : 0}
        sx={{
          bgcolor: bg,
          color: text,
          transition: 'all 200ms ease',
          boxShadow: solid ? '0 6px 18px rgba(0,0,0,0.06)' : 'none',
          // Subtle dark gradient INSIDE the bar only when transparent (for readability over media)
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: solid
              ? 'none'
              : 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 85%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Toolbar disableGutters sx={{ minHeight: APPBAR_HEIGHT }}>
            {/* Brand — pinned left */}
            
            <Button
              component={Link}
              to="/"
              sx={{
                px: 0,
                mr: 20,
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '.02em',
                color: 'inherit',
                '&:hover': { background: 'transparent', opacity: 0.7 },
              }}
            >
              MasCarcare
            </Button>

            {/* Spacer pushes nav to the right on desktop */}
            

            {/* Desktop nav — no flexGrow here */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {NAV.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.to}
                  color="inherit"
                  sx={{
                    position: 'relative',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    fontSize: 13,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: 6,
                      width: pathname === item.to ? 36 : 0,
                      height: 3,
                      borderRadius: 3,
                      backgroundColor: ACCENT_TOP,
                      transition: 'width .2s ease',
                    },
                    '&:hover::after': { width: 36 },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile hamburger — stays on the far right */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton onClick={toggle(true)} aria-label="menu" sx={{ color: 'inherit' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggle(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            bgcolor: '#0B0B12',
            color: '#fff',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {NAV.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.to}
                onClick={toggle(false)}
                sx={{ borderRadius: 2, fontWeight: 700, letterSpacing: '.06em' }}
              >
                {item.label}
              </ListItemButton>
            ))}
            <ListItemButton
              component={Link}
              to="/products"
              onClick={toggle(false)}
              sx={{ borderRadius: 2, mt: 1, bgcolor: 'rgba(255,255,255,0.12)' }}
            >
              SHOP
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* NOTE: no spacer — navbar overlays content on ALL pages */}
      <main>{children}</main>

      <FooterLayout />
    </>
  )
}

export default NavbarLayout
