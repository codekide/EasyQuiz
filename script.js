let count = 0; // เอาไว้นับคะแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1; // count = count + 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง PIM ก่อตั้งเมื่อปี 2550";
        result.style.color = 'green';
        count++; // บวกคะแนนเพิ่ม 1 คะแนน ถ้ากดถูก
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }

    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"
    count = 0;
}
 