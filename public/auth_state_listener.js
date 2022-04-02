import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // alert("로그인 되어있는 유저 : " + user.displayName);
        // location.href = "./mypage.html";
        // ...
    } else {
        alert("로그인 되어있는 유저 없음");

        // User is signed out ...
    }
});
// [END auth_state_listener_modular]