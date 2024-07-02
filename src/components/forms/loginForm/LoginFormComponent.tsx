import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface LoginFormComponentProps {}

const LoginFormComponent: FC<LoginFormComponentProps> = ({}) => {
  return (
    <>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" align="center" component="h2">
            Login
          </Typography>
        </Grid>
        <FormControl>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            size="small"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle email visibility">
                    <AlternateEmailIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            size="small"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle email visibility">
                    <LockOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="right">
            <NavLink to={"/auth/register"}>Forgot Password</NavLink>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            //  onClick={handleSubmit}
            fullWidth
          >
            Login
          </Button>
        </Grid>
        </FormControl>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mt: 1 }} align="right">
            Already have an account?{" "}
            <NavLink to={"/auth/register"}>SignUp</NavLink>
          </Typography>{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default LoginFormComponent;
