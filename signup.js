const email = document.getElementById("email")
const user = document.getElementById("user")
const pw = document.getElementById("password1")
const pw2 = document.getElementById("password2")
const country = document.getElementById("country")
const male = document.getElementById("male")
const female = document.getElementById("female")
const phone1 = document.getElementById("cursor1")
const phone2 = document.getElementById("cursor2")
const phone3 = document.getElementById("cursor3")

const changePhone1 = () => {
    if (phone1.value.length === 3) {
        phone2.focus()
    }
}

const changePhone2 = () => {
    if (phone2.value.length === 4) {
        phone3.focus()
    }
}

const able1 = () => {
    if (phone1.value.length=== 3 && phone2.value.length === 4 && phone3.value.length === 4) {
        document.getElementById("mybutton1").disabled = false
        document.getElementById("mybutton1").style = "cursor: pointer;"
    } else {
        document.getElementById("mybutton1").disabled = true
    }
}

let Interval;
let time = 180;
const getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    document.getElementById("mybutton1").disabled = true
    document.getElementById("mybutton2").style = "cursor: pointer;"
    document.getElementById("mybutton2").disabled = false;

    Interval = setInterval(function () {
        if (time >= 0) {
            let min = String(Math.floor(time / 60)).padStart(2, "0")
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("timer").innerText = `${min + ":" + sec}`
            time--
        } else {
            document.getElementById("mybutton1").disabled = true
            document.getElementById("mybutton2").disabled = true
            document.getElementById("token").innerText = "000000"
            document.getElementById("timer").innerText = "03:00"
            
            clearInterval(Interval)
        }
    }, 1000)
}

const okMessage = () => {
    clearInterval(Interval)
    alert("인증이 완료되었습니다.")
    document.getElementById("mybutton2").innerText = "인증완료"
    document.getElementById("mybutton2").disabled = true
}

const check = () => {

    let lastCheck = false
    if (!email.value.includes("@") || email.value === "") {
        document.getElementById("error_email").innerText = "이메일이 올바르지 않습니다."
        return;
    } else {
        document.getElementById("error_email").innerText = ""
    }

    if (user.value === "") {
        document.getElementById("error_user").innerText = "이름을 입력하지 않았습니다."
        return;
    } else {
        document.getElementById("error_user").innerText = ""
    }

    if (pw.value === "") {
        document.getElementById("error_pw").innerText = "비밀번호를 입력해 주세요."
        return;
    } else {
        document.getElementById("error_pw").innerText = ""
    }

    if (pw2.value === "") {
        document.getElementById("error_pw2").innerText = "비밀번호를 입력해 주세요."
        return;
    } else {
        document.getElementById("error_pw2").innerText = ""
    }

    if (pw.value !== pw2.value) {
        document.getElementById("error_pw2").innerText = "비밀번호가 일치하지 않습니다."
        return;
    } else {
        document.getElementById("error_pw2").innerText = ""
    }
    
    if (country.value === "지역을 선택하세요.") {
        document.getElementById("error_country").innerText = "지역을 선택해주세요."
        return;
    } else {
        document.getElementById("error_country").innerText = ""
    }

    if (!male.checked && !female.checked) {
        document.getElementById("radio__check__message").innerText = "성별을 선택해 주세요."
        return;
    } else {
        document.getElementById("radio__check__message").innerText = ""
    }

    lastCheck = true

    if (lastCheck) {
        alert("가입을 축하합니다!")
    }
}