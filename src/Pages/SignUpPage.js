import { SignUpBody } from "../Templates/SignUpTemplates/SignUpBody";
import { SignUpTop } from "../Templates/SignUpTemplates/SignUpTop";
import React from 'react';

export function SignUpPage() {

  

    return (
        <div>
            <div>
                <SignUpTop />
            </div>
            <div>
                <SignUpBody />
            </div>
        </div>

    );
}