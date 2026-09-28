const prompt = require('prompt-sync')();

//To test the different functions go to the bottem of the code

// Creates a staricare of "#"
function stairCase(){
    let what = ''
    for(i=0;i<8;i++){
        what+="#"
        console.log(what)
    }
}

// Adding strings to numbers divisible by 3, 5, and both a the same time
function fizzBuzz(){
    for(i=1;i<=100;i++){
        console.log(i)
        if(Number.isInteger(i/5/3)){
            console.log("FizzBuzz")
        }else if(Number.isInteger(i/3)){
            console.log("fizz")
        }else if(Number.isInteger(i/5)){
            console.log("Buzz")
        }
    }
}

// Creates a grid of "#" depending on the users input of the value
function Grid(line){
    let row = ""
    for( i=1; i <= line; i++){
        for(x = 1; x <= line; x++){
            if((i + x) % 2 === 0){ 
                row += "#"
            }else{
                row += " "
            }
        }
        row += "\n"
    }
    console.log(row)
}

//
function numberingA(){
    //all numbers from 1 - 50
    for(x=1; x<=50; x++){
        console.log(x)
    }
    
    //all non negative numbers less than 25
    for(y=0; y<25;y++){
        console.log(y)
    }

    //all non negative odd numbers less than 25
    for(z=0;z<24;z++){
        z++
        console.log(z)
    }

    //all non negative numbers divisible by 3 that are less than 25
    for(a=0;a<25;a+=3){
        console.log(a)
    }

    //the multiples of 5 from 0-50
    for(b=0;b<=50;b+=5){
        console.log(b)
    }

    //multiples of 2 or multiples of 3, but not multiples of both 2 and 3.
    const result = []
    for(c=1;c<=50;c++){
        const div2 = (c % 2 == 0)
        const div3 = (c % 3 == 0)
        if(div2 != div3){
            result.push(c)
        }
    }
    console.log(result)
    
    //Multiples of 2 and 3, but not multiples of 12 (up to 100)
    const value = []
    for(d=1;d<=100;d++){
        const multi2 = (d % 2 ==0)
        const multi3 = (d % 3 ==0)
        const multi12 = (d % 12 ==0)
        if((multi2 || multi3) && !multi12){
            value.push(d)
        }
    }
    console.log(value)
}

function numberingD(){
    for(x=50; x>=1; x--){
        console.log(x)
    }
    
    //all non negative numbers less than 25
    for(y=24; y>0;y--){
        console.log(y)
    }

    //all non negative odd numbers less than 25
    for(z=23;z>0;z--){
        z-=2
        console.log(z)
    }

    //all non negative numbers divisible by 3 that are less than 25
    for(a=24;a>0;a-=3){
        console.log(a)
    }

    //the multiples of 5 from 0-50
    for(b=50;b>=0;b-=5){
        console.log(b)
    }

    //multiples of 2 or multiples of 3, but not multiples of both 2 and 3.
    const result = []
    for(c=50;c>=1;c--){
        const div2 = (c % 2 == 0)
        const div3 = (c % 3 == 0)
        if(div2 != div3){
            result.push(c)
        }
    }
    console.log(result)
    
    //Multiples of 2 and 3, but not multiples of 12 (up to 100)
    const value = []
    for(d=100;d>-1;d--){
        const multi2 = (d % 2 ==0)
        const multi3 = (d % 3 ==0)
        const multi12 = (d % 12 ==0)
        if((multi2 || multi3) && !multi12){
            value.push(d)
        }
    }
    console.log(value)
}

function table(num){
    for(x=0; x<=10; x++){
        let y = num*x
        console.log(`3*${x} = ${y}`)
    }
}
function calc(){
    let test = ""
    let option = false
    console.log("Welcome to the Calculator")
    while(option == false){
        test = Number(prompt(`Please select an option- \n\u2022 Press 1 to add\n\u2022 Press 2 to subtract\n\u2022 Press 3 to multiply\n\u2022 Press 4 to divide\n\u2022 Press 5 to quit: `))
        // This is for option 1
        if(test === 1){
            option = true
            let num1 = Number(prompt("+: Pick your first number: "))
            let num2 = Number(prompt("+: Now pick your second number to add on: "))
            if(isNaN(num1) || isNaN(num2)){
                console.log("Pick valid numbers")
                continue
            }else{
                option = true
                console.log(`Your total for ${num1} + ${num2} is ${num1 + num2}`)
            }
        }
        //if user picks option 2
        if(test===2){
            option = true
            let num3 = Number(prompt("-: Pick your first number: "))
            let num4 = Number(prompt("-: Now for your second number: "))
            if(isNaN(num3) || isNaN(num4)){
                console.log("Pick valid numbers")
                continue
            }else{
                option = true
                console.log(`This will come out to ${num3} - ${num4} which is ${num3 - num4}`)
            }
        }
        //if user picks option 3
        if(test===3){
            let num5 = Number(prompt("*: Pick your first number: "))
            let num6 = Number(prompt("*: Now for your second number: "))
            if(isNaN(num5) || isNaN(num6)){
                console.log("Pick valid numbers")
                continue
            }else{
                option = true
                console.log(`This will multiply ${num5} * ${num6} which is ${num5 * num6}`)
            }
        }
        //if user picks option 4
        if(test==4){
            let num7 = Number(prompt("/: Pick your first number: "))
            let num8 = Number(prompt("/: Now for your second number: "))
            if(isNaN(num7) || isNaN(num8)){
                console.log("Pick valid numbers")
                continue
            }else{
                option = true
                console.log(`This will divide ${num7} / ${num8} which is ${num7 / num8}`)
            }
        }
        //if the user decides to quit
        if(test===5){
            break
        }
    }
}

//The section below are all the functions. Just undo the slashes to reveal the code

// stairCase()
// fizzBuzz()
// Grid(8)
// numberingA()
//numberingD()
//table(3) //interchangeable with 17
calc()