import { LogInBody } from "../Templates/LogInTemplate/LogInBody";
import { LogInTop } from "../Templates/LogInTemplate/LogInTop";
import React from 'react';

export function LogInPage() {
    return (
        <div>
            <div>
                <LogInTop />
            </div>
            <div>
                <LogInBody />
            </div>
        </div>
    );
}