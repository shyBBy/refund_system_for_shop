import React from "react";
import {Box, Container, CssBaseline, Grid, Link, Paper, Typography} from "@mui/material";
import bg from '../../assets/bg/stacked-waves-haikei.svg'
import bg2 from '../../assets/bg/bg4.svg'
import logo from '../../assets/images/undraw_forms_re_pkrt.svg'
import {CreateRefundForm} from "../../components/Forms/CreateRefundForm";

export const RefundView = () => {


    return(
        <Box sx={{display: 'flex'}}>
            <Box sx={{
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <Container maxWidth="lg" sx={{ mt: 10, mb: 10}}>
                    <Paper>
                        <Grid container>
                            <Grid item xl={6} sx={{
                                backgroundImage: `url(${bg2})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: "flex", // Wyśrodkowanie poziome
                                flexDirection: "column",
                                alignItems: "center", // Wyśrodkowanie pionowe
                                justifyContent: "center", // Wyśrodkowanie poziome
                            }}>
                                <img src={logo} style={{ maxWidth: "50%" }} />

                            </Grid>
                            <Grid item xl={6} p={4}>
                                <Typography component="h1" variant="h1" fontSize={'20px'} pb={2}>
                                    Formularz zwrotów
                                </Typography>
                                <Typography component="p" variant="body2" sx={{fontSize: '12px', textAlign: 'justify'}}>
                                    Twoje zadowolenie jest dla nas najważniejsze! Proces zwrotu w naszym sklepie internetowym został zoptymalizowany, aby zapewnić Ci wygodę i pełne zrozumienie. Nasz formularz umożliwia szybkie zgłoszenie zwrotu oraz precyzyjne określenie powodu. Po wypełnieniu formularza, nasz dedykowany zespół ds. zwrotów skontaktuje się z Tobą, aby potwierdzić szczegóły i pomóc Ci w dalszych krokach. Naszym celem jest sprawić, aby proces zwrotu przebiegał sprawnie i bezproblemowo. Dziękujemy za zaufanie i zapraszamy do składania zgłoszeń.
                                </Typography>
                                <CreateRefundForm/>
                                <Box p={1}>
                                    <Link href='/' variant='subtitle2'>Powrót do strony głównej</Link>
                                    <Link sx={{marginLeft: 2}} href='https://bigsewciu.shop' variant='subtitle2'>BIGSEWCIU.SHOP</Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Box>
    )
}