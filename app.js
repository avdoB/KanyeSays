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
    
 ' The music and the clothing are just as important. Thats what makes you hip hop. You show people that youre hip hop by what you wear',

'You aint got the answers Sway!';
    
'In response to Sway suggesting he start a clothing company on his own.',
    
'I hate when Im on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle',
    
'I still think I am the greatest.',
    
'Accepting the Billboard Music Award for Artist of the Year',
    
'Yo, Taylor, Im really happy for you, Ima let you finish, but Beyoncé had one of the best videos of all time! One of the best videos of all time',
    
'Im just giving of my body on the stage and putting my life at risk, literally. [...] And I think about it. I think about my family and I’m like, wow, this is like being a police officer or something, in war or something.'

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
