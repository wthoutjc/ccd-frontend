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

interface SignUpProps {
  username: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [company, setCompany] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.checked);
  };

  const handleSignUp = (data: SignUpProps) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      return router.push("/home");
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
        sx={{ mt: 1 }}
        fontWeight={600}
      >
        Registrarse
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
        <form onSubmit={handleSubmit(handleSignUp)}>
          <TextField
            fullWidth
            type="text"
            autoComplete="username"
            sx={{ marginBottom: "1em" }}
            placeholder="Ej: 1001231235"
            label="NIT*"
            error={!!errors.username}
            helperText={!!errors.username ? errors.username.message : "NIT"}
            {...register("username", {
              required: "El NIT es obligatorio",
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
              {loading ? "Registrando..." : "Registrarse"}
            </Button>
          </Box>
        </form>
        <Link href="/login">
          <Typography
            variant="body2"
            fontSize={"0.8em"}
            textAlign={"center"}
            sx={{ mt: 1 }}
            fontWeight={600}
          >
            Iniciar sesión
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
