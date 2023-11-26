import { useFormik } from "formik";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { login } from "../../../Firebase";
import { loginValidations } from "../../../utils/validations";
import { useUserAtom } from "../../../jotai/user";
import toast from "react-hot-toast";
import { useModalAtom } from "../../../jotai/modal";

const LoginModal = ({ close }) => {

    const [loading, setLoading] = useState(false);
    const { setUserData } = useUserAtom();
    const { closeModal } = useModalAtom();

    const { handleChange, handleSubmit, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        onSubmit: async (values) => {
            await setLoading(true);

            const user = await login(values.Email, values.Password);

            if (user) {
                console.log(user)
                await setUserData({
                    id: user.uid,
                    email: user.email
                })

                await handleReset();
                toast.success("Başarılı bir şekilde giriş yapıldı");
                await closeModal();
            } else {
                toast.error("Girdiğiniz Bilgileri Kullanan Bir Kullanıcı Bulunamadı. Lütfen Bilgilerinizi Kontrol Ediniz.")
            }

            await setLoading(false);
        },
        validationSchema: loginValidations
    });

    return (
        <form onSubmit={handleSubmit} className="w-full h-auto p-4 bg-white rounded-lg flex flex-col space-y-4 select-none">

            <div className={`w-full flex flex-row items-center pb-1 px-1 border-b border-gray-300`}>
                <div className={`flex flex-1 items-center text-black`}>
                    Giriş Yap
                </div>

                <button type="button" onClick={() => close()} className={`p-2 rounded-lg hover:bg-gray-200`}>
                    <MdClose size={20} color="black" />
                </button>
            </div>

            <div className="flex flex-1 flex-col space-y-2 p-2 overflow-y-auto">
                <input
                    className={`w-full md:w-96 p-2 border bg-white border-gray-300 rounded-lg`}
                    placeholder={"Email adresiniz"}
                    value={values.Email}
                    onChange={handleChange("Email")}
                    type="email"
                />
                {errors.Email && touched.Email &&
                    <div className="w-full bg-red-100 text-red-700 rounded-lg p-2">
                        {errors.Email}
                    </div>}
            </div>

            <div className="flex flex-1 flex-col space-y-2 p-2 overflow-y-auto">
                <input
                    className={`w-full md:w-96 p-2 border bg-white border-gray-300 rounded-lg`}
                    placeholder={"Şifreniz"}
                    value={values.Password}
                    onChange={handleChange("Password")}
                    type="password"
                />
                {errors.Password && touched.Password &&
                    <div className="w-full bg-red-100 text-red-700 rounded-lg p-2">
                        {errors.Password}
                    </div>}
            </div>

            {loading ?
                <div className="w-full flex items-center justify-center h-max p-2 bg-blue-400 rounded-lg text-white">
                    Loading ...
                </div> :
                <button type="submit" className="w-full flex h-max p-2 bg-blue-500 hover:bg-blue-600 items-center justify-center rounded-lg">
                    <p className="text-white font-bold">
                        Giriş Yap
                    </p>
                </button>}
        </form>
    )
}

export default LoginModal