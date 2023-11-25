import { object, string, ref } from 'yup';

export const signUpValidations = () => object({
    Email: string()
        .required('E-mail Adresi Boş Geçilemez')
        .email('Geçerli bir e-mail adresi giriniz!'),
    Password: string()
        .required('Şifre Boş Geçilemez!')
        .min(6, ({ min }) => 'Şifre en az ' + min + ' karakterden oluşmalıdır!'),
    PasswordConfirm: string()
        .oneOf([ref("Password")], "Şifreler aynı olmalıdır!")
        .required('Boş Geçilemez!'),
});

export const loginValidations = () => object({
    Email: string()
        .required('E-mail Adresi Boş Geçilemez')
        .email('Geçerli bir e-mail adresi giriniz!'),
    Password: string()
        .required('Şifre Boş Geçilemez!')
        .min(1, ({ min }) => 'Şifre en az ' + min + ' karakterden oluşmalıdır!'),
});

export const paymentValidations = object({
    cardNumber: string()
        .required('Lütfen Kart Numaranızı Giriniz!')
        .min(16, ({ min }) => 'Kart Numarası ' + min + ' karakterden oluşmalıdır!')
        .max(16, ({ max }) => 'Kart Numarası ' + max + ' karakterden oluşmalıdır!'),
    cvv: string()
        .required('Lütfen Kartınızın Cvv Bilgisini Giriniz!')
        .min(3, ({ min }) => 'Cvv ' + min + ' karakterden oluşmalıdır!')
        .max(3, ({ max }) => 'Cvv ' + max + ' karakterden oluşmalıdır!'),
});