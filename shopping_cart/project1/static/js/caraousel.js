const img_data = [
    {
        "img": "https://biddingfever.com/images/hero-items-3.jpg"
    },
    {
        "img": "https://template.getbazaar.io/_next/image?q=75&url=%2Fassets%2Fimages%2Fgadget-1%2Fbanner-6.jpg&w=750"
    },
    {
        "img": "https://assets.st-note.com/production/uploads/images/200114622/d74dc1c23c35a1a1fa183d6fbb81a585.png"
    },
    {
        "img": "https://usapawnandjewelry.com/assets/products/_categoryThumb2x/electronics_2021-05-18-193603_ylmw.jpg"
    },
    {
        "img": "https://new-edifier-us-oss.edifier.com/files/20240618/4a753ce8518c5e2139405c29a47a9f90.png"
    },
    
];

let startIndex = 0;
let endIndex = 4
let caraousel_box = document.getElementById("caraousel_box")
function handleSlide(){
    caraousel_box.innerHTML=""
    img_data.slice(startIndex, endIndex).map((val) => {
    caraousel_box.innerHTML += 
    `
    <div class = "pic" id = "pic">
        <img class = "img_crsl" src="${val.img}" alt="">
    </div>
    `;
    });
}
let position = 0;
function handleRightArrow(){
    position += 30;
    console.log(startIndex);
    console.log(endIndex);
    
    if(startIndex<= img_data.length-4 && endIndex>=img_data.length){
        startIndex = 0;
        endIndex = 4
        handleSlide()
        return
    }
    startIndex++;
    endIndex++;
    handleSlide()
    caraousel_box.style.transform = `translateX(-${position}%)`;
}

function handleLeftArrow(){
    position -= 30;
    console.log(startIndex);
    console.log(endIndex);
    if(startIndex>0){
        startIndex--;
        endIndex--; 
    }
    handleSlide()
    caraousel_box.style.transform = `translateX(-${position}%)`;

}
handleSlide()