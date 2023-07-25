import React from "react";
import {Box, Button, CssBaseline, Grid, Link, Paper, Stack} from "@mui/material";
import bg from "../../assets/bg/stacked-waves-haikei.svg";
import logo from "../../assets/images/undraw_shopping_re_hdd9.svg";
import {CreateRefundForm} from "../../components/Forms/CreateRefundForm";

export const MainView = () => {
    return (
        <>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex", // Wyśrodkowanie poziome
                        flexDirection: "column",
                        alignItems: "center", // Wyśrodkowanie pionowe
                        justifyContent: "center", // Wyśrodkowanie poziome
                    }}
                >
                    <img src={logo} style={{ maxWidth: "50%" }} />
                    <h1>Zwróć Swoje zamówienie!</h1>
                    <p style={{ maxWidth: "50%", textAlign: "center" }}>
                        Jeszcze nigdy to nie było takie proste jak teraz!. Dzięki naszemu autorskiemu oprogramowaniu wszystko zrealizujesz w mgnieniu oka, a co najważniejsze będziesz miał dostęp do śledzenia swojego zgłoszenia!
                    </p>
                    <Stack direction='row' spacing={2} sx={{display: {xs: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}}>
                        <Link href="/refund">
                            <Button variant='contained' >Wypełnij formularz zwrotu</Button>
                        </Link>
                        <Button variant='contained' >Sprawdź aktualny status swojego zgłoszenia</Button>
                    </Stack>
                    <Stack direction='column' spacing={2} justifyContent='space-around' alignItems='center' sx={{display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none'}}}>
                        <Link href="/refund">
                            <Button variant='contained' >Wypełnij formularz zwrotu</Button>
                        </Link>
                        <Button variant='contained' >Sprawdź aktualny status swojego zgłoszenia</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}