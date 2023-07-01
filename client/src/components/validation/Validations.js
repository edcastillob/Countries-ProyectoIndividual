export const  Validations = (activityData) =>{
const regexNotNum =  /\d/;
const regexYesNum =  /^[0-9]+$/;

  const errors = {};

  if (!activityData.name) {
    errors.name = 'Ingrese actividad';
  }
else  if (regexNotNum.test(activityData.name)){
    errors.name = 'La actividad no puede contener números';
  }

  if(activityData.difficulty === 'x'){
    errors.difficulty = 'Debe seleccionar una dificultad';
  }
  
  

// if(typeof(activityData.duration) !== 'number'){
//       errors.duration = 'Ingrese las horas en formato "Números"';
// } else 
if(activityData.duration < 1 || activityData.duration > 2160){
    errors.duration = 'Las horas permitidas para la actividad es de 1-2160';
}

if(activityData.season === 'x'){
    errors.season = 'Debe seleccionar una temporada';
  }

  if(activityData.countries === 'x'){
    errors.countries = 'Debe seleccionar un pais';
  }
  return errors;
}