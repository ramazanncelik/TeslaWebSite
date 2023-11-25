import { useState } from 'react'
import { paymentValidations } from '../../../utils/validations';
import { MdClose } from 'react-icons/md';
import { useFormik } from 'formik';
import { completePayment } from '../../../Firebase';
import { useUserAtom } from '../../../jotai/user';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({ close, data }) => {

    const { userState } = useUserAtom();
    const [expiryDate, setExpiryDate] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { handleChange, handleSubmit, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            cardNumber: "",
            cvv: ""
        },
        onSubmit: async () => {
            await setIsClicked(true);
            await setLoading(true);

            if (expiryDate.length === 5) {
                const options = {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: 'Europe/Istanbul',
                };

                const date = new Date().toLocaleString('tr-TR', options);
                const result = await completePayment({
                    UserId: userState.id,
                    ...data,
                    Date: date
                });
                if (result) {
                    await toast.success("Ödeme Başarılı Bir Şekilde Yapıldı.");
                    await navigate("/");
                    await close();
                    await handleReset();
                } else {
                    await toast.error("Ödeme Yapılırken Bir Hata Oluştu Lütfen Tekrar Deneyiniz");
                }
            }

            await setLoading(false)
        },
        validationSchema: paymentValidations
    });

    const handleExpiryDateChange = (text) => {
        if (expiryDate.length === 2) {
            const formattedText = text.replace(/(\d{2})/g, '$1/');
            setExpiryDate(formattedText.trim());
        } else {
            setExpiryDate(text);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full h-auto p-4 bg-white rounded-lg flex flex-col space-y-4 select-none">

            <div className={`w-full flex flex-row items-center pb-1 px-1 border-b border-gray-300`}>
                <div className={`flex flex-1 items-center text-black`}>
                    Ödeme Yap
                </div>

                <button type="button" onClick={() => close()} className={`p-2 rounded-lg hover:bg-gray-200`}>
                    <MdClose size={20} color="black" />
                </button>
            </div>

            <div className='flex flex-1 flex-col space-y-1'>
                <input
                    name="cardNumber"
                    maxLength={16}
                    className='w-full p-3 rounded-lg border border-black text-black placeholder-gray-500'
                    placeholder="Kart Numarası"
                    value={values.cardNumber}
                    onChange={handleChange("cardNumber")}
                />

                {errors.cardNumber && touched.cardNumber && (
                    <p className="w-full p-2 rounded-lg bg-red-100 text-red-700">
                        {errors.cardNumber}
                    </p>
                )}
            </div>

            <div className='w-full flex flex-row space-x-5'>
                <div className='flex flex-1 flex-col space-y-1'>
                    <input
                        maxLength={5}
                        className='w-full p-3 rounded-lg border border-black text-black placeholder-gray-500'
                        placeholder="Son Kullanma Tarihi"
                        value={expiryDate}
                        onChange={(value) => handleExpiryDateChange(value.currentTarget.value)}
                    />

                    {(isClicked && expiryDate.length !== 5) && (
                        <p className="w-full p-2 rounded-lg bg-red-100 text-red-700">
                            Lütfen Son Kullanma Tarihi Bilgisini Doğru Bir Şekilde Giriniz!
                        </p>
                    )}
                </div>

                <div className='flex flex-1 flex-col space-y-1'>
                    <input
                        maxLength={3}
                        name="cvv"
                        className='w-full p-3 rounded-lg border border-black text-black placeholder-gray-500'
                        placeholder="Cvv"
                        value={values.cvv}
                        onChange={handleChange("cvv")}
                    />

                    {errors.cvv && touched.cvv && (
                        <p className="w-full p-2 rounded-lg bg-red-100 text-red-700">
                            {errors.cvv}
                        </p>
                    )}
                </div>

            </div>

            {loading ?
                <div className="w-full flex items-center justify-center h-max p-2 bg-blue-400 rounded-lg text-white">
                    Loading ...
                </div> :
                <button type="submit" className="w-full flex h-max p-2 bg-blue-500 hover:bg-blue-600 items-center justify-center rounded-lg">
                    <p className="text-white font-bold">
                        Ödeme Yap
                    </p>
                </button>}
        </form>
    )
}

export default PaymentModal