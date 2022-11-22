import { useState } from "react"
import GenerateOTP from "./GenerateOTP"
import InputOTP from "./InputOTP"
import CountDownAnimation from "./CountDownAnimation"

import './OTP.scss'

const OPT = () => {

    const [orgOTPParent, setOrgOTPParent] = useState('');
    const [userOPTParent, setUserOPTParent] = useState('');
    const [isDisableBtn, setIsDisableBtn] = useState(false);

    const handleSubmitOTP = () => {
        if (!orgOTPParent) {
            alert('Please generate OTP...')
            return;
        }

        if (!userOPTParent) {
            alert('Please enter an OTP...')
            return;
        }

        if (+orgOTPParent === +userOPTParent) {
            alert('Correct OTP')
        } else {
            alert('Wrong OTP')
        }
    }

    return (
        <div className="otp-parent-container">
            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                setUserOPTParent={setUserOPTParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}

export default OPT