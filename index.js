function suBmit(){
    let infld = document.querySelectorAll("input");
    let textfld = document.querySelectorAll("textarea");
    errorSate(infld,textfld);
}

function errorSate(...fElement){
    fElement.forEach((el)=>{
        el.forEach((item)=>{
            let text;
        if (item.value == ""){
            text = "Please fill out the form";
            item.value = text;
            item.style.color = "red";
        }
        else{
            text = "";
            item.value = text;
            item.style.color = "black";
        }
        })
    })
}

let text = "aablabbablachhchla";
let abc = {};
for (let i = 0; i < text.length; i++) {
    console.log(abc[text[i]])
    abc[text[i]] = (abc[text[i]] ? (abc[text[i]] + 1) : 1);
};
console.log(abc)
