function calculateBmi(peso, altura) { 
    let bmi = peso/(altura**2);
    if (bmi >= 24.9) { 
        console.log('Your BMI is ' + bmi + ' You are fat' ); }
    if (bmi < 24.9 && bmi > 18.5) {
            console.log('Your BMI is ' + bmi + ' You are ok... have to do some diet') }

        
          
            
        
    }



console.log(calculateBmi(86, 1.76))