import { useState } from "react";
import { signUpValidations } from '../../../utils/validations'
import { register } from '../../../Firebase/index'
import { MdClose } from "react-icons/md";
import { useFormik } from "formik";

const SignupModal = ({ close }) => {

    const [loading, setLoading] = useState(false)

    const { handleChange, handleSubmit, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            Email: "",
            Password: "",
            PasswordConfirm: "",
        },
        onSubmit: async () => {
            await setLoading(true);

            await register(values.Email, values.Password);
            await handleReset();

            await setLoading(false);
        },
        validationSchema: signUpValidations
    });

    return (
        <form onSubmit={handleSubmit} className="w-full h-auto p-4 bg-white rounded-lg flex flex-col space-y-4 select-none">

            <div className={`w-full flex flex-row items-center pb-1 px-1 border-b border-gray-300`}>
                <div className={`flex flex-1 items-center text-black`}>
                    Kayıt Ol
                </div>

                <button type="button" onClick={() => close()} className={`p-2 rounded-lg hover:bg-gray-200`}>
                    <MdClose size={20} color="black" />
                </button>
            </div>

            <div className="flex flex-1 flex-col space-y-2 px-2">
                <input
                    className={`w-full md:w-96 p-2 border bg-white border-gray-300 rounded-lg`}
                    placeholder={"Email adresi"}
                    value={values.Email}
                    onChange={handleChange("Email")}
                    type="email"
                />
                {errors.Email && touched.Email &&
                    <div className="w-full bg-red-100 text-red-700 rounded-lg p-2">
                        {errors.Email}
                    </div>}
            </div>

            <div className="flex flex-1 flex-col space-y-2 px-2">
                <input
                    className={`w-full md:w-96 p-2 border bg-white border-gray-300 rounded-lg`}
                    placeholder={"Şifre"}
                    value={values.Password}
                    onChange={handleChange("Password")}
                    type="password"
                />
                {errors.Password && touched.Password &&
                    <div className="w-full bg-red-100 text-red-700 rounded-lg p-2">
                        {errors.Password}
                    </div>}
            </div>

            <div className="flex flex-1 flex-col space-y-2 px-2">
                <input
                    className={`w-full md:w-96 p-2 border bg-white border-gray-300 rounded-lg`}
                    placeholder={"Şifre Tekrarı"}
                    value={values.PasswordConfirm}
                    onChange={handleChange("PasswordConfirm")}
                    type="password"
                />
                {errors.PasswordConfirm && touched.PasswordConfirm &&
                    <div className="w-full bg-red-100 text-red-700 rounded-lg p-2">
                        {errors.PasswordConfirm}
                    </div>}
            </div>

            {loading ?
                <div className="w-full flex items-center justify-center h-max p-2 bg-blue-400 rounded-lg text-white">
                    Loading ...
                </div> :
                <button type="submit" className="w-full h-max p-2 bg-blue-500 hover:bg-blue-600 items-center justify-center rounded-lg">
                    <p className="text-white font-bold">
                        Kayıt Ol
                    </p>
                </button>}
        </form>
    )
}

export default SignupModal;