const btns = document.querySelectorAll('.btn');
const operation = document.querySelector('.operation')
const result = document.querySelector('.result')



btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let op = ""
        op = e.currentTarget.textContent 
        operation.textContent += op + " " 
    })
})