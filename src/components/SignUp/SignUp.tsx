"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PasswordIcon from "@mui/icons-material/Password";

interface SignUpProps {
  username: string;
  password: string;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>();

  const handleSignUp = (data: SignUpProps) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#f5f6fa",
        borderRadius: "1em",
      }}
    >
      <Typography
        variant="h4"
        fontSize={"1.5em"}
        textAlign={"center"}
        sx={{ mb: 2 }}
        fontWeight={600}
      >
        Registrarse
      </Typography>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            type="text"
            autoComplete="username"
            sx={{ marginBottom: "1em" }}
            placeholder="Ej: 1001231235"
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
            }}
          />
          <Box
            sx={{
              pl: 1,
              pr: 1,
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#e67e22",
              }}
            >
              Registrarse
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
