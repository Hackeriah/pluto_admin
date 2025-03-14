'use client';
import Image from 'next/image';
import { CiLock } from 'react-icons/ci';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiHide } from 'react-icons/bi';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { authenticateUser } from '../api/auth';

const logo = 'vectors/loginLogo.svg';
const inbox = 'vectors/to_inbox.svg';

interface AuthFormProps {}

export default function AuthForm({}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage('');

    const userRole = authenticateUser(email, password);

    if (userRole) {
      switch (userRole) {
        case 'systemadmin':
          router.push('/system_admin');
          break;
        case 'areaadmin':
          router.push('/area_admin');
          break;
        case 'stateadmin':
          router.push('/state_admin');
          break;
        case 'zoneadmin':
          router.push('/zone_admin');
          break;
        default:
          break;
      }
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    
    setIsModalOpen(false);
    setIsRegister(false); 
  };

  return (
    <div
      className={`relative h-screen w-screen bg-[url('/vectors/loginBG.svg')] bg-cover bg-center flex items-center justify-center ${isModalOpen ? 'bg-black bg-opacity-80' : ''}`}
    >
      
      {isModalOpen && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="flex flex-col px-[2vw] h-[15vw] bg-white rounded-2xl items-center justify-center w-fit z-60">
            <div className="w-[15%]">
              <Image src={inbox} alt="Inbox" height={30} width={30} layout="responsive" />
            </div>
            <p className="font-bold text-[2vw]">You've Got Mail</p>
            <p className="text-[#202224] mb-[1.7vw] text-[0.9vw] font-medium">
              Please check your mail to find your login details
            </p>
            <button
              onClick={handleModalClose} 
              className="bg-[#319D38] text-[1.2vw] text-white py-[0.6vw] px-[1vw] rounded-[10px]"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      
      {!isModalOpen && (
        <div className="relative z-10 h-fit w-[30%] bg-white rounded-2xl p-[3%] text-center flex items-center justify-center">
          <form
            className="mx-[1%] flex flex-col gap-[0.7vw]"
            onSubmit={isRegister ? handleRegister : handleLogin} 
          >
            <div className="w-full px-[30%]">
              <Image src={logo} width={30} height={30} alt="Logo" layout="responsive" />
            </div>

            <div className="flex flex-col gap-[1.6vw]">
              <div className="flex flex-col gap-[1vw]">
                <h3 className="text-[1.8vw] font-bold">
                  {isRegister ? 'Complete Registration' : 'Login to Account'}
                </h3>
                <p className="text-[1vw]">
                  {isRegister ? '' : 'Please enter your email and password to continue'}
                </p>
              </div>

              <div className="flex flex-col gap-[0.4vw]">
                <div className="flex flex-col gap-[1.6vw]">
                  <div className="relative">
                    <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#319D38] text-[1.4vw]" />
                    <input
                      className="w-full h-[2.8vw] text-[1vw] bg-[#EAF5EB] rounded-bl-[20px] text-[#319D38] pl-[3vw] hover:border-x-[#319D38] hover:border-b-[#319D38] rounded-r-[20px] border hover:border-[#EAF5EB] hover:border-solid placeholder:text-[#319D38]"
                      placeholder="Type in your Email Address"
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {!isRegister && (
                    <div className="relative">
                      <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#319D38] text-[1.4vw]" />
                      <input
                        className="w-full h-[2.8vw] bg-[#EAF5EB] rounded-bl-[20px] text-[#319D38] pl-[3vw] pr-[3vw] hover:border-x-[#319D38] hover:border-b-[#319D38] rounded-r-[20px] border hover:border-[#EAF5EB] hover:border-solid placeholder:text-[#319D38]"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <BiHide
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#319D38] text-[1.4vw] cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-[1vw] font-medium mt-2">{errorMessage}</p>
                )}

                {!isRegister && (
                  <div className="flex justify-end">
                    <p className="text-right w-fit text-[1vw] border-solid border-b border-b-black hover:text-[#319D38] hover:border-b-[#319D38]">
                      Forgot Password?
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col text-center items-center gap-[0.4vw]">
                <button className="w-full rounded-xl text-white font-semibold p-[0.4vw] bg-[#319D38] hover:bg-[#3dc446] text-[1.2vw]">
                  {isRegister ? 'Register' : 'Login Now'}
                </button>

                <p className="text-[1vw]">Or</p>

                <p
                  className="text-[1vw] text-center font-[500] border-b-black hover:text-[#319D38] hover:border-b-[#319D38] cursor-pointer"
                  onClick={toggleForm}
                >
                  {isRegister ? 'Log in into your Admin' : 'Complete Registration'}
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
