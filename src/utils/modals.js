import CompareCarModal from "../components/Modal/CompareCarModal";
import LoginModal from "../components/Modal/LoginModal";
import PaymentModal from "../components/Modal/PaymentModal";
import SignupModal from "../components/Modal/SignupModal";

const modals = [
    {
        name: 'login-modal',
        element: LoginModal
    }, {
        name: 'signup-modal',
        element: SignupModal
    }, {
        name: 'comparecar-modal',
        element: CompareCarModal
    }, {
        name: 'payment-modal',
        element: PaymentModal
    }
];

export default modals;