import React from 'react';
import { Link } from 'react-router-dom';

export function IndexPage() {

    return (
        <div>

            <div>
                인덱스
            </div>
            <div>
                <Link to="/flow/login">로그인하러가기</Link>
                <Link to="/flow/signup">회원가입하러가기</Link>
            </div>
        </div>
    );
}