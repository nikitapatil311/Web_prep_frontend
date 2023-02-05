const starsE1 = document.querySelectorAll(".fa-star");

const emojiE1 = document.querySelectorAll(".far");


const colors = ["red", "orange", "pink", "blue","green"];


updateRating(0);

starsE1.forEach((starE1, index ) =>{
    starE1.addEventListener("click", ()=>{
    updateRating(index)

    });
});

function updateRating(index){
    starsE1.forEach((starE1, idx)=>{

        if(idx < index + 1){
            starE1.classList.add("active");
        }else{
            starE1.classList.remove("active");
        }


    });
    emojiE1.forEach(emojiE1=>{
        emojiE1.style.transform = `translateX(-${index * 50}px)`;
        emojiE1.style.color = colors[index];
    });
}