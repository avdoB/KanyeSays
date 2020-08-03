//words

let Quotes= [
    'Nothing in life is promised except death.',

'My greatest pain in life is that I will never be able to see myself perform live.',

'We all self-conscious. Im just the first to admit it.',

'My music isn’t just music — it’s medicine.',

'I refuse to accept other people’s ideas of happiness for me As if theres a one size fits all standard for happiness',

'They say you can rap about anything except for Jesus, that means guns, sex, lies, video tapes, but if I talk about God my record wont get played ',

'If you have the opportunity to play this game of life, you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',

' “For me, giving up is harder than trying.',

 'You weren’t perfect, but you made life worth it.',

 'I will go down as the voice of this generation, of this decade, I will be the loudest voice.' ,

 'People always say that you can’t please everybody. I think that’s a cop-out. Why not attempt it? ‘Cause think of all the people you will please if you try.'
];

/// function that randomises and displays words inside the html 

function displaySays(){
    let index=Math.floor(Math.random()*Quotes.length);
    let div=document.querySelector('#says');
    let says=`<div class="card">
    <p>${Quotes[index]}</p> 
    </div>
    `;
    div.innerHTML=says;
}


//event listener on the button

let btn=document.querySelector('.btn');
btn.addEventListener('click', displaySays);