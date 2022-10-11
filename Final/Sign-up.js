// 핸드포번호 자동 넘김

const changeFocus1 = () => {

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }

}

const changeFocus2 = () => {

    let phone1 = document.getElementById("p2").value
    if(phone1.length === 4) {
        document.getElementById("p3").focus()
    }

}

// 인증번호 전송 활성화

const checkValidation = () => {
    let phone3 = document.getElementById("p3").value

    if(phone3.length === 4) {
        document.getElementById("upper__btn").disabled = false
    }else {
        document.getElementById("upper__btn").disabled = true
    }    
}

// 인증번호 타이머

let isStarted = false;

let auth = () => {
    if(isStarted === false) {
        // 타이머가 작동중이 아닐 때
        isStarted = true
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
        document.getElementById("bottom__btn").disabled = false
        document.getElementById("bottom__btn").style = 'background-color:#0068ff;color:#FFFFFF;'
        
        
        let time = 5
        let timer        
        
        timer  = setInterval(function(){
        
            if(time >= 0) {
                let min = Math.floor( time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time -1
            } else {
                document.getElementById("upper__btn").disabled =true
                
                let min = "3"
                let sec = "00"
                document.getElementById("timer").innerText = min + ":" + sec
                document.getElementById("target").innerText = "000000"
                isStarted = false
                clearInterval(timer)
                document.getElementById("bottom__btn").disabled =true
                document.getElementById("bottom__btn").style =""
            }
            
    },1000) 
        
        
}else { 

    }
}

//인증완료 알림창

let show = () => {
    clearInterval(timer)
    document.getElementById("bottom__btn").style = "background-color:#FFFFFF;"
    document.getElementById("bottom__btn").setAttribute("disabled",true)
    document.getElementById("bottom__btn").innerText = "인증완료"
    alert("인증이 완료되었습니다")
    document.getElementById("bottom__btn").disabled =true
    document.getElementById("bottom__btn").style =""
    clearInterval(timer)
    document.getElementById("btn__signup").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("btn__signup").disabled = false
    document.getElementById("region").disabled = false
}


//에러메시지

let finish = () => {
    let t1 = document.getElementById("email").value 
    let t2 = document.getElementById("name").value
    let t3 = document.getElementById("pw1").value
    let t4 = document.getElementById("pw2").value
    let t5 = document.getElementById("region").value
    let t6 = document.getElementById("gender__female").checked
    let t7 = document.getElementById("gender__male").checked


    let isValid = true
    
    

    if(t1.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다." 
        isValid = false       
    } else {
        document.getElementById("error__email").innerText = ""
    }
    
    if(t2 === ""){
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }
        

    if(t3=== ""){
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error__pw1").innerText = ""
    }
   
    if(t4 === ""){
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(t3 !== t4) {
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(t5 === "지역을 선택하세요" ) {
        document.getElementById("error__region").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__region").innerText = ""
    }

    if(t6 === false && t7 === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }
    
    if( isValid === true ) {
        alert("코드캠프 가입을 축하합니다.")
    }    
}



