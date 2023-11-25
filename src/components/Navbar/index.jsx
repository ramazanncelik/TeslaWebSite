import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaCompressAlt, FaHome, FaListUl, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { MdClose, MdLogout } from 'react-icons/md'
import Modal from '../Modal';
import { useUserAtom } from '../../jotai/user';
import { useModalAtom } from '../../jotai/modal';
import { logout } from '../../Firebase';

const Navbar = () => {

  const location = useLocation();
  const { modalState, openModal } = useModalAtom();
  const { userState, setUserData } = useUserAtom();
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [profileLinkMenuIsVisible, setProfileLinkMenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const loginModalOpen = async () => {
    await setMenuIsVisible(false);
    openModal('login-modal', false)
  }

  const signupModalOpen = async () => {
    await setMenuIsVisible(false);
    openModal('signup-modal', false)
  }

  const comparecarModalOpen = async () => {
    await setMenuIsVisible(false);
    openModal('comparecar-modal', false)
  }

  const signOut = async () => {
    await logout();
    await setUserData({
      id: "",
      email: ""
    })
  }

  return (
    <nav className={`w-full h-max select-none absolute top-0 z-50 px-[10%] ${location.pathname === "/" ? "backdrop-blur-0" : "bg-white border-b"}`}>

      {modalState.open && <Modal name={modalState.open} data={modalState.data} />}

      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2">
        <div className='flex flex-1 flex-row space-x-5 items-center'>
          <NavLink to={"/"} className={`text-xl items-center font-semibold ml-2 ${location.pathname === "/" ? "text-white" : "text-black"}`}>TESLA</NavLink>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <button onClick={() => toggleMenu()} className={`px-4 py-2 rounded-lg ${location.pathname === "/" ? "hover:bg-gray-100 text-white hover:text-black" : "hover:bg-slate-700 text-black hover:text-white"}`}>
            Menü
          </button>
        </div>

        {menuIsVisible &&
          <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto w-64 border-r flex flex-col bg-white border-slate-300`}>
            <div className={`w-full flex flex-row items-center pb-1 mb-1 px-1 border-b border-slate-300`}>
              <div className={`flex flex-1 items-center text-black`}>
                Menü
              </div>

              <button onClick={() => toggleMenu()} className={`p-2 rounded-lg hover:bg-gray-100`}>
                <MdClose size={20} color="black" />
              </button>
            </div>

            <ul className='w-full flex flex-col space-y-2'>

              <li>
                <NavLink onClick={() => setMenuIsVisible(false)} to={"/"} className={`p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100`}>
                  <FaHome size={20} />
                  <span>Ev</span>
                </NavLink>
              </li>
              <li>
                <div onClick={() => { setMenuIsVisible(false); comparecarModalOpen() }} className={`p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100 cursor-pointer`}>
                  <FaCompressAlt size={20} />
                  <span>Araç Karşılaştır</span>
                </div>
              </li>
              {userState.id !== "" ?
                <>
                  <li>
                    <button onClick={() => setProfileLinkMenuIsVisible(!profileLinkMenuIsVisible)} className={`w-full rounded-lg hover:bg-gray-100`}>
                      <div className={`flex flex-row items-center w-full p-2 text-black`}>
                        <span className='flex flex-1 flex-row space-x-4'>
                          <span>
                            Hesap
                          </span>
                        </span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </div>
                    </button>
                    {profileLinkMenuIsVisible &&
                      <ul className="pl-4 space-y-2">
                        <li>
                          <NavLink onClick={() => setMenuIsVisible(false)} to={"/orders"} className={`w-full p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100`}>
                            <FaListUl size={20} />
                            <span>Siparişlerim</span>
                          </NavLink>
                        </li>
                        <li>
                          <button onClick={() => signOut()} className={`w-full p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100`}>
                            <MdLogout size={20} />
                            <span>Çıkış Yap</span>
                          </button>
                        </li>
                      </ul>}
                  </li>
                </>
                :
                <>
                  <li>
                    <button onClick={() => loginModalOpen()} className={`w-full p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100`}>
                      <FaSignInAlt size={20} />
                      <span>Giriş Yap</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => signupModalOpen()} className={`w-full p-2 rounded-lg flex flex-row items-center space-x-4 text-black hover:bg-gray-100`}>
                      <FaUserPlus size={20} />
                      <span>Kayıt Ol</span>
                    </button>
                  </li>
                </>
              }
            </ul>
          </div>}
      </ div>

    </nav>
  );
}

export default Navbar;