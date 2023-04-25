"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

// uuid
import { v4 as uuid } from "uuid";

// Redux
import { useAppDispatch } from "../../hooks";
import { newNotification } from "../../reducers";

interface CreditCardInfo {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  cardHolder: string;
}

interface Props {
  close: () => void;
}

const PayCart = ({ close }: Props) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardInfo>();

  const [loading, setLoading] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaveMe(event.target.checked);
  };

  const handlePay = (data: CreditCardInfo) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const notification = {
        id: uuid(),
        title: "Pago realizado",
        message: "El pago se ha realizado correctamente",
        type: "success" as "success" | "error",
        autoDismiss: 5000,
      };
      dispatch(newNotification(notification));
      close();
    }, 2500);
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <form onSubmit={handleSubmit(handlePay)}>
        <TextField
          disabled={loading}
          fullWidth
          type="text"
          autoComplete="cardNumber"
          sx={{ marginBottom: "1em" }}
          placeholder="0000 0000 0000 0000"
          label="Número de tarjeta*"
          error={!!errors.cardNumber}
          helperText={!!errors.cardNumber && errors.cardNumber.message}
          {...register("cardNumber", {
            required: "El número de tarjeta es obligatorio",
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            disabled={loading}
            fullWidth
            type="text"
            autoComplete="expiryDate"
            sx={{ marginBottom: "1em" }}
            placeholder="MM/YY"
            label="Fecha de expiración*"
            error={!!errors.expiryDate}
            helperText={!!errors.expiryDate && errors.expiryDate.message}
            {...register("expiryDate", {
              required: "La fecha de expiración es obligatoria",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            disabled={loading}
            fullWidth
            type="text"
            autoComplete="cvc"
            sx={{ marginBottom: "1em", ml: 1 }}
            placeholder="***"
            label="CVC/CVV*"
            error={!!errors.cvc}
            helperText={!!errors.cvc && errors.cvc.message}
            {...register("cvc", {
              required: "El número de tarjeta es obligatorio",
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InfoIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <FormControlLabel
          sx={{ p: 1, pt: 0 }}
          control={
            <Checkbox
              checked={saveMe}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Guardar tarjeta"
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          startIcon={<PointOfSaleIcon />}
        >
          {loading && <CircularProgress size={20} />}
          Pagar
        </Button>
      </form>
    </Box>
  );
};

export default PayCart;
