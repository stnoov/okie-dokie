import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  InputAdornment,
  Fade,
  Zoom
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  CreditCard,
  Security,
  CheckCircle,
} from "@material-ui/icons";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paymentContainer: {
    maxWidth: 480,
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  paymentCard: {
    borderRadius: 20,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    marginBottom: theme.spacing(3),
    overflow: 'visible',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -2,
      left: -2,
      right: -2,
      bottom: -2,
      borderRadius: 22,
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
      zIndex: -1,
      filter: 'blur(8px)',
      opacity: 0.7,
    }
  },
  cardHeader: {
    textAlign: 'center',
    padding: theme.spacing(3, 3, 2),
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: theme.spacing(1),
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
  },
  amountSection: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  amountInput: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      backgroundColor: 'white',
      fontSize: '1.2rem',
      '& fieldset': {
        borderColor: '#e0e0e0',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: '#667eea',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#667eea',
        borderWidth: 2,
      },
    },
    '& .MuiInputLabel-root': {
      color: '#666',
      fontWeight: 500,
    },
  },
  quickAmountGrid: {
    marginTop: theme.spacing(2),
  },
  quickAmountButton: {
    borderRadius: 12,
    padding: theme.spacing(1.5),
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '0.95rem',
    border: '2px solid transparent',
    background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
    color: '#495057',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    },
  },
  selectedAmount: {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
    },
  },
  payButton: {
    borderRadius: 16,
    padding: theme.spacing(2),
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #ee5a24, #e55039)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 107, 107, 0.5)',
    },
    '&:disabled': {
      background: '#bdc3c7',
      color: 'white',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  securityBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    background: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 8,
    color: '#4caf50',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    zIndex: 10,
  },
}));

export default function ModernPaymentForm() {
  const classes = useStyles();
  const intl = useIntl();
  const { user: currentUser } = useSelector((state) => state.auth);

  console.log()
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const quickAmounts = [1000, 2000, 3000, 5000];
  const currentLocale = localStorage.getItem("locale") || 'ru-RU';

  const handleAmountSelect = (value) => {
    setAmount(value);
    setSelectedAmount(value);
  };

  const handleAmountChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setAmount(value);
    setSelectedAmount(null);
  };

  const createPayment = async () => {
    if (!amount || amount <= 0) {
      toast.error(intl.formatMessage({
        id: "payment.invalidAmount",
        defaultMessage: "Пожалуйста, введите корректную сумму"
      }));
      return;
    }

    setLoading(true);

    try {
      // Get auth header using your existing service
      const response = await fetch('http://localhost:8080/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': currentUser.accessToken,
        },
        body: JSON.stringify({
          amount: amount,
          description: `Пополнение баланса на ${amount}₽ для ${currentUser.email}`,
        }),
      });

      const paymentData = await response.json();

      if (response.ok && paymentData.success) {
        toast.success(intl.formatMessage({
          id: "payment.processing",
          defaultMessage: "Обработка платежа..."
        }));

        // Redirect to YooKassa payment page
        if (paymentData.payment && paymentData.payment.confirmation_url) {
          window.location.href = paymentData.payment.confirmation_url;
        } else {
          throw new Error(intl.formatMessage({
            id: "payment.noConfirmationUrl",
            defaultMessage: "Не получен URL для оплаты"
          }));
        }
      } else {
        throw new Error(paymentData.message || intl.formatMessage({
          id: "payment.failedToCreate",
          defaultMessage: "Не удалось создать платеж"
        }));
      }
    } catch (err) {
      console.error('Payment creation error:', err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className={classes.paymentContainer}>
      <Zoom in={true} timeout={600}>
        <Card className={classes.paymentCard}>
          {loading && (
            <div className={classes.loadingOverlay}>
              <CircularProgress size={40} style={{ color: '#667eea' }} />
            </div>
          )}

          <div className={classes.cardHeader}>
            <CreditCard className={classes.headerIcon} />
            <Typography variant="h4" style={{ fontWeight: 700, marginBottom: 8 }}>
              {intl.formatMessage({
                id: "payment.title",
                defaultMessage: "Пополнить Баланс"
              })}
            </Typography>
            <Typography variant="body1" style={{ opacity: 0.9 }}>
              {intl.formatMessage({
                id: "payment.subtitle",
                defaultMessage: "Безопасно пополните свой счет"
              })}
            </Typography>
          </div>
        </Card>
      </Zoom>

      <Fade in={true} timeout={800}>
        <Card className={classes.amountSection}>
          <CardContent style={{ padding: 0 }}>
            <Typography style={{ marginBottom: 16, color: '#333', fontWeight: 600, fontSize: 24 }}>
              {intl.formatMessage({
                id: "payment.enterAmount",
                defaultMessage: "Введите Сумму"
              })}
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              label={intl.formatMessage({
                id: "payment.amount",
                defaultMessage: "Сумма"
              })}
              type="number"
              value={amount || ''}
              onChange={handleAmountChange}
              className={classes.amountInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="body2" style={{ color: '#666', fontWeight: 500 }}>
                      ₽
                    </Typography>
                  </InputAdornment>
                ),
              }}
              inputProps={{ min: 1, step: 1 }}
            />

            <Grid container spacing={2} className={classes.quickAmountGrid}>
              {quickAmounts.map((value) => (
                <Grid item xs={6} key={value}>
                  <Button
                    fullWidth
                    className={`${classes.quickAmountButton} ${selectedAmount === value ? classes.selectedAmount : ''}`}
                    onClick={() => handleAmountSelect(value)}
                  >
                    {value.toLocaleString(currentLocale)} ₽
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Fade>

      <Fade in={true} timeout={1200}>
        <Box>
          <Button
            fullWidth
            className={classes.payButton}
            onClick={createPayment}
            disabled={loading || !amount || amount <= 0}
            size="large"
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              intl.formatMessage({
                id: "payment.payButton",
                defaultMessage: "Оплатить {amount} ₽"
              }, { amount: amount.toLocaleString(currentLocale) })
            )}
          </Button>

          <div className={classes.securityBadge}>
            <Security fontSize="small" />
            <Typography variant="body2" style={{ fontWeight: 500 }}>
              {intl.formatMessage({
                id: "payment.security",
                defaultMessage: "Защищено SSL шифрованием YooKassa"
              })}
            </Typography>
            <CheckCircle fontSize="small" />
          </div>
        </Box>
      </Fade>
    </div>
  );
}
