import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const styles = {
  color: '#fff',
  margin: '0.5rem',
  textDecoration: 'none',
}

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={styles}>
              Lango.
            </Link>
          </Typography>

          <Link style={styles} to="/">
            Home
          </Link>
          <Link style={styles} to="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
