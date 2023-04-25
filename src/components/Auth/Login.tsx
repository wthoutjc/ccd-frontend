"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  LinearProgress,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StoreIcon from "@mui/icons-material/Store";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import Link from "next/link";

// Redux
import { useAppDispatch } from "@/hooks";
import { login, setUser } from "@/reducers";

interface LoginProps {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [company, setCompany] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.checked);
  };

  const LogIn = (data: LoginProps) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(login());
      dispatch(
        setUser({
          email: "some-email@domain.com",
          id: 1010101010,
          name: "Pepe",
          role: company ? "Restaurant" : "Client",
        })
      );
      return router.push(company ? "/restaurant" : "/home");
    }, 2000);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f6fa",
        borderRadius: "1em",
        overflow: "hidden",
      }}
    >
      {loading && <LinearProgress sx={{ mb: 1 }} />}
      <Typography
        variant="h4"
        fontSize={"1.5em"}
        textAlign={"center"}
        fontWeight={600}
        sx={{ mt: 1 }}
      >
        Iniciar sesión
      </Typography>
      <Box
        sx={{
          width: "100%",
          p: 2,
          pt: 0,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={company}
              onChange={handleChange}
              icon={<SupervisedUserCircleOutlinedIcon />}
              checkedIcon={<StoreIcon />}
            />
          }
          label={company ? "Empresa" : "Persona"}
          sx={{ mb: 1 }}
        />
        <form onSubmit={handleSubmit(LogIn)}>
          <TextField
            fullWidth
            type="text"
            autoComplete="username"
            sx={{ marginBottom: "1em" }}
            placeholder="Ej: 1001231235"
            label="Cédula ó NIT*"
            error={!!errors.username}
            helperText={
              !!errors.username ? errors.username.message : "Cédula ó NIT"
            }
            {...register("username", {
              required: "La cédula ó NIT es obligatoria",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SupervisedUserCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            autoComplete="password"
            sx={{ marginBottom: "1em" }}
            placeholder="Ej: *********"
            label="Contraseña*"
            error={!!errors.password}
            helperText={
              !!errors.password ? errors.password.message : "Contraseña"
            }
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              pl: 1,
              pr: 1,
            }}
          >
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#e67e22",
              }}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </Box>
        </form>
        <Link href="/signup">
          <Typography
            variant="body2"
            fontSize={"0.8em"}
            textAlign={"center"}
            sx={{ mt: 1 }}
            fontWeight={600}
          >
            Registrarme
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
