//change background color using JavaScript DOM

// steps


//Global  variables
let toastMsg = null

// 1. create onload handler
window.onload = function() {
    main()
}

//2. random HeXa color generator
function randomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

// 3. create main function
function main() {
    const root = document.getElementsByClassName('root')[0] // background
    const btn = document.getElementsByClassName('btn')[0] // button
    const output = document.getElementById('output') // show output 
    
    btn.addEventListener('click', function(){
        const bgColor = randomColor()
        root.style.backgroundColor = bgColor // change Background Color
        btn.style.color = bgColor // Change Button Text color 
         output.value = bgColor.toUpperCase()

    })

    //step 4: copy color code from output
    const copy = document.getElementById('copy')
    copy.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)

        //remove existing toast message
        if(toastMsg !== null){
            toastMsg.remove();
        }
        generateToastMsg(`${output.value} copied`)
    })

    // step 5: active toast message
    function generateToastMsg(msg){
        toastMsg = document.createElement('p')

        // step 6: create dynamic toast message (color code)
        toastMsg.innerText = msg
        document.body.appendChild(toastMsg)
        // toastMsg.classList.add("toast-message") // anther way to add class below
        toastMsg.className = 'toast-message toast-msg-in'
        console.log('color copied');

        // remove the toast message when user clicks inside the toast message
        toastMsg.addEventListener('click', function(){
            toastMsg.classList.remove('toast-msg-in');
            toastMsg.classList.add('toast-msg-out');


            // step 7: clear toast message
            // remove toast message permanently when user clicked  it.
            toastMsg.addEventListener("animationend", function(){
                toastMsg.remove();
                toastMsg = null;v // remove previous toast message
            })
        });

        setTimeout(() => {
            document.body.removeChild(toastMsg)
        }, 4000)
    }

    
    


}