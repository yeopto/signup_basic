const changePhone1 = () => {
    const phone1 = document.getElementById("cursor1").value
    if (phone1.length === 3) {
        document.getElementById("cursor2").focus()
    }
}

const changePhone2 = () => {
    const phone2 = document.getElementById("cursor2").value
    if (phone2.length === 4) {
        document.getElementById("cursor3").focus()
    }
}

const able1 = () => {
    const phone1 = document.getElementById("cursor1").value
    const phone2 = document.getElementById("cursor2").value
    const phone3 = document.getElementById("cursor3").value
    if (phone1.length=== 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById("mybutton1").disabled = false
        document.getElementById("mybutton1").style = "background-color: yellow; cursor: pointer;"
    } else {
        document.getElementById("mybutton1").disabled = true
        document.getElementById("mybutton1").style = "background-color: none;"
    }
}

let Interval;
let time = 180;
const getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    document.getElementById("mybutton1").disabled = true
    document.getElementById("mybutton2").style = "background-color: yellow; cursor: pointer;"
    document.getElementById("mybutton2").disabled = false;

    Interval = setInterval(function () {
        if (time >= 0) {
            let min = String(Math.floor(time / 60)).padStart(2, "0")
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("timer").innerText = `${min + ":" + sec}`
            time--
        } else {
            document.getElementById("mybutton1").style = "background-color: none;"
            document.getElementById("mybutton2").style = "background-color: none;"
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
    document.getElementById("join").style = "background-color: yellow; cursor: pointer;"
    document.getElementById("join").disabled = false
}

const check = () => {
    const email = document.getElementById("email").value
    const user = document.getElementById("user").value
    const pw = document.getElementById("password1").value
    const pw2 = document.getElementById("password2").value
    const country = document.getElementById("country").value
    const male = document.getElementById("male").checked
    const female = document.getElementById("female").checked

    let lastCheck = true
    if (email.includes("@") === false || email === "") {
        document.getElementById("error_email").innerText = "이메일이 올바르지 않습니다."
        lastCheck = false
    } else {
        document.getElementById("error_email").innerText = ""
    }

    if (user === "") {
        document.getElementById("error_user").innerText = "이름을 입력하지 않았습니다."
        lastCheck = false
    } else {
        document.getElementById("error_user").innerText = ""
    }

    if (pw === "") {
        document.getElementById("error_pw").innerText = "비밀번호를 입력해 주세요."
        lastCheck = false
    } else {
        document.getElementById("error_pw").innerText = ""
    }

    if (pw2 === "") {
        document.getElementById("error_pw2").innerText = "비밀번호를 입력해 주세요."
        lastCheck = false
    } else {
        document.getElementById("error_pw2").innerText = ""
    }

    if (pw !== pw2) {
        document.getElementById("error_pw").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error_pw2").innerText = "비밀번호가 일치하지 않습니다."
        lastCheck = false
    }

    if (country !== "서울" && country !== "인천" && country !== "경기") {
        document.getElementById("error_country").innerText = "지역을 선택해주세요."
        lastCheck = false
    } else {
        document.getElementById("error_country").innerText = ""
    }

    if (male === false && female === false) {
        document.getElementById("radio__check__message").innerText = "성별을 선택해 주세요."
        lastCheck = false
    } else {
        document.getElementById("radio__check__message").innerText = ""
    }

    if (lastCheck === true) {
        alert("가입을 축하합니다!")
    }
}