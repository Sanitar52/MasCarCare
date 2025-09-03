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
  { label: 'ANASAYFA', to: '/' },
  { label: 'HAKKIMIZDA', to: '/about' },
  { label: 'ÜRÜNLER', to: '/products' },      // adjust when you add a page
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
            background: 'linear-gradient(135deg, #fff 60%, #1a237e 100%)',
            color: '#1a237e',
            borderLeft: '1px solid rgba(26,35,126,0.08)',
            boxShadow: '0 6px 18px rgba(26,35,126,0.12)',
            position: 'relative',
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ position: 'relative', p: 2, pb: 0 }}>
          {/* Premium SVG lines background */}
          <Box sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.13 }}>
              <defs>
                <linearGradient id="sidebarLine" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a237e" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M20 40 Q150 120 280 40" stroke="url(#sidebarLine)" strokeWidth="6" fill="none" />
              <path d="M0 200 Q150 320 300 200" stroke="url(#sidebarLine)" strokeWidth="4" fill="none" />
              <path d="M40 500 Q150 580 260 500" stroke="url(#sidebarLine)" strokeWidth="3" fill="none" />
            </svg>
          </Box>
          {/* Logo at top */}
          <Box sx={{ position: 'relative', zIndex: 1, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/mascarcarelogo.png" alt="MasCarcare Logo" style={{ width: 120, display: 'block' }} />
          </Box>
          {/* Navigation items (no Shop/ÜRÜNLER) */}
          <List sx={{ position: 'relative', zIndex: 1 }}>
            {NAV.filter(item => item).map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.to}
                onClick={toggle(false)}
                sx={{
                  my: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '.06em',
                  color: pathname === item.to ? '#1a237e' : '#2E4A8F',
                  background: pathname === item.to ? 'rgba(26,35,126,0.08)' : 'transparent',
                  boxShadow: pathname === item.to ? '0 2px 8px rgba(26,35,126,0.08)' : 'none',
                  transition: 'all .2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #e3e8ff 60%, #fff 100%)',
                    color: '#1a237e',
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
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
