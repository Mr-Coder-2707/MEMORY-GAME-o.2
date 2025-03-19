const emojis =["🙈","🙈","🙉","🙉","🐮","🐮","🐻","🐻","🐴","🐴","🐽",
"🐽","🦧","🦧","🦢","🦢"]
var shuf_emojis=emojis.sort(()=>(Math.random()>.5)? 2:-1);
for(var i=0; i<emojis.length;i++){
    let box =document.createElement('dive')
    box.className='item';
    box.innerHTML = shuf_emojis[i]
    box.onclick = function () {
        // Prevent clicking on already matched boxes
        if (this.classList.contains('boxMatch')) {
            return;
        }

        this.classList.add('boxOpen');
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (
                    document.querySelectorAll('.boxOpen')[0].innerHTML ==
                    document.querySelectorAll('.boxOpen')[1].innerHTML
                ) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        setTimeout(() => {
                            alert('🎉 You Win! 🎉');
                        }, 500); // Delay to show the final result before the alert
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}
