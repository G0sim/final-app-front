import React, { useEffect } from 'react';
import '../../Css/SignUp.css';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REST_SERVER_ADDRESS } from '../Constant';


//회원가입 폼
export function SignUpForm() {

    const [availalbeFlag, setAvailableFlag] = useState(0);

    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const verifyBtnRef = useRef();

    const navigate = useNavigate();

    //======타이머 처리 이벤트 ====

    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const time = useRef(180);
    const timerId = useRef(null);
    

    useEffect(() => {
        timerId.current = setInterval(() => {
            setMin(parseInt(time.current / 60));
            setSec(time.current % 60);
            time.current -= 1;
        }, 1000);

        return () => clearInterval(timerId.current);

    }, []);

    //만약 타임아웃이 발생했을 경우
    useEffect(() => {
        if (time.current <= 0) {
            clearInterval(timerId.current);
            //dispatch event
        }

    }, [sec]);

    //===이벤트 처리 코드===
    //사용자가 이메일 란에 값 입력시, 사용 가능 여부를 확인하는 API통신처리
    const emailChangeHandle = (evt) => {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(evt.target.value)) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET",
                REST_SERVER_ADDRESS + "/api/v1/user/available?email=" + emailRef.current.value, false);
            xhr.send();
            if (xhr.status === 200) {
                // verifyBtnRef.current.disabled = false;
                setAvailableFlag(1);
            } else {
                // verifyBtnRef.current.disabled = true;
                setAvailableFlag(-1);
            }

        } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(evt.target.value) && emailRef.current.value !== null) {
            setAvailableFlag(2);

        } else {
            // verifyBtnRef.current.disabled = true;
            setAvailableFlag(0);
        }
    }
    //인증메일 요청시에 인증 메일을 발송하는 API
    const verifyBtnClickHandle = (evt) => {

        setAvailableFlag(3);
    }


    return (
        <div className='main'>
            <div className='q1'>
                <span className='t1'>이메일</span>
                <div className='q2'>
                    <input className='blank1' type="text" name="email" ref={emailRef}
                        onChange={emailChangeHandle} />
                    <div>
                        <button className='but1' onClick={verifyBtnClickHandle}>이메일 인증</button>
                    </div>
                </div>
                {availalbeFlag === 1 && <div className='t2'> 사용가능한 이메일입니다. </div>}
                {availalbeFlag === -1 && <div className='t2'>이미 사용중인 이메일입니다.</div>}
                {availalbeFlag === 2 && <div className='t2'>이메일 형식이 아닙니다</div>}
            </div>
            <div className='q1'>
                {availalbeFlag === 3 &&
                    <span className='t1'>이메일 인증하기 <span className='t3'>(남은 인증 시간 : {min} : {sec}) </span></span>
                }
                <div className='q2'>

                    {availalbeFlag === 3 &&
                        <input className='blank1' placeholder='인증번호' name="verifycode" />
                    }
                    <div>
                        {availalbeFlag === 3 &&
                            <button className='but1'>인증하기</button>

                        }
                    </div>
                </div>
            </div>
            <div className='q1'>
                <span className='t1'>비밀번호</span>
                <div className='q2'>
                    <input className='blank2' type='password' />
                </div>
                <span className='t1'>비밀번호확인</span>
                <div className='q2'>
                    <input className='blank2' type='password' />
                </div>
            </div>
            <div>
                <div className='q1'>
                    <span className='t1' name="name">닉네임</span>
                    <div className='q2'>
                        <input className='blank2' />
                    </div>
                </div>
            </div>
            <div className='q3'>
                <button className='but2'>회원가입하기</button>
            </div>
        </div>
    );
}