// Variables for form inputs
const stageInput = document.getElementById("stage");
const shiftTypeInput = document.getElementById("shift-type");
const workingHoursInput = document.getElementById("working-hours");
const limitInput = document.getElementById("limit-check");
const overtimeInput = document.getElementById("overtime");
const nightHoursInput = document.getElementById("night-hours");
const holidayHoursInput = document.getElementById("holiday-hours");
const sickLeaveInput = document.getElementById("sick-leave");
const bonusShiftHoursInput = document.getElementById("bonus-shift-hours");
const bonusShiftInput = document.getElementById("bonus-shift");
const paidVacationsInput = document.getElementById("paid-vacations");
const violationPointsInput = document.getElementById("violation-points");
const breachInput = document.getElementById("breach");
const emergencyCaseInput = document.getElementById("emergency-case");
const bonusTypeInput = document.getElementById("bonus-type");
const gameCountInput = document.getElementById("game-count");
const countedMistakesInput = document.getElementById("counted-mistakes");
const avgPerfomanceInput = document.getElementById("avg-perfomance");
const reactionInput = document.getElementById("reaction");
const dealingSpeedInput = document.getElementById("dealing-speed");
const cooperationInput = document.getElementById("cooperation");
const additionalBonusNetInput = document.getElementById("additional-bonus-net");
const additionalBonusInput = document.getElementById("additional-bonus");
const otherTaxInput = document.getElementById("other-tax");
const hourSalary1 = document.getElementById("hour-salary1");
const hourSalary2 = document.getElementById("hour-salary2");
const hourSalary3 = document.getElementById("hour-salary3");
///
const bonusHours1 = document.getElementById("bonus-hours1");
const bonusHours2 = document.getElementById("bonus-hours2");
const bonusHours3 = document.getElementById("bonus-hours3");
const bonusViolations1 = document.getElementById("bonus-violations1");
const bonusViolations2 = document.getElementById("bonus-violations2");
const bonusViolations3 = document.getElementById("bonus-violations3");
const bonusStage1 = document.getElementById("bonus-stage1");
const bonusStage2 = document.getElementById("bonus-stage2");
const bonusStage3 = document.getElementById("bonus-stage3");
const bonusHoursIndex = document.getElementById("bonus-hours-index");
const bonusStageIndex = document.getElementById("bonus-stage-index");
const bonusViolationsIndex = document.getElementById("bonus-violations-index");
const bonusSpoiler = document.getElementById("bonus-spoiler");
const noBonusSpoiler = document.getElementById("no-bonus-spoiler");
const noBonusReasonSpan = document.getElementById("noBonus-reason");
///PV
const firstMonthHours = document.getElementById("range-input1");
const secondMonthHours = document.getElementById("range-input2");
const thirdMonthHours = document.getElementById("range-input3");
const firstMonthSalary = document.getElementById("first-month-salary");
const secondMonthSalary = document.getElementById("second-month-salary");
const thirdMonthSalary = document.getElementById("third-month-salary");
const firstMonthBonus = document.getElementById("first-month-bonus");
const secondMonthBonus = document.getElementById("second-month-bonus");
const thirdMonthBonus = document.getElementById("third-month-bonus");
const firstMonthSalaryValue = document.getElementById("first-month-salary-value");
const secondMonthSalaryValue = document.getElementById("second-month-salary-value");
const thirdMonthSalaryValue = document.getElementById("third-month-salary-value");
const firstMonthAbsence = document.getElementById("first-month-absence")
const secondMonthAbsence = document.getElementById("second-month-absence")
const thirdMonthAbsence = document.getElementById("third-month-absence")
const firstMonthLimit = document.getElementById("first-month-limit");
const secondMonthLimit = document.getElementById("second-month-limit");
const thirdMonthLimit = document.getElementById("third-month-limit");

/// VALUES ////
let stage = parseInt(document.getElementById("stage").value) || 0;
let shiftType = document.getElementById("shift-type") ;
let workingHours = parseFloat(document.getElementById("working-hours").value) || 0;
let limit = parseFloat(document.getElementById("limit-check").value) || 0;
let overtime = parseFloat(document.getElementById("overtime").value) || 0;
let nightWorkingHours = parseFloat(document.getElementById("night-hours").value) || 0;
let holidayHours = parseFloat(document.getElementById("holiday-hours").value) || 0;
let sickLeave = parseInt(document.getElementById("sick-leave").value) || 0;
let bonusShiftHours = parseInt(document.getElementById("bonus-shift-hours").value) || 0;
let bonusShift = parseInt(document.getElementById("bonus-shift").value) || 0;
let paidVacations = parseInt(document.getElementById("paid-vacations").value) || 0;
let violationPoints = parseInt(document.getElementById("violation-points").value) || 0;
let breach = document.getElementById("breach").value ;
let emergencyCase = document.getElementById("emergency-case").value;
let bonusType = document.getElementById("bonus-type").value;
let gameCount = parseInt(document.getElementById("game-count").value) || 0;
let countedMistakes = parseFloat(document.getElementById("counted-mistakes").value) || 0;
let avgPerfomance = parseFloat(document.getElementById("avg-perfomance").value) || 0;
let reaction = parseFloat(document.getElementById("reaction").value) || 0; 
let dealingSpeed = parseFloat(document.getElementById("dealing-speed").value) || 0;
let cooperation = parseFloat(document.getElementById("cooperation").value) || 0 ;
let additionalBonusNet = parseFloat(document.getElementById("additional-bonus-net").value) || 0;
let additionalBonus = parseFloat(document.getElementById("additional-bonus").value) || 0;
let otherTax = parseFloat(document.getElementById("other-tax").value) || 0;

let hourSalary;
let nightHourSalary;
let salary;
let limitValue;
let limitValue1;
let limitValue2;
let limitValue3;
let monthValue;
let monthValue1;
let monthValue2;
let monthValue3;


const settingsButton = document.getElementById("settings-button");
const settingsDiv = document.getElementById("settings-container");
settingsButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (settingsDiv.style.display === "none") {
        settingsDiv.style.display = "block";
      } else {
        settingsDiv.style.display = "none";
      }
});


var form = document.querySelector('form');
var globalLimit =[
  {month: "January", value: 160},
  {month: "February", value:  160},
  {month: "March", value:   168},
  {month: "April", value:  144},
  {month: "May", value: 160},
  {month: "June", value: 176},
  {month: "July", value: 168},
  {month: "August", value:184},
  {month: "September", value: 176},
  {month: "Octomber", value: 160},
  {month: "November", value: 168},
  {month: "December", value: 168},
  ]
  let bonusMoney= {
    evaluation: [0],
    sgc : [0],
    dealingSpeed : [0],
    reaction : [0],
    cooperation : [0], 
  };
  let bonusCriteria = {
    evaluation: [0],
    sgc : [0],
    dealingSpeed : [0],
    reaction : [0],
    cooperation : [0],
    hours:[0],
    violations:[0],
    stage:[0],
  };

  let BonusLVL = {
    evaluation: 0,
    sgc : 0,
    dealingSpeed : 0,
    reaction : 0,
    cooperation : 0,
  }
  document.getElementById('overtime').value = 0;
  const monthSelect = document.getElementById('current-month');
  
  // Set the default value when the page loads
  var currentDate = new Date();
  var activeMonth = currentDate.getMonth();
  limitInput.value = globalLimit[activeMonth].value;
  document.getElementById("active-month").textContent = globalLimit[activeMonth].month;
  
 function monthFunction(){
    if (monthSelect.value == "current") {
        activeMonth = currentDate.getMonth();
        limitInput.value = globalLimit[activeMonth].value;
        document.getElementById("active-month").textContent = globalLimit[activeMonth].month;
  
      } else {
        activeMonth = monthSelect.value;
        limitInput.value = globalLimit[activeMonth].value;
        document.getElementById("active-month").textContent = globalLimit[activeMonth].month;
  
      }
 };

 let firstMonthValue;
 let secondMonthValue;
 let thirdMonthValue;
 const firstMonthSpan = document.getElementById("first-month-span");
 const secondMonthSpan = document.getElementById("second-month-span");
 const thirdMonthSpan = document.getElementById("third-month-span");

 function lastMonthFunction() {
    var currentDate = new Date();
    var activeMonth = currentDate.getMonth();
    var value;
  
    if (monthSelect.value === 'current') {
      value = activeMonth;
    } else {
      value = monthSelect.value;
    }
  
    let limitValue = globalLimit[value].value;
    let limitValue1 = globalLimit[(value - 1 + 12) % 12].value;
    let limitValue2 = globalLimit[(value - 2 + 12) % 12].value;
    let limitValue3 = globalLimit[(value - 3 + 12) % 12].value;
    let monthValue = globalLimit[value].month;
    let monthValue1 = globalLimit[(value - 1 + 12) % 12].month;
    let monthValue2 = globalLimit[(value - 2 + 12) % 12].month;
    let monthValue3 = globalLimit[(value - 3 + 12) % 12].month;
    document.getElementById('first-month-span').textContent = monthValue1;
    document.getElementById('second-month-span').textContent = monthValue2;
    document.getElementById('third-month-span').textContent = monthValue3;
    document.getElementById('first-month-limit').value = limitValue1 || 'Default Value 1';
    document.getElementById('second-month-limit').value = limitValue2 || 'Default Value 2';
    document.getElementById('third-month-limit').value = limitValue3 || 'Default Value 3';
  }  
lastMonthFunction();

  monthSelect.addEventListener('change', function () {
    monthFunction();
    lastMonthFunction();
  });
 function stageFunction(){
  stage=stageInput.value
    return stage;
  }

  stageInput.addEventListener('change', function(){
    stageFunction();
    console.error(stage + " STAGE");
    hourSalaryFunction();
  });

  function hourSalaryFunction(){
    stage = parseInt(document.getElementById('stage').value);
    if (stage === 1){
        hourSalary = hourSalary1.value;
        nightHourSalary = hourSalary * 50/100;
    }else if (stage === 2){
        hourSalary = hourSalary2.value;
        nightHourSalary = hourSalary * 50/100;
    }else if (stage === 3){
        hourSalary = hourSalary3.value;
        nightHourSalary = hourSalary * 50/100;
    }
    return hourSalary, nightHourSalary;;
  }
  hourSalaryFunction();

  hourSalary1.addEventListener('input', function(){
    hourSalaryFunction();
  });
  hourSalary2.addEventListener('input', function(){
    hourSalaryFunction();
  });
  hourSalary3.addEventListener('input', function(){
    hourSalaryFunction();
  });


// Function to calculate night hours
function calculateNightHours() {
    if (shiftTypeInput.value === "night") {
        nightHoursInput.value = workingHours * 6 / 8;
    }
}

// Function to calculate overtime
function calculateOvertime() {
    if (workingHours > limit) {
        overtimeInput.value = workingHours - limit;
    } else {
        overtimeInput.value = 0;
    }
}
function bonusCheck(){
    violationPoints = violationPointsInput.value || 0;
    stage = stageInput.value || 1
    breach = breachInput.value || 0;
    emergencyCase = emergencyCaseInput.value || 0;
    workingHours = workingHoursInput.value || 0;
    bonusCriteria.violations[1] = bonusViolations1.value || 0;
    bonusCriteria.violations[2] = bonusViolations2.value || 0;
    bonusCriteria.violations[3] = bonusViolations3.value || 0;
    bonusCriteria.hours[1] = bonusHours1.value || 0;
    bonusCriteria.hours[2] = bonusHours2.value || 0;
    bonusCriteria.hours[3] = bonusHours3.value || 0;
    bonusCriteria.stage[1] = bonusStage1.value || 0;
    bonusCriteria.stage[2] = bonusStage2.value || 0;
    bonusCriteria.stage[3] = bonusStage3.value || 0;
    paidVacations = paidVacationsInput.value || 0;
    paidVacations = parseInt(paidVacations);
    paidVacationsHours = paidVacations*8
    workingHours = workingHoursInput.value  || 0;
    workingHours = parseInt(workingHours);
    let noBonusValue = false; 
    bonusHours = workingHours + paidVacationsHours



    if(breach == "true"){
        noBonusReason = "BREACH";
        noBonusValue = true;
        noBonusReasonSpan.style.color = "rgb(237, 84, 239)";
    }else if (emergencyCase === "true"){
        noBonusReason = " Emergency Case";
        noBonusValue = true;
        noBonusReasonSpan.style.color = "rgb(255, 171, 61)";
    }else if(violationPoints > bonusCriteria.violations[1] || violationPoints > 9){
        noBonusReason = "VIOLATION POINTS - (" + violationPoints + " / " + bonusCriteria.violations[1] + ") ";
        noBonusValue = true; 
        noBonusReasonSpan.style.color = "rgb(255, 17, 17)";
    }else if(bonusHours < bonusCriteria.hours[1]){
        noBonusReason = "Working Hours - (" + bonusHours + " / " + bonusCriteria.hours[1] + ") "
        noBonusValue = true;
        noBonusReasonSpan.style.color = "rgb(67, 216, 243)";
    }else if(stage < bonusCriteria.stage[1]){
        noBonusReason = "(Stage) Length OF Service "
        noBonusValue = true;
        noBonusReasonSpan.style.color = "rgb(67, 216, 243)";
    }else{noBonusValue = false}

    if(noBonusValue === true){
        bonusSpoiler.style.display = "none";
        noBonusSpoiler.style.display ="block";
        noBonusReasonSpan.textContent = noBonusReason;
    }else {
        bonusSpoiler.style.display = "block";
        noBonusSpoiler.style.display ="none";
        noBonusReasonSpan.textContent = " ";
    }


};
bonusCheck();

violationPointsInput.addEventListener('input', function(){ 
    bonusCheck();
});

breachInput.addEventListener('change', function(){
    bonusCheck();
});
emergencyCaseInput.addEventListener('change', function(){
    bonusCheck();
});

// Event listener for working hours input
workingHoursInput.addEventListener('input', function(){
    workingHours = parseFloat(workingHoursInput.value);
    limit = limitInput.value; 
    // Call functions to calculate night hours and overtime
    calculateNightHours();
    calculateOvertime();
    bonusCheck();
});
// Event listener for shift type input
shiftTypeInput.addEventListener('input', function(){
    // Call function to calculate night hours when shift type changes
    calculateNightHours();
});

// Event listener for limit input
limitInput.addEventListener('input', function(){
    limit = parseFloat(limitInput.value);
    
    // Call function to calculate overtime
    calculateOvertime();
});

// Function to check if either paidVacations or sickLeave is greater than 0
function checkPaidVacationSickLeave() {
    if (paidVacations > 0 || sickLeave > 0) {
        document.getElementById('pv-spoiler').style.display = 'block';
    } else {
        document.getElementById('pv-spoiler').style.display = 'none';
    }
}

// Event listener for paidVacations input
paidVacationsInput.addEventListener('input', function(){
    paidVacations = parseInt(paidVacationsInput.value);
    
    // Call function to check and toggle the spoiler
    checkPaidVacationSickLeave();
    bonusCheck();
});

// Event listener for sickLeave input
sickLeaveInput.addEventListener('input', function(){
    sickLeave = parseInt(sickLeaveInput.value);
    
    // Call function to check and toggle the spoiler
    checkPaidVacationSickLeave();
});

// Function to calculate bonus shifts
function calculateBonusShifts() {
    let bonusShiftHours = parseFloat(bonusShiftHoursInput.value);
    let bonusShifts = Math.floor(bonusShiftHours / 8);
    bonusShiftInput.value = bonusShifts;
}

// Event listener for bonusShiftHours input
bonusShiftHoursInput.addEventListener('input', function(){
    calculateBonusShifts();
});



// Get the table element
const settingsTable = document.getElementById('bonus-settings-table');

// Add event listener to the table
settingsTable.addEventListener('input', function(event) {
    // Check if the target element is an editable element
    if (event.target.hasAttribute('contenteditable')) {
        // Call your function here
        tableSettingsChange();
    }
});

// Define your function to be called when an input changes
function tableSettingsChange() {
    bonusCriteria.evaluation[1]= parseInt(document.getElementById("pa-minimum-criteria").textContent);
    bonusCriteria.evaluation[2]= parseInt(document.getElementById("pa-advance-criteria").textContent);
    bonusCriteria.evaluation[3]= parseInt(document.getElementById("pa-overachiever-criteria").textContent);
    bonusCriteria.sgc[1]= parseInt(document.getElementById("sgc-minimum-criteria").textContent);
    bonusCriteria.sgc[2]= parseInt(document.getElementById("sgc-advance-criteria").textContent);
    bonusCriteria.sgc[3]= parseInt(document.getElementById("sgc-overachiever-criteria").textContent);
    bonusCriteria.dealingSpeed[1]= parseInt(document.getElementById("dealing-minimum-criteria").textContent);
    bonusCriteria.dealingSpeed[2]= parseInt(document.getElementById("dealing-advance-criteria").textContent);
    bonusCriteria.dealingSpeed[3]= parseInt(document.getElementById("dealing-overachiever-criteria").textContent);
    bonusCriteria.reaction[1]= parseInt(document.getElementById("reaction-minimum-criteria").textContent);
    bonusCriteria.reaction[2]= parseInt(document.getElementById("reaction-advance-criteria").textContent);
    bonusCriteria.reaction [3]= parseInt(document.getElementById("reaction-overachiever-criteria").textContent);
    bonusCriteria.cooperation[1]= parseInt(document.getElementById("cooperation-minimum-criteria").textContent);
    bonusCriteria.cooperation[2]= parseInt(document.getElementById("cooperation-advance-criteria").textContent);
    bonusCriteria.cooperation[3]= parseInt(document.getElementById("cooperation-overachiever-criteria").textContent);
    bonusMoney.evaluation[1] = parseFloat(document.getElementById("pa-minimum-money").textContent).toFixed(2);
    bonusMoney.evaluation[2] = parseFloat(document.getElementById("pa-advance-money").textContent).toFixed(2);
    bonusMoney.evaluation[3] = parseFloat(document.getElementById("pa-overachiever-money").textContent).toFixed(2);
    bonusMoney.sgc[1] = parseFloat(document.getElementById("sgc-minimum-money").textContent).toFixed(2);
    bonusMoney.sgc[2] = parseFloat(document.getElementById("sgc-advance-money").textContent).toFixed(2);
    bonusMoney.sgc[3] = parseFloat(document.getElementById("sgc-overachiever-money").textContent).toFixed(2);
    bonusMoney.dealingSpeed[1] = parseFloat(document.getElementById("dealing-minimum-money").textContent).toFixed(2);
    bonusMoney.dealingSpeed[2] = parseFloat(document.getElementById("dealing-advance-money").textContent).toFixed(2);
    bonusMoney.dealingSpeed[3] = parseFloat(document.getElementById("dealing-overachiever-money").textContent).toFixed(2);
    bonusMoney.reaction[1] = parseFloat(document.getElementById("reaction-minimum-money").textContent).toFixed(2);
    bonusMoney.reaction[2] = parseFloat(document.getElementById("reaction-advance-money").textContent).toFixed(2);
    bonusMoney.reaction[3] = parseFloat(document.getElementById("reaction-overachiever-money").textContent).toFixed(2);
    bonusMoney.cooperation[1] = parseFloat(document.getElementById("cooperation-minimum-money").textContent).toFixed(2);
    bonusMoney.cooperation[2] = parseFloat(document.getElementById("cooperation-advance-money").textContent).toFixed(2);
    bonusMoney.cooperation[3] = parseFloat(document.getElementById("cooperation-overachiever-money").textContent).toFixed(2);

}
tableSettingsChange();


// Get all the spans with contenteditable attribute and max value
const editableSpans = document.querySelectorAll('[contenteditable="true"][max]');
    
// Loop through each span
editableSpans.forEach(span => {
    span.addEventListener('input', function() {
        // Get the value of the span
        let value = parseInt(this.textContent);
        
        // Get the max value set for the span
        const max = parseInt(this.getAttribute('max'));
        
        // If the entered value is greater than the maximum or not a number, set it to the maximum
        if (isNaN(value)) {
            value = 0;
        }
        if (value > max) {
            value = max;
        }
        
        // Update the text content of the span
        this.textContent = value;
        
        // Collapse the selection to the end, preventing cursor from moving to the left
        const selection = window.getSelection();
        const range = document.createRange();
        range.setStart(this.childNodes[0], value.toString().length);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    });
});

sgcBonusFunction = function(){
    gameCount = parseInt(gameCountInput.value) || 0;
    mistakesCount= parseInt(countedMistakesInput.value) || 0;
    sgcValue = document.getElementById("sgc-lvl-value");
    sgcStage = document.getElementById("sgc-lvl-stage");
    sgcLVL = document.getElementById("sgc-lvl");

    if (mistakesCount > 0){
        sgc = gameCount / mistakesCount;
    }else{sgc = gameCount}

    sgcValue.textContent = sgc.toFixed(0);
    if(sgc >= bonusCriteria.sgc[3]){
        sgcStage.textContent = "Overachiever";
        sgcLVL.style.color= "green";
        BonusLVL.sgc = 3;
        
    }else if(sgc >= bonusCriteria.sgc[2]){
        sgcStage.textContent = "Advance";
        sgcLVL.style.color= "#00ff00";
        BonusLVL.sgc = 2;
    }else if(sgc >= bonusCriteria.sgc[1]){
        sgcStage.textContent = "minimum";
        sgcLVL.style.color= "orange";
        BonusLVL.sgc = 1;
    }else{
        sgcStage.textContent = "No Bonus";
        sgcLVL.style.color= "red";
        BonusLVL.sgc = 0;
    }

} 
paBonusFunction = function(){
    evaluation = parseInt(avgPerfomanceInput.value) || 0;
    paValue = document.getElementById("pa-lvl-value");
    paStage = document.getElementById("pa-lvl-stage");
    paLVL = document.getElementById("pa-lvl");

    paValue.textContent = evaluation;
    if(evaluation >= bonusCriteria.evaluation[3]){
        paStage.textContent = "Overachiever";
        paLVL.style.color= "green";
        BonusLVL.evaluation = 3;
        
    }else if(evaluation >= bonusCriteria.evaluation[2]){
        paStage.textContent = "Advance";
        paLVL.style.color= "#00ff00";
        BonusLVL.evaluation = 2;
    }else if(evaluation >= bonusCriteria.evaluation[1]){
        paStage.textContent = "minimum";
        paLVL.style.color= "orange";
        BonusLVL.evaluation = 1;
    }else{
        paStage.textContent = "No Bonus";
        paLVL.style.color= "red";
        BonusLVL.evaluation = 0
    }

}  
reactionBonusFunction = function(){
    reaction = parseInt(reactionInput.value) || 0;
    reactionValue = document.getElementById("reaction-lvl-value");
    reactionStage = document.getElementById("reaction-lvl-stage");
    reactionLVL = document.getElementById("reaction-lvl");

    reactionValue.textContent = reaction;
    if(reaction >= bonusCriteria.reaction[3]){
        reactionStage.textContent = "Overachiever";
        reactionLVL.style.color= "green";
        BonusLVL.reaction = 3;
        
    }else if(reaction >= bonusCriteria.reaction[2]){
        reactionStage.textContent = "Advance";
        reactionLVL.style.color= "#00ff00";
        BonusLVL.reaction = 2;
    }else if(reaction >= bonusCriteria.reaction[1]){
        reactionStage.textContent = "minimum";
        reactionLVL.style.color= "orange";
        BonusLVL.reaction = 1;
    }else{
        reactionStage.textContent = "No Bonus";
        reactionLVL.style.color= "red";
        BonusLVL.reaction = 0
    }

}
dealingBonusFunction = function(){
    dealing = parseInt(dealingSpeedInput.value) || 0;
    dealingValue = document.getElementById("dealing-lvl-value");
    dealingStage = document.getElementById("dealing-lvl-stage");
    dealingLVL = document.getElementById("dealing-lvl");

    dealingValue.textContent = dealing;
    if(dealing >= bonusCriteria.dealingSpeed[3]){
        dealingStage.textContent = "Overachiever";
        dealingLVL.style.color= "green";
        BonusLVL.dealing = 3;
        
    }else if(dealing >= bonusCriteria.dealingSpeed[2]){
        dealingStage.textContent = "Advance";
        dealingLVL.style.color= "#00ff00";
        BonusLVL.dealing = 2;
    }else if(dealing >= bonusCriteria.dealingSpeed[1]){
        dealingStage.textContent = "Minimum";
        dealingLVL.style.color= "orange";
        BonusLVL.dealing = 1;
    }else{
        dealingStage.textContent = "No Bonus";
        dealingLVL.style.color= "red";
        BonusLVL.dealing = 0
    }
}
cooperationBonusFunction = function(){
    cooperation = parseInt(cooperationInput.value) || 0;
    cooperationValue = document.getElementById("cooperation-lvl-value");
    cooperationStage = document.getElementById("cooperation-lvl-stage");
    cooperationLVL = document.getElementById("cooperation-lvl");

    cooperationValue.textContent = cooperation;
    if(cooperation >= bonusCriteria.cooperation[3]){
        cooperationStage.textContent = "Overachiever";
        cooperationLVL.style.color= "green";
        BonusLVL.cooperation = 3;
        
    }else if(cooperation >= bonusCriteria.cooperation[2]){
        cooperationStage.textContent = "Advance";
        cooperationLVL.style.color= "#00ff00";
        BonusLVL.cooperation = 2;
    }else if(cooperation >= bonusCriteria.cooperation[1]){
        cooperationStage.textContent = "Minimum";
        cooperationLVL.style.color= "orange";
        BonusLVL.cooperation = 1;
    }else{
        cooperationStage.textContent = "No Bonus";
        cooperationLVL.style.color= "red";
        BonusLVL.cooperation = 0
    }
}


gameCountInput.addEventListener("input", function(){
    sgcBonusFunction();
    
});
countedMistakesInput.addEventListener("input", function(){
    sgcBonusFunction();
});

avgPerfomanceInput.addEventListener("input", function(){
    paBonusFunction();
});
reactionInput.addEventListener("input", function(){
    reactionBonusFunction();
});
dealingSpeedInput.addEventListener('input', function(){
    dealingBonusFunction();
});
cooperationInput.addEventListener('input', function(){
    cooperationBonusFunction();
});

additionalBonusFunction = function(){
    netBonus = additionalBonusNetInput.value;
    bonus = netBonus * 122/100;
    additionalBonusInput.value = bonus;
};

additionalBonusNetInput.addEventListener("input", function(){
    additionalBonusFunction();
});

function pvSalaryRateFunction(){
    firstMonthSalary0 = parseFloat(firstMonthSalary.value) ? parseFloat(firstMonthSalary.value).toFixed(2) : '0.00',
    firstMonthBonus0 = parseFloat(firstMonthBonus.value) ? parseFloat(firstMonthBonus.value).toFixed(2) : '0.00',
    secondMonthSalary0 = parseFloat(secondMonthSalary.value) ? parseFloat(secondMonthSalary.value).toFixed(2) : '0.00',
    secondMonthBonus0 = parseFloat(secondMonthBonus.value) ? parseFloat(secondMonthBonus.value).toFixed(2) : '0.00',
    thirdMonthSalary0 = parseFloat(thirdMonthSalary.value) ? parseFloat(thirdMonthSalary.value).toFixed(2) : '0.00',
    thirdMonthBonus0 = parseFloat(thirdMonthBonus.value) ? parseFloat(thirdMonthBonus.value).toFixed(2) : '0.00';
    firstMonthSalaryValue.value = firstMonthSalary0 - firstMonthBonus0;
    secondMonthSalaryValue.value = secondMonthSalary0 - secondMonthBonus0;
    thirdMonthSalaryValue.value = thirdMonthSalary0 - thirdMonthBonus0;

}

const rangeInput1 = document.getElementById('range-input1');
const rangeValue1 = document.getElementById('range-value1');

rangeInput1.addEventListener('input', () => {
  rangeValue1.textContent = rangeInput1.value;
hours = rangeInput1.value;
nightHours = hours * 6 / 8;
shiftType = document.getElementById('shift-type').value;
bonus = document.getElementById('first-month-bonus').value;
limit = document.getElementById('first-month-limit').value;
overtime = hours - limit;
console.error(overtime + " OVERTIME 1");
console.error(hours + "  " + limit);
    salary;

  if (shiftType === "night") {
    if(overtime > 0){
        salary = (hours * hourSalary) + (nightHours * nightHourSalary) + (overtime * hourSalary/2);
    }else{
        salary = (hours * hourSalary) + (nightHours * nightHourSalary);
    }
  } else {
    if(overtime > 0){
        salary = (hours * hourSalary)+ (overtime * hourSalary/2);
    }else{
        salary = (hours * hourSalary);
    }
  }

  
  document.getElementById('first-month-salary').value = (salary).toFixed(2);
  pvSalaryRateFunction();
});

const rangeInput2 = document.getElementById('range-input2');
const rangeValue2 = document.getElementById('range-value2');
rangeInput2.addEventListener('input', () => {
  rangeValue2.textContent = rangeInput2.value;
    hours = rangeInput2.value;
    nightHours = hours * 6 / 8;
    shiftType = document.getElementById('shift-type').value;
    bonus = document.getElementById('second-month-bonus').value;
    limit = document.getElementById('second-month-limit').value;
    overtime = hours - limit;
  console.error(bonus);
      salary;
  
      if (shiftType === "night") {
        if(overtime > 0){
            salary = (hours * hourSalary) + (nightHours * nightHourSalary) + (overtime * hourSalary/2);
        }else{
            salary = (hours * hourSalary) + (nightHours * nightHourSalary);
        }
      } else {
        if(overtime > 0){
            salary = (hours * hourSalary)+ (overtime * hourSalary/2);
        }else{
            salary = (hours * hourSalary);
        }
      }
  document.getElementById('second-month-salary').value = (salary).toFixed(2);
  pvSalaryRateFunction();
});

const rangeInput3= document.getElementById('range-input3');
const rangeValue3= document.getElementById('range-value3');
rangeInput3.addEventListener('input', () => {
  rangeValue3.textContent = rangeInput3.value;
  const hours = rangeInput3.value;
  const nightHours = hours * 6 / 8;
  const shiftType = document.getElementById('shift-type').value;
  const bonus = document.getElementById('third-month-bonus').value
  limit = document.getElementById('third-month-limit').value;
  overtime = hours - limit;
  console.error(bonus);
      salary;
  
      if (shiftType === "night") {
        if(overtime > 0){
            salary = (hours * hourSalary) + (nightHours * nightHourSalary) + (overtime * hourSalary/2);
        }else{
            salary = (hours * hourSalary) + (nightHours * nightHourSalary);
        }
      } else {
        if(overtime > 0){
            salary = (hours * hourSalary)+ (overtime * hourSalary/2);
        }else{
            salary = (hours * hourSalary);
        }
      }
  document.getElementById('third-month-salary').value = (salary).toFixed(2);
  pvSalaryRateFunction();

});




firstMonthSalary.addEventListener('input', function(){
    pvSalaryRateFunction();
});
firstMonthBonus.addEventListener('input', function(){
    pvSalaryRateFunction();
});
secondMonthSalary.addEventListener('input', function(){
    pvSalaryRateFunction();

});
secondMonthBonus.addEventListener('input', function(){
    pvSalaryRateFunction();
});
thirdMonthSalary.addEventListener('input', function(){
    pvSalaryRateFunction();
});
thirdMonthBonus.addEventListener('input', function(){
    pvSalaryRateFunction();
});

////////////////////
////SUBMIT FORM////
//////////////////

    let nonHolidaySalary;
    let holidaySalary;
    let nightSalary;
    let overtimeSalary;
    let bonusSalary;
    let additionalBonusSalary;
    let paidVacationsSalary;
    let sickLeaveSalary;
    let bonusShiftSalary;
    let totalSalaryGross;
    let incomeTax;
    let incomeSalary;
    let totalSalaryNet;
    let bonusShiftRate = 25;

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.calculator');
    

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      tableSettingsChange();
      bonusCheck();
      let vacationPaidRate;
      let sickLeavePaidRate;

///DECLARATE VARS FOR FUNCTION///
stage = parseInt(document.getElementById("stage").value) || 0;
shiftType = document.getElementById("shift-type").value ;
workingHours = parseFloat(document.getElementById("working-hours").value) || 0;
limit = parseFloat(document.getElementById("limit-check").value) || 0;
overtime = parseFloat(document.getElementById("overtime").value) || 0;
nightWorkingHours = parseFloat(document.getElementById("night-hours").value) || 0;
holidayHours = parseFloat(document.getElementById("holiday-hours").value) || 0;
sickLeave = parseInt(document.getElementById("sick-leave").value) || 0;
bonusShiftHours = parseInt(document.getElementById("bonus-shift-hours").value) || 0;
bonusShift = parseInt(document.getElementById("bonus-shift").value) || 0;
paidVacations = parseInt(document.getElementById("paid-vacations").value) || 0;
violationPoints = parseInt(document.getElementById("violation-points").value) || 0;
breach = document.getElementById("breach").value ;
emergencyCase = document.getElementById("emergency-case").value;
bonusType = document.getElementById("bonus-type").value;
gameCount = parseInt(document.getElementById("game-count").value) || 0;
countedMistakes = parseFloat(document.getElementById("counted-mistakes").value) || 0;
avgPerfomance = parseFloat(document.getElementById("avg-perfomance").value) || 0;
reaction = parseFloat(document.getElementById("reaction").value) || 0; 
dealingSpeed = parseFloat(document.getElementById("dealing-speed").value) || 0;
cooperation = parseFloat(document.getElementById("cooperation").value) || 0 ;
additionalBonusNet = parseFloat(document.getElementById("additional-bonus-net").value) || 0;
additionalBonus = parseFloat(document.getElementById("additional-bonus").value) || 0;
otherTax = parseFloat(document.getElementById("other-tax").value) || 0;
///
const infoBonusMonth = document.getElementById("active-month-span");
const infoBonusLimit = document.getElementById("current-limit-span");
const infoBonusShiftType = document.getElementById("shift-type-span");
const infoBonusStage = document.getElementById("stage-bonus-span");
const approvedBonusLVLSpan = document.getElementById("approved-bonus");
const bonusHoursSpan = document.getElementById('working-hours-approved');
const bonusStageSpan = document.getElementById('length-of-service-approved');
const bonusViolationSpan = document.getElementById('violation-points-approved');
bonusShiftRate = 25;
gameCount = parseInt(gameCountInput.value) || 0;
mistakesCount= parseInt(countedMistakesInput.value) || 0;
if (mistakesCount > 0){
    sgc = gameCount / mistakesCount;
}else{sgc = gameCount}

let bonusApprovedText = ["No Bonus","Minimum","Advance","Overachiever"]

if (workingHours >= bonusCriteria.hours[3]){
    approvedBonusHours = 3;
}else if (workingHours >= bonusCriteria.hours[2]){
    approvedBonusHours = 2;
}else if (workingHours >= bonusCriteria.hours[1]){
    approvedBonusHours = 1;
}else{
    approvedBonusHours = 0;
}
if (stage >= bonusCriteria.stage[3]){
    approvedBonusStage = 3;
}else if (stage >= bonusCriteria.stage[2]){
    approvedBonusStage = 2;
}else if (stage >= bonusCriteria.stage[1]){
    approvedBonusStage = 1;
}else{
    approvedBonusStage = 0;
}

if (violationPoints <= bonusCriteria.violations[3]){
    approvedBonusViolations = 3;
}else if (violationPoints <= bonusCriteria.violations[2]){
    approvedBonusViolations = 2;
}else if (violationPoints <= bonusCriteria.violations[1]){
    approvedBonusViolations = 1;
}else{
    approvedBonusViolations = 0;
} 

if(breach === "false" && violationPoints <= bonusCriteria.violations[3] && bonusHours >= bonusCriteria.hours[3] && stage >= bonusCriteria.stage[3] && emergencyCase === "false"){
    approvedLVL = 3;
    approvedBonusLVLSpan.textContent = bonusApprovedText[3];
}else if(breach === "false" && violationPoints <= bonusCriteria.violations[2] && bonusHours >= bonusCriteria.hours[2] && stage >= bonusCriteria.stage[2] && emergencyCase === "false"){
    approvedLVL = 2;
    approvedBonusLVLSpan.textContent = bonusApprovedText[2];
}else if(breach === "false" && violationPoints <= bonusCriteria.violations[1] && bonusHours >= bonusCriteria.hours[1] &&  stage >= bonusCriteria.stage[1] && emergencyCase === "false"){
    approvedLVL = 1;
    approvedBonusLVLSpan.textContent = bonusApprovedText[1];
}else if(breach === "true" || violationPoints > bonusCriteria.violations[1] || bonusHours < bonusCriteria.hours[1] || stage < bonusCriteria.stage[1] || emergencyCase === "true"){
    approvedLVL = 0;
    approvedBonusLVLSpan.textContent = bonusApprovedText[0];
}

console.warn(violationPoints + " " + bonusCriteria.violations[1]);
console.error(bonusHours + "Bonus Hours  - " + workingHours )
if(approvedLVL == 0){

    bonusSalary=0;
    hourBonus= 0;
    sgcBonus = 0;
    evaluationBonus = 0;
    reactionBonus = 0;
    cooperationBonus = 0;
    dealingSpeedBonus = 0;
    console.warn("Approved Bonus Lvl - NO BONUS");
    if(breach === "true"){
     console.warn("u have Breach in active month");
     document.getElementById("bonus-reason").textContent= "  (You have Breach in Active month)";
     violationPoints = 10;
   
    }else if(emergencyCase === "true"){
     console.warn("u have EMERGENCY CASE in active month");
     document.getElementById("bonus-reason").textContent= "  (You have EMERGENCY CASE in Active month)";
    }else if(violationPoints > bonusCriteria.violations[1]){
     console.warn("u have more than "+bonusCriteria.violations[0]+" points violation")
       document.getElementById("bonus-reason").textContent= "  (You have more than "+bonusCriteria.violations[1]+" points violation -"+violationPoints+" )";
    }else if(bonusHours < bonusCriteria.hours[1]){
     console.warn("Working hours for minimum bonus lvl is "+bonusCriteria.hours[1]+" Hours. you worked -"+workingHours+" Hours " );
     document.getElementById("bonus-reason").textContent= "  (Working hours for minimum bonus lvl is "+bonusCriteria.hours[1]+" Hours. you worked - ("+workingHours+") Hours + " + (paidVacations*8) + " PV Hours )";
   }else {console.error("ERROR # 943")}
}else {
    document.getElementById("bonus-reason").textContent= null ;
    if(approvedLVL === 3 ){
            console.warn("Approved Bonus Lvl OverAchiever");
            evaluation = parseInt(avgPerfomanceInput.value) || 0;

          ///SGC Bonus Criteria
            var sgcBonus;
          if(sgc >= bonusCriteria.sgc[3] ){sgcBonus = bonusMoney.sgc[3]; console.log("SGC Bonus - OverAchiever : "+ bonusMoney.sgc[3]+" GEl")}
              else if (sgc >= bonusCriteria.sgc[2]){sgcBonus = bonusMoney.sgc[2];console.log("SGC Bonus - Advance : "+ bonusMoney.sgc[2]+" GEl")}
               else if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonusMoney.sgc[1];console.log("SGC Bonus - Minimum : "+ bonusMoney.sgc[1]+" GEl")}
                else {sgcBonus = bonusMoney.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonusMoney.sgc[0]+" GEl")}
          ///AVG Evaluation Bonus Criteria
          var evaluationBonus;    
          if(evaluation >= bonusCriteria.evaluation[3] ){evaluationBonus = bonusMoney.evaluation[3]; console.log("Evaluation Bonus - OverAchiever : "+ bonusMoney.evaluation[3]+" GEl")}
              else if (evaluation >= bonusCriteria.evaluation[2]){evaluationBonus = bonusMoney.evaluation[2];console.log("Evaluation Bonus - Advance : "+ bonusMoney.evaluation[2]+" GEl")}
               else if (evaluation >= bonusCriteria.evaluation[1]){evaluationBonus = bonusMoney.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonusMoney.evaluation[1]+" GEl")}
                else {evaluationBonus = bonusMoney.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonusMoney.evaluation[0]+" GEl")}
          /// Dealing Speed Bonus Criteria
          var dealingSpeedBonus;
          if(dealingSpeed >= bonusCriteria.dealingSpeed[3] ){dealingSpeedBonus = bonusMoney.dealingSpeed[3]; console.log("dealing Speed Bonus - OverAchiever : "+ bonusMoney.dealingSpeed[3]+" GEl")}
              else if (dealingSpeed >= bonusCriteria.dealingSpeed[2]){dealingSpeedBonus = bonusMoney.dealingSpeed[2];console.log("dealing Speed Bonus - Advance : "+ bonusMoney.dealingSpeed[2]+" GEl")}
               else if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonusMoney.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonusMoney.dealingSpeed[1]+" GEl")}
                else {dealingSpeedBonus = bonusMoney.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonusMoney.dealingSpeed[0]+" GEl")}
          /// initial reaction bonus Criteria
          var reactionBonus;
          if(reaction >= bonusCriteria.reaction[3] ){reactionBonus = bonusMoney.reaction[3]; console.log("reaction Bonus - OverAchiever : "+ bonusMoney.reaction[3]+" GEl")}
              else if (reaction >= bonusCriteria.reaction[2]){reactionBonus = bonusMoney.reaction[2];console.log("reaction Bonus - Advance : "+ bonusMoney.reaction[2]+" GEl")}
               else if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonusMoney.reaction[1];console.log("reaction Bonus - Minimum : "+ bonusMoney.reaction[1]+" GEl")}
                else {reactionBonus = bonusMoney.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonusMoney.reaction[0]+" GEl")}
          /// Roulete Cooperation Bonus 
          var cooperationBonus;
          if(cooperation >= bonusCriteria.cooperation[3] ){cooperationBonus = bonusMoney.cooperation[3]; console.log("cooperation Bonus - OverAchiever : "+ bonusMoney.cooperation[3]+" GEl")}
              else if (cooperation >= bonusCriteria.cooperation[2]){cooperationBonus = bonusMoney.cooperation[2];console.log("cooperation Bonus - Advance : "+ bonusMoney.cooperation[2]+" GEl")}
               else if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonusMoney.cooperation[1];console.log("cooperation Bonus - No Nonus : "+ bonusMoney.cooperation[1]+" GEl")}
                else {cooperationBonus = bonusMoney.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonusMoney.cooperation[0]+" GEl")}
            /// CALCULATED BONUS
                hourBonus = parseFloat(sgcBonus) + parseFloat(cooperationBonus) + parseFloat(reactionBonus) + parseFloat(dealingSpeedBonus) + parseFloat(evaluationBonus);
                hourBonus = hourBonus.toFixed(2); 
                   console.warn("Hour Bonus - "+ hourBonus)
            
        
    }else if(approvedLVL === 2 ){
            console.warn("Approved Bonus Lvl Advance");
            evaluation = parseInt(avgPerfomanceInput.value) || 0;

          ///SGC Bonus Criteria
            var sgcBonus;
         if (sgc >= bonusCriteria.sgc[2]){sgcBonus = bonusMoney.sgc[2];console.log("SGC Bonus - Advance : "+ bonusMoney.sgc[2]+" GEl")}
               else if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonusMoney.sgc[1];console.log("SGC Bonus - Minimum : "+ bonusMoney.sgc[1]+" GEl")}
                else {sgcBonus = bonusMoney.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonusMoney.sgc[0]+" GEl")}
          ///AVG Evaluation Bonus Criteria
          var evaluationBonus;    
           if (evaluation >= bonusCriteria.evaluation[2]){evaluationBonus = bonusMoney.evaluation[2];console.log("Evaluation Bonus - Advance : "+ bonusMoney.evaluation[2]+" GEl")}
               else if (evaluation >= bonusCriteria.evaluation[1]){evaluationBonus = bonusMoney.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonusMoney.evaluation[1]+" GEl")}
                else {evaluationBonus = bonusMoney.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonusMoney.evaluation[0]+" GEl")}
          /// Dealing Speed Bonus Criteria
          var dealingSpeedBonus;
          if (dealingSpeed >= bonusCriteria.dealingSpeed[2]){dealingSpeedBonus = bonusMoney.dealingSpeed[2];console.log("dealing Speed Bonus - Advance : "+ bonusMoney.dealingSpeed[2]+" GEl")}
               else if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonusMoney.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonusMoney.dealingSpeed[1]+" GEl")}
                else {dealingSpeedBonus = bonusMoney.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonusMoney.dealingSpeed[0]+" GEl")}
          /// initial reaction bonus Criteria
          var reactionBonus;
        if (reaction >= bonusCriteria.reaction[2]){reactionBonus = bonusMoney.reaction[2];console.log("reaction Bonus - Advance : "+ bonusMoney.reaction[2]+" GEl")}
               else if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonusMoney.reaction[1];console.log("reaction Bonus - Minimum : "+ bonusMoney.reaction[1]+" GEl")}
                else {reactionBonus = bonusMoney.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonusMoney.reaction[0]+" GEl")}
          /// Roulete Cooperation Bonus 
          var cooperationBonus;
          if (cooperation >= bonusCriteria.cooperation[2]){cooperationBonus = bonusMoney.cooperation[2];console.log("cooperation Bonus - Advance : "+ bonusMoney.cooperation[2]+" GEl")}
               else if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonusMoney.cooperation[1];console.log("cooperation Bonus - No Nonus : "+ bonusMoney.cooperation[1]+" GEl")}
                else {cooperationBonus = bonusMoney.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonusMoney.cooperation[0]+" GEl")}
            /// CALCULATED BONUS
                hourBonus = parseFloat(sgcBonus) + parseFloat(cooperationBonus) + parseFloat(reactionBonus) + parseFloat(dealingSpeedBonus) + parseFloat(evaluationBonus);
                hourBonus = hourBonus.toFixed(2); 
                   console.warn("Hour Bonus - "+ hourBonus)
            
        
    }
else if(approvedLVL === 1 ){
    console.warn("Approved Bonus Lvl Minimum");
    evaluation = parseInt(avgPerfomanceInput.value) || 0;

  ///SGC Bonus Criteria
    var sgcBonus;
     if (sgc >= bonusCriteria.sgc[1]){sgcBonus = bonusMoney.sgc[1];console.log("SGC Bonus - Minimum : "+ bonusMoney.sgc[1]+" GEl")}
        else {sgcBonus = bonusMoney.sgc[0];console.log("SGC Bonus - No Bonus : "+ bonusMoney.sgc[0]+" GEl")}
  ///AVG Evaluation Bonus Criteria
  var evaluationBonus;    
     if (evaluation >= bonusCriteria.evaluation[1]){evaluationBonus = bonusMoney.evaluation[1];console.log("Evaluation Bonus - Minimum : "+ bonusMoney.evaluation[1]+" GEl")}
        else {evaluationBonus = bonusMoney.evaluation[0];console.log("Evaluation Bonus - No Bonus : "+ bonusMoney.evaluation[0]+" GEl")}
  /// Dealing Speed Bonus Criteria
  var dealingSpeedBonus;
    if (dealingSpeed >= bonusCriteria.dealingSpeed[1]){dealingSpeedBonus = bonusMoney.dealingSpeed[1];console.log("dealing Speed Bonus - Minimum : "+ bonusMoney.dealingSpeed[1]+" GEl")}
        else {dealingSpeedBonus = bonusMoney.dealingSpeed[0];console.log("dealing Speed Bonus - No Bonus : "+ bonusMoney.dealingSpeed[0]+" GEl")}
  /// initial reaction bonus Criteria
  var reactionBonus;
    if (reaction >= bonusCriteria.reaction[1]){reactionBonus = bonusMoney.reaction[1];console.log("reaction Bonus - Minimum : "+ bonusMoney.reaction[1]+" GEl")}
        else {reactionBonus = bonusMoney.reaction[0];console.log("reaction Bonus - No Bonus : "+ bonusMoney.reaction[0]+" GEl")}
  /// Roulete Cooperation Bonus 
  var cooperationBonus;
    if (cooperation >= bonusCriteria.cooperation[1]){cooperationBonus = bonusMoney.cooperation[1];console.log("cooperation Bonus - No Nonus : "+ bonusMoney.cooperation[1]+" GEl")}
        else {cooperationBonus = bonusMoney.cooperation[0];console.log("cooperation Bonus - No Bonus : "+ bonusMoney.cooperation[0]+" GEl")}
    /// CALCULATED BONUS
        hourBonus = parseFloat(sgcBonus) + parseFloat(cooperationBonus) + parseFloat(reactionBonus) + parseFloat(dealingSpeedBonus) + parseFloat(evaluationBonus);
        hourBonus = hourBonus.toFixed(2); 
           console.warn("Hour Bonus - "+ hourBonus);
}
}
infoBonusMonth.textContent = globalLimit[activeMonth].month;
infoBonusLimit.textContent = globalLimit[activeMonth].value;
infoBonusShiftType.textContent = shiftType;
infoBonusStage.textContent = stage + " STAGE";
bonusHoursSpan.textContent = bonusApprovedText[approvedBonusHours];
bonusStageSpan.textContent = bonusApprovedText[approvedBonusStage];
bonusViolationSpan.textContent = bonusApprovedText[approvedBonusViolations];



/// PAIDVACATIONS SICKLEAVE ///
function paidVacationsCalculate(){
    limit01 = parseInt(firstMonthLimit.value) || 160;
    limit02 = parseInt(secondMonthLimit.value) || 160;
    limit03 = parseInt(thirdMonthLimit.value) || 160;
    hours01 = parseFloat(firstMonthHours.value) || 120;
    hours02 = parseFloat(secondMonthHours.value) || 120;
    hours03 = parseFloat(thirdMonthHours.value) || 120;
    salary01 = parseFloat(firstMonthSalary.value)|| hours01 * hourSalary;
    salary02 = parseFloat(secondMonthSalary.value) || hours02 * hourSalary;
    salary03 = parseFloat(thirdMonthSalary.value) || hours03 * hourSalary;
    bonus01 = parseFloat(firstMonthBonus.value) || 0;
    bonus02 = parseFloat(secondMonthBonus.value) || 0;
    bonus03 = parseFloat(thirdMonthBonus.value) || 0;
    absence01 = parseInt(firstMonthAbsence.value) || 0;
    absence02 = parseInt(secondMonthAbsence.value) || 0;
    absence03 = parseInt(thirdMonthAbsence.value) || 0;
    salaryValue01 = parseFloat(firstMonthSalaryValue.value) || salary01 - bonus01;
    salaryValue02 = parseFloat(secondMonthSalaryValue.value) || salary02 - bonus02;
    salaryValue03 = parseFloat(thirdMonthSalaryValue.value) || salary03 - bonus03;
    if(hours01 > limit01){
        overtime01 = hours01 - limit01;
        salaryValue01 = salary01 - (overtime01 * hourSalary*150/100);
        indexC1 = limit01;
    }else{
        overtime01 = 0;
        indexC1 = hours01;
    }
    if(hours02 > limit02){
        overtime02 = hours02 - limit02;
        salaryValue02 = salary02 - (overtime02 * hourSalary*150/100);
        indexC2 = limit02;
    }else{
        overtime02 = 0;
        indexC2 = hours02;

    }
    if(hours03 > limit03){
        overtime03 = hours03 - limit03
        salaryValue03 = salary03 - (overtime03 * hourSalary*150/100);
        indexC3 = limit03;
    }else{
        overtime03 = 0;
        indexC3 = hours03;
    }

limitPV = limit01 + limit02 + limit03;
limitDaysPV = limitPV/8;
hoursPV = hours01 + hours02 + hours03;
hoursSL = hours01 + hours02 + hours03;
bonusPV = bonus01 + bonus02 + bonus03;
absencePV = absence01 + absence02 + absence03;
salaryValue = salaryValue01 + salaryValue02 + salaryValue03
salaryPV = salaryValue01 + salaryValue02 + salaryValue03;
salarySL = salary01 + salary02 + salary03;

console.warn(hoursPV + " / ("+ limitPV +" - "+ absencePV);
indexA = hoursPV / (limitDaysPV-absencePV);
indexB = salaryPV;
indexC = indexC1 + indexC2 + indexC3;
console.warn(indexA + " - INDEX A" + indexB + " - INDEX B" + indexC + " -INDEX C")

vacationPaidRate = indexA*(indexB/indexC);
sickLeavePaidRate = (salarySL/hoursSL)*8;
console.error(vacationPaidRate + " GEL #1 vacation ");

console.error(
    "limit01:", limit01,
    "limit02:", limit02,
    "limit03:", limit03,
    "hours01:", hours01,
    "hours02:", hours02,
    "hours03:", hours03,
    "salary01:", salary01,
    "salary02:", salary02,
    "salary03:", salary03,
    "bonus01:", bonus01,
    "bonus02:", bonus02,
    "bonus03:", bonus03,
    "absence01:", absence01,
    "absence02:", absence02,
    "absence03:", absence03,
    "salaryValue01:", salaryValue01,
    "salaryValue02:", salaryValue02,
    "salaryValue03:", salaryValue03,
    "limit:", limitPV,
    "limit days", limitDaysPV,
    "hours:", hoursPV,
    "Salary: ", salaryPV,
    "Bonus: " ,bonusPV,
    "Absence: ",absencePV, 
    "salary-total" ,salaryValue,
);

return vacationPaidRate;
return sickeLeavPaidRate;
    }
paidVacationsCalculate();

////
for (let i = 3; i >= 0; i--) {
    if (sgcBonus === bonusMoney.sgc[i]) {
        sgcBonusLVL = bonusApprovedText[i];
    }

    if (dealingSpeedBonus === bonusMoney.dealingSpeed[i]) {
        dealingSpeedBonusLVL = bonusApprovedText[i];
    }

    if (cooperationBonus === bonusMoney.cooperation[i]) {
        cooperationBonusLVL = bonusApprovedText[i];
    }

    if (reactionBonus === bonusMoney.reaction[i]) {
        reactionBonusLVL = bonusApprovedText[i];
    }

    if (evaluationBonus === bonusMoney.evaluation[i]) {
        evaluationBonusLVL = bonusApprovedText[i];
    }
}



///////

      nonHolidaySalary = (workingHours * hourSalary);
      nightSalary = (nightWorkingHours * nightHourSalary);
      holidaySalary = (holidayHours * hourSalary);
      overtimeSalary = (overtime * hourSalary * 50/100);
      bonusSalary = (hourBonus * workingHours);
      additionalBonusSalary = additionalBonus;
      paidVacationsSalary = (vacationPaidRate*paidVacations);
      sickLeaveSalary = (sickLeavePaidRate * sickLeave);
      bonusShiftSalary = (bonusShift * bonusShiftRate);
      totalSalaryGross = (nonHolidaySalary+nightSalary+holidaySalary+bonusSalary+additionalBonusSalary+paidVacationsSalary+sickLeaveSalary+bonusShiftSalary);
      incomeTax = totalSalaryGross * 20/100;
      pensionTax = totalSalaryGross * 2/100;
      totalSalaryNet = totalSalaryGross - incomeTax - pensionTax - otherTax;


      nonHolidaySalary = nonHolidaySalary.toFixed(2);
      nightSalary = nightSalary.toFixed(2);
      holidaySalary = holidaySalary.toFixed(2);
      overtimeSalary = overtimeSalary.toFixed(2);
      bonusSalary = bonusSalary.toFixed(2);
      additionalBonusSalary = additionalBonus.toFixed(2);
      paidVacationsSalary = paidVacationsSalary.toFixed(2);
      sickLeaveSalary = sickLeaveSalary.toFixed(2);
      bonusShiftSalary = bonusShiftSalary.toFixed(2);
      incomeTax = incomeTax.toFixed(2);
      pensionTax = pensionTax.toFixed(2);
      otherTax = otherTax.toFixed(2);
      totalSalaryGross = totalSalaryGross.toFixed(2);
      totalSalaryNet = totalSalaryNet.toFixed(2);
      vacationPaidRate = vacationPaidRate.toFixed(2);
      sickLeavePaidRate = sickLeavePaidRate.toFixed(2);

document.getElementById("nonHolidaySalary").textContent = nonHolidaySalary + " GEL   " + workingHours + " Hours";
document.getElementById("holidaySalary").textContent = holidaySalary + " GEL   " + holidayHours + " Hours";
document.getElementById("nightSalary").textContent = nightSalary + " GEL   " + nightWorkingHours+ " Hours";
document.getElementById("overtimeSalary").textContent = overtimeSalary + " GEL   " + overtime + " Hours";
document.getElementById("bonusSalary").textContent = bonusSalary + " GEL   " + hourBonus + " GEL/Hour"   ;
document.getElementById("additional-bonus-span").textContent = additionalBonusSalary + " GEL";
document.getElementById("paidVacationsSalary").textContent = paidVacationsSalary + " GEL   " + paidVacations + " Days";
document.getElementById("sickLeaveSalary").textContent = sickLeaveSalary + " GEL   " + sickLeave + " Days";
document.getElementById("bonusShiftSalary").textContent = bonusShiftSalary + " GEL   " + bonusShift + " days";
document.getElementById("totalSalaryGross").textContent = totalSalaryGross + " GEL";
document.getElementById("income-tax").textContent = incomeTax + " GEL";
document.getElementById("pension-fund").textContent = pensionTax + " GEL";
document.getElementById("other-tax-span").textContent = otherTax + " GEL";
document.getElementById("net-salary").textContent = totalSalaryNet + " GEL";
document.getElementById("pvPaidRateSpan").textContent = vacationPaidRate + " GEL";
document.getElementById("slPaidRateSpan").textContent = sickLeavePaidRate + " GEL";

// Log all variables
console.log("Working Hours: " + workingHours);
console.log("Hourly Salary: " + hourSalary);
console.log("Night Hours: " + nightWorkingHours);
console.log("Night Hourly Salary: " + nightHourSalary);
console.log("Holiday Hours: " + holidayHours);
console.log("Overtime Hours: " + overtime);
console.log("Additional Bonus: " + additionalBonus);
console.log("Bonus Shift: " + bonusShift);
console.log("Bonus Shift Rate: " + bonusShiftRate);

console.warn("Non-Holiday Salary: " + nonHolidaySalary);
console.warn("Night Salary: " + nightSalary);
console.warn("Holiday Salary: " + holidaySalary);
console.warn("Overtime Salary: " + overtimeSalary);
console.warn("Bonus Salary: " + bonusSalary);
console.warn("Additional Bonus Salary: " + additionalBonusSalary);
console.warn("Paid Vacations Salary: " + paidVacationsSalary);
console.warn("Sick Leave Salary: " + sickLeaveSalary);
console.warn("Bonus Shift Salary: " + bonusShiftSalary);

    // Create a new row in the table
    var table = document.getElementById("user-table");
    var row = table.insertRow(-1);

    // Insert values into cells
    // var nameCell = row.insertCell(0);
    var monthCell = row.insertCell(0);
    var approvedCell = row.insertCell(1);
    var totalHoursCell = row.insertCell(2);
    var abscenseCell = row.insertCell(3)
    var lengthOfServiceCell = row.insertCell(4);
    var violationCell = row.insertCell(5);
    var sgcCell = row.insertCell(6);
    var paCell = row.insertCell(7);
    var cardSpeedCell = row.insertCell(8);
    var reactionCell = row.insertCell(9); 
    var cooperationCell = row.insertCell(10);
    var hourBonusCell = row.insertCell(11);
    var totalBonusCell = row.insertCell(12);
    // var breachCell = row.insertCell(7);
    var salaryCell = row.insertCell(13);
    // nameCell.innerHTML = name; 
    monthCell.innerHTML = globalLimit[activeMonth].month;
    totalHoursCell.innerHTML = workingHours;
    abscenseCell.innerHTML = paidVacations +" PV "+ " <br> " + sickLeave + " SL"
    lengthOfServiceCell.innerHTML = "STAGE " + stage + " - " + shiftType ;
    approvedCell.innerHTML = bonusApprovedText[approvedLVL];
    sgcCell.innerHTML = sgcBonusLVL + " <br>" + sgcBonus + " GEL";
    cardSpeedCell.innerHTML = dealingSpeedBonusLVL + "<br>" + dealingSpeedBonus + " GEL";
    paCell.innerHTML = evaluationBonusLVL + "<br>" + evaluationBonus + " GEL";
    reactionCell.innerHTML = reactionBonusLVL + "<br>" + reactionBonus + " GEL";
    cooperationCell.innerHTML =cooperationBonusLVL + "<br>" + cooperationBonus + " GEL";
    hourBonusCell.innerHTML = hourBonus + " GEL";
    totalBonusCell.innerHTML = bonusSalary + " GEL";
    violationCell.innerHTML = violationPoints ;
    // breachCell.innerHTML = breach;
    salaryCell.innerHTML = totalSalaryNet + " GEL";

   document.getElementById("avg-perfomance-bonus").textContent = evaluationBonusLVL + "  |  " + evaluationBonus + " GEL";
   document.getElementById("SGC-bonus").textContent = sgcBonusLVL + "  |  " + sgcBonus + " GEL";
   document.getElementById("dealing-speed-bonus").textContent = dealingSpeedBonusLVL + "  |  " + dealingSpeedBonus + " GEL";
   document.getElementById("initial-reaction-bonus").textContent = reactionBonusLVL + "  |  " + reactionBonus + " GEL";
   document.getElementById("cooperation-bonus").textContent = cooperationBonusLVL + "  |  " + cooperationBonus + " GEL";;

});

    


  });



  // Function to open the information window
 function openInfoWindow(iconId) {
    var infoWindow = document.getElementById(iconId + "-window");
    // infoWindow.innerHTML = content + '<br><button onclick="closeInfoWindow(\'' + iconId + '\')">Close</button>';
    infoWindow.style.display = "block";
  }
  
  // Function to close the information window
  function closeInfoWindow(iconId) {
    var infoWindow = document.getElementById(iconId + "-window");
    infoWindow.style.display = "none";
  }
  
  
  var stageInfoIcon = document.getElementById("stage-info");
  stageInfoIcon.addEventListener("click", function () {
    openInfoWindow("stage");
  });
  // hours-info
  var hoursInfoIcon = document.getElementById("hours-info");
  hoursInfoIcon.addEventListener("click", function () {
    openInfoWindow("hours");
  });
  
  // nightHours-info
  var nightHoursInfoIcon = document.getElementById("nightHours-info");
  nightHoursInfoIcon.addEventListener("click", function () {
    openInfoWindow("nightHours");
  });
  
  // holidayHours-info
  var holidayHoursInfoIcon = document.getElementById("holidayHours-info");
  holidayHoursInfoIcon.addEventListener("click", function () {
    openInfoWindow("holidayHours");
  });
  
  // sickLeave-info
  var sickLeaveInfoIcon = document.getElementById("sickLeave-info");
  sickLeaveInfoIcon.addEventListener("click", function () {
    openInfoWindow("sickLeave");
  });
  
  // bonusShift-info
  var bonusShiftInfoIcon = document.getElementById("bonusShift-info");
  bonusShiftInfoIcon.addEventListener("click", function () {
    openInfoWindow("bonusShift");
  });
  
  // paidHours-info
  var paidHoursInfoIcon = document.getElementById("paidHours-info");
  paidHoursInfoIcon.addEventListener("click", function () {
    openInfoWindow("paidHours");
  });
  
  // vio-info
  var vioInfoIcon = document.getElementById("vio-info");
  vioInfoIcon.addEventListener("click", function () {
    openInfoWindow("vio");
  });
  // bonusType-info
  var bonusTypeInfoIcon = document.getElementById("bonusType-info");
  bonusTypeInfoIcon.addEventListener("click", function () {
    openInfoWindow("bonusType");
  });
  
  var evaluationInfoIcon = document.getElementById("evaluation-info");
  evaluationInfoIcon.addEventListener("click", function () {
    openInfoWindow("evaluation");
  });

  var reactionInfoIcon = document.getElementById("reaction-info");
  reactionInfoIcon.addEventListener("click", function () {
    openInfoWindow("reaction");
  });
  var dealingInfoIcon = document.getElementById("dealing-info");
  dealingInfoIcon.addEventListener("click", function () {
    openInfoWindow("dealing");
  });
  var cooperationInfoIcon = document.getElementById("cooperation-info");
  cooperationInfoIcon.addEventListener("click", function () {
    openInfoWindow("cooperation");
  });

  var pvInfoIcon = document.getElementById("pv-info");
  pvInfoIcon.addEventListener("click", function () {
    openInfoWindow("pv");
  });

  var additionalBonusInfoIcon = document.getElementById("additional-bonus-info");
  additionalBonusInfoIcon.addEventListener("click", function () {
    openInfoWindow("additional-bonus");
  });
  var otherTaxIcon = document.getElementById("other-tax-info");
  otherTaxIcon.addEventListener("click", function () {
    openInfoWindow("other-tax");
  });