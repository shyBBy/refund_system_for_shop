import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from 'react-hook-form';
import {createRefundSchema} from "../../schemas/schemat";
import {toast} from "react-toastify";
import {config} from "../../config/config";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField
} from '@mui/material'
import {REFUND_REASON} from "../../interfaces/refund";

export const CreateRefundForm = () => {
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: {errors, isSubmitSuccessful},
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(createRefundSchema),
        defaultValues: {
            orderId: "",
            email: '',
            receiptOrInvoiceNumber: '',
            productTitle: '',
            productCode: '',
            reason: '',
            description: ''
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await fetch(`${config.API_URL}/refund/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            console.log('cale res', res)
            console.log('samo res ok', res.ok)

            if (!res.ok) {
                toast.error(`${data.message}`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 2000,
                })
                console.log('tu wywala blad')
                return
            }
            return res.json().then((data) => {
                toast.success(`Pomyślnie utworzono zgłoszenie - sprawdź swoją skrzynkę pocztową.`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 1500,
                })
                navigate('/');
                return data;
            });
        } catch (error) {
            toast.error('Coś poszło nie tak, spróbuj raz jeszcze.', {
                position: 'bottom-right',
                theme: 'light',
                autoClose: 1500,
            })
            return

        }
    };

    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Controller
                            name="orderId"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    {...register('orderId')}
                                    error={!!errors?.orderId}
                                    helperText={errors['orderId'] ? errors['orderId'].message : ''}
                                    id="orderId"
                                    label="Numer zamówienia"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="email"
                                    label="Twój adres e-mail podany w zamówieniu"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('email')}
                                    error={!!errors?.email}
                                    helperText={errors['email'] ? errors['email'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="receiptOrInvoiceNumber"
                            control={control}
                            rules={{required: false}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="receiptOrInvoiceNumber"
                                    label="Numer paragonu lub faktury"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('receiptOrInvoiceNumber')}
                                    error={!!errors?.receiptOrInvoiceNumber}
                                    helperText={errors['receiptOrInvoiceNumber'] ? errors['receiptOrInvoiceNumber'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Controller
                            name="productTitle"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="productTitle"
                                    label="Nazwa produktu"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('productTitle')}
                                    error={!!errors?.productTitle}
                                    helperText={errors['productTitle'] ? errors['productTitle'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controller
                            name="productCode"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="productCode"
                                    label="Kod produktu"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('productCode')}
                                    error={!!errors?.productCode}
                                    helperText={errors['productCode'] ? errors['productCode'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="reason"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    {...register('reason')}
                                    error={!!errors?.reason}
                                    id="reason"
                                    value={field.value || 'Wybierz powód zwrotu'}
                                    sx={{ mx: 1, my: 1 }}
                                >
                                    <MenuItem value="Wybierz powód zwrotu">Wybierz powód zwrotu</MenuItem>
                                    {Object.values(REFUND_REASON).map((value) => (
                                        <MenuItem key={value} value={value}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="description"
                                    label="Opisz"
                                    multiline
                                    minRows={5} // Minimalna liczba wierszy
                                    maxRows={10} // Maksymalna liczba wierszy, możesz dostosować do swoich potrzeb
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{
                                        mx: 1,
                                        my: 1,
                                        width: "100%", // Szerokość pola tekstowego
                                        fontSize: "1.2rem", // Rozmiar czcionki
                                        border: "none", // Usuń obramowanie
                                        resize: "none", // Wyłącz automatyczne zmienianie rozmiaru
                                    }}
                                    {...register("description")}
                                    error={!!errors?.description}
                                    helperText={errors["description"] ? errors["description"].message : ""}
                                />
                            )}
                        />
                    </Grid>

                </Grid>

                <FormControlLabel required control={<Checkbox />} label={<Link href="https://bigsewciu.shop/regulamin-zwrotow/" variant="body2">
                    Zapoznałem się z regulaminem zwrotów
                </Link>} />

                <Button type="submit" variant="contained" color="primary">
                    Wyślij zgłoszenie
                </Button>

            </Box>
        </>
    )
}