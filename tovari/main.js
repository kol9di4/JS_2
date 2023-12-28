var cards = document.querySelectorAll(".card-section div");
var itog = document.querySelector("span");



for (var i = 0; i <cards.length; i++ )
{
    cards[i].onclick = function(){
        this.classList.toggle('selected');
        schet ();
    }
} 

function schet (){
    var cost = 0;
    for (var i = 0; i <cards.length; i++ )
    {
        if (cards[i].classList.contains('selected'))
            cost += parseFloat(cards[i].lastElementChild.innerHTML);
    } 
    itog.innerHTML = cost;
}
