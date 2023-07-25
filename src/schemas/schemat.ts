import * as yup from 'yup';

export const createRefundSchema = yup.object().shape({
    orderId: yup.string().min(4, `Numer zamówienia ma minimum 4 znaki`).required('Numer zamówienia jest wymagany!'),
    email: yup.string().email(`E-Mail musi zawierać w nazwie '@'`).required(`Adres e-mail jest wymagany`),
    receiptOrInvoiceNumber: yup.string(),
    productTitle: yup.string().max(30,`Nazwa jest zbyt długa`).required(`Nazwa produktu jest wymagana`),
    productCode: yup.string().required(`Kod produktu jest wymagany`),
    reason: yup.string().oneOf(['Nieprawidłowy rozmiar', 'Nieodpowiadający gustowi', 'Nieprawidłowy kolor', 'Inny model', 'Wady produktu', 'Uszkodzony przy dostawie', 'Nieodpowiadający opisowi', 'Inny', ''], 'Niepoprawny powód zwrotu.').required(`Powód jest wymagany`),
    description: yup.string().required(`Opis jest wymagany`)
})
