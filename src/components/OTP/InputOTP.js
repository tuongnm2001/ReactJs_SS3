import { useReducer, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {

    const childRef = useRef();
    const [otp, setOtp] = useState('')

    const handleChange = (OtpInput) => {
        setOtp(OtpInput);
        props.setUserOPTParent(otp);
    }

    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }

    const handleClearBtn = () => {
        childRef.current.resetTimer();
    }

    return (
        <div className="input-otp-container">
            <div className="title">Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={'input-customize'}
            />
            <div className="timer">
                {/* <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                /> */}

                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef}
                />
            </div>

            <div className="action">
                <button className="clear" disabled={!props.isDisableBtn} onClick={() => handleClearBtn()}>Clear</button>
                <button className="confirm" disabled={props.isDisableBtn} onClick={() => handleConfirmOTP()}>Confirm</button>
            </div>
        </div>
    )
}

export default InputOTP;