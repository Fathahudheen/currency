const select = document.querySelector(".select1");
// const  test = document.getElementById("aa");
const input = document.getElementById('input1');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

fetch("https://api.frankfurter.app/currencies")
.then((data) => data.json())
.then((data) =>{
    display(data);
    // console.log(data);
});
 
function display(data){
const entrie = Object.entries(data);
// console.log(entrie[0]);
//  alert(entrie);

for(var i=0;i<entrie.length;i++){
    // select.innerHtml += `<option value="${entrie[i][0]}">${entrie[i][0]}</option>`;
    var option1 = document.createElement("option");
    option1.text =entrie[i][0];
    option1.value = entrie[i][0];
    var option2 = document.getElementById('selectbox1');
    option2.appendChild(option1);
    var option4 = document.createElement("option");
    option4.text =entrie[i][0];
    option4.value = entrie[i][0];

    var option3 = document.getElementById('selectbox2');
    option3.appendChild(option4);


    // select.innerHtml += `<option value="selelct">selelct</option>`;
    // select[1].innerHtml += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
// console.log(test.innerHtml);
// alert(select.innerHtml);

    }
 }
btn.addEventListener("click",() => {
    let currenncy1 = document.getElementById('selectbox1').value;
    let currenncy2 = document.getElementById('selectbox2').value;
    let value = input.value;
   
    if(currenncy1 != currenncy2){
        convert(currenncy1,currenncy2,value)
    }
    else{
        alert("choose diffrent currencies !!!");
    }
});
function convert(currenncy1,currenncy2,value){
    const host = 'api.frankfurter.app';
    fetch(
        `https://${host}/latest?amount=${value}&from=${currenncy1}&to=${currenncy2}`
    )
      .then((val) => val.json())
      .then((val) => {
        console.log(Object.values(val));
        result.value = Object.values(val.rates);
      });} 
