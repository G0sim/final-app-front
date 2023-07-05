// import { useEffect, useState } from "react";
// import { useRef, useState } from "react";

// //타이머 컴포넌트
// export function Timer() {

//     const [min, setMin] = useState(3);
//     const [sec, setSec] = useState(0);
//     const time = useRef(180);
//     const timerId = useRef(null);

//     useEffect(() => {
//         timerId.current = setInterval(() => {
//             setMin(parseInt(time.current / 60));
//             setSec(time.current % 60);
//             time.current -= 1;
//         }, 1000);

//         return () => clearInterval(timerId.current);

//     }, []);

//     //만약 타임아웃이 발생했을 경우
//     useEffect(() => {
//         if (time.current <= 0) {
//             clearInterval(timerId.current);
//             //dispatch event
//         }

//     }, [sec]);


//     return (
//       <div>
//         {min} : {sec}
//       </div>
//     );
// }