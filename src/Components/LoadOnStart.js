import { useResetRecoilState } from "recoil";


//프론트에서 관리하는 session
export function LoadOnStart(){
    const [jwt, SetJwt] = useResetRecoilState(jwtState);
    
    if(sessionStorage.getItem("authToken")){
        SetJwt(session.getItem("authToken"))
    }

    return(
       <>
       </>
    );
}