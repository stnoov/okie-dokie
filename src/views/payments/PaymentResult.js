import React from "react";
import {
    Grid,
    makeStyles,
    withWidth,
    Paper,
    Typography,
    Button,
    Box
} from "@material-ui/core";
import { Check, ArrowBack } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { useLocation, useHistory } from "react-router-dom";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: theme.spacing(3),
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    successCard: {
        padding: theme.spacing(4),
        textAlign: "center",
        maxWidth: 500,
        margin: "0 auto",
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[8],
    },
    successIcon: {
        width: 80,
        height: 80,
        backgroundColor: green[100],
        color: green[600],
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        marginBottom: theme.spacing(3),
    },
    iconInner: {
        fontSize: 40,
    },
    title: {
        color: theme.palette.text.primary,
        fontWeight: 600,
        marginBottom: theme.spacing(2),
    },
    message: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(4),
        lineHeight: 1.6,
    },
    amountDisplay: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(4),
    },
    amountText: {
        color: green[600],
        fontSize: "2rem",
        fontWeight: 700,
    },
    returnButton: {
        backgroundColor: green[600],
        color: theme.palette.common.white,
        padding: theme.spacing(1.5, 4),
        fontSize: "1rem",
        fontWeight: 600,
        borderRadius: theme.spacing(1),
        "&:hover": {
            backgroundColor: green[700],
        },
    },
}));

function PaymentSuccess({ width }) {
    const classes = useStyles();
    const intl = useIntl();
    const history = useHistory();
    const location = useLocation();

    // Parse URL parameters
    const searchParams = new URLSearchParams(location.search);
    const amount = searchParams.get('amount');
    const currency = searchParams.get('currency') || 'RUB';

    const handleReturnToDashboard = () => {
        history.push('/dashboard');
    };

    const formatCurrency = (amount, currency) => {
        if (!amount) return '';
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    return (
        <Grid container className={classes.rootContainer}>
            <Grid item xs={12} sm={8} md={6}>
                <Paper className={classes.successCard}>
                    <Box className={classes.successIcon}>
                        <Check className={classes.iconInner} />
                    </Box>

                    <Typography variant="h4" className={classes.title}>
                        {intl.formatMessage({
                            id: 'payment.success.title',
                            defaultMessage: 'Платёж успешно выполнен!'
                        })}
                    </Typography>

                    <Typography variant="body1" className={classes.message}>
                        {intl.formatMessage({
                            id: 'payment.success.message',
                            defaultMessage: 'Ваш платёж был успешно обработан. Баланс будет обновлён в течение нескольких минут.'
                        })}
                    </Typography>

                    {amount && (
                        <Box className={classes.amountDisplay}>
                            <Typography className={classes.amountText}>
                                {formatCurrency(amount, currency)}
                            </Typography>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        className={classes.returnButton}
                        onClick={handleReturnToDashboard}
                        startIcon={<ArrowBack />}
                        fullWidth
                    >
                        {intl.formatMessage({
                            id: 'payment.success.button',
                            defaultMessage: 'Вернуться к панели'
                        })}
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default withWidth()(PaymentSuccess);
