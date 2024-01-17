import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Paper,
  Box,
  Checkbox,
  Link
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountCircle,
  Alarm,
  AttachFile,
  Create,
  Delete,
  Edit,
  Home,
  Send,
  Settings,
  Pages,
} from "@mui/icons-material";
import { styled } from '@mui/system';

const HoverPaper = styled(Paper)(({ theme }) => ({
  padding: 20,
  marginTop: 20,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const FadeInTypography = styled(Typography)({
  opacity: 0,
  animation: '$fadeInAnimation 1s forwards',
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
});

function App() {
  const [name, setName] = useState("Ravindra");
  const [click, setClick] = useState(false);
  const handleChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  const clickHandler = () => {
    setName(name);
    setClick(true);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">Material-UI Example</Typography>
        </Toolbar>
      </AppBar>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome to Material-UI!
        </Typography>
        <Typography variant="h2">{click ? name : ""}</Typography>
        <TextField
          label="Enter your text"
          variant="outlined"
          margin="normal"
          fullWidth
        ></TextField>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter your username"
          helperText="Please enter your username"
          error={false}
          disabled={false}
          onChange={handleChange}
          value={name}
          type="text"
          InputProps={{
            startAdornment: <InputAdornment position="end">@</InputAdornment>,
          }}
        />

        <Button variant="outlined" color="success" onClick={clickHandler}>
          Click me
        </Button>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>Header</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: 20 }}>Left Sidebar</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: 20 }}>Right Content</Paper>
        </Grid>
        <Grid item xs ={8} >
          <Paper style={{padding:20}}>Center</Paper>
          
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>Footer</Paper>
        </Grid>
      </Grid>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper style={{ padding: 20 }}>Header</Paper>
        <Box display="flex" justifyContent="space-evenly" width="80%">
          <Paper style={{ padding: 20 }}>Left Sidebar</Paper>
          <Paper style={{ padding: 20 }}>Right Content</Paper>
        </Box>
        <Paper style={{ padding: 20 }}>Footer</Paper>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5">Material-UI Icons and Components</Typography>
        </Paper>

        <Paper style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h6">Icons:</Typography>

          <IconButton color="primary">
            <AccountCircle />
          </IconButton>

          <IconButton color="primary">
            <Alarm />
          </IconButton>

          <IconButton color="primary">
            <AttachFile />
          </IconButton>

          <IconButton color="primary">
            <Create />
          </IconButton>

          <IconButton color="primary">
            <Delete />
          </IconButton>

          <IconButton color="primary">
            <Edit />
          </IconButton>

          <IconButton color="primary">
            <Home />
          </IconButton>

          <IconButton color="primary">
            <Send />
          </IconButton>

          <IconButton color="primary">
            <Settings />
          </IconButton>
          <IconButton color="primary">
            <Pages />
          </IconButton>
        </Paper>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" component="h1">
          Heading 1
        </Typography>
      </Paper>

      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6" component="h2">
          Heading 2
        </Typography>

        <Typography variant="body1" component="p">
          This is a paragraph text using the body1 variant.
        </Typography>

        <Link href="#" color="primary">
          Link
        </Link>

        <Button variant="contained" color="primary">
          Button
        </Button>

        <Box component="div" border={1} p={2} mt={2}>
          <Typography variant="caption" component="span">
            Box with a border and padding
          </Typography>
        </Box>
      </Paper>
    </Box>

    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" component="h1">
            Heading 1
          </Typography>
        </Paper>

        <HoverPaper>
          <Typography variant="h6" component="h2">
            Heading 2
          </Typography>

          <FadeInTypography variant="body1" component="p">
            This is a paragraph text using the body1 variant.
          </FadeInTypography>

          <Link href="#" color="primary">
            Link
          </Link>

          <Button variant="contained" color="primary">
            Button
          </Button>

          <Box border={1} p={2} mt={2}>
            <FadeInTypography variant="caption" component="span">
              Box with a border and padding
            </FadeInTypography>
          </Box>
        </HoverPaper>
      </Box>
    </div>
  );
}

export default App;
