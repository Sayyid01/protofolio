function changeSectiontwo(){
    let section1 = document.getElementById("homePage");
    section1.className = "hidden";
    let section2 = document.getElementById("aboutMe");
    section2.className ="show";
}

function backSectionOne(){
    let section1 = document.getElementById("homePage");
    section1.className = "show";
    let section2 = document.getElementById("aboutMe");
    section2.className ="hidden";
}

function changeImageOnHover(){
    let img = document.getElementById('imgHomeButton');
    let start = img.src;
    let hover = img.getAttribute('data-hover'); //specified in img tag

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; } //to revert back to start
}