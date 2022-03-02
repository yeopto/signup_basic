const email = document.getElementById("email");
const user = document.getElementById("user");
const pw = document.getElementById("password1");
const pw2 = document.getElementById("password2");
const country = document.getElementById("country");
const male = document.getElementById("male");
const female = document.getElementById("female");
const phone1 = document.getElementById("cursor1");
const phone2 = document.getElementById("cursor2");
const phone3 = document.getElementById("cursor3");
const myButton1 = document.getElementById("mybutton1");
const myButton2 = document.getElementById("mybutton2");

const changePhone1 = () => {
    if (phone1.value.length === 3) {
        phone2.focus();
    }
};

const changePhone2 = () => {
    if (phone2.value.length === 4) {
        phone3.focus();
    }
};

const able1 = () => {
    if (phone1.value.length=== 3 && phone2.value.length === 4 && phone3.value.length === 4) {
        myButton1.disabled = false;
        myButton1.style = "cursor: pointer;";
    } else {
        myButton1.disabled = true;
    }
};

let Interval;
let time = 180;
const getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;
    myButton1.disabled = true;
    myButton2.style = "cursor: pointer;";
    myButton2.disabled = false;

    Interval = setInterval(function () {
        if (time >= 0) {
            let min = String(Math.floor(time / 60)).padStart(2, "0");
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("timer").innerText = `${min + ":" + sec}`;
            time--;
        } else {
            myButton1.disabled = true;
            myButton2.disabled = true;
            document.getElementById("token").innerText = "000000";
            document.getElementById("timer").innerText = "03:00";
            
            clearInterval(Interval);
        }
    }, 1000);
};

const okMessage = () => {
    clearInterval(Interval);
    alert("인증이 완료되었습니다.");
    myButton2.innerText = "인증완료";
    myButton2.disabled = true;
};

const check = () => {
    const errorEmail = document.getElementById("error_email");
    const errorUser = document.getElementById("error_user");
    const errorPw = document.getElementById("error_pw");
    const errorPw2 = document.getElementById("error_pw2");
    const errorCountry = document.getElementById("error_country");
    const errorButton = document.getElementById("radio__check__message");
    let lastCheck = false;

    if (!email.value.includes("@") || email.value === "") {
        errorEmail.innerText = "이메일이 올바르지 않거나 입력하지 않았습니다.";
        return;
    } else {
        errorEmail.innerText = "";
    }

    if (user.value === "") {
        errorUser.innerText = "이름을 입력하지 않았습니다.";
        return;
    } else {
        errorUser.innerText = "";
    }

    if (pw.value === "") {
        errorPw.innerText = "비밀번호를 입력해 주세요.";
        return;
    } else {
        errorPw.innerText = "";
    }

    if (pw2.value === "") {
        errorPw2.innerText = "비밀번호를 입력해 주세요.";
        return;
    } else {
        errorPw2.innerText = "";
    }

    if (pw.value !== pw2.value) {
        errorPw2.innerText = "비밀번호가 일치하지 않습니다.";
        return;
    } else {
        errorPw2.innerText = "";
    }
    
    if (country.value === "지역을 선택하세요.") {
        errorCountry.innerText = "지역을 선택해주세요.";
        return;
    } else {
        errorCountry.innerText = "";
    }

    if (!male.checked && !female.checked) {
        errorButton.innerText = "성별을 선택해 주세요.";
        return;
    } else {
        errorButton.innerText = "";
    }

    lastCheck = true;

    if (lastCheck) {
        alert("가입을 축하합니다!");
    }
}