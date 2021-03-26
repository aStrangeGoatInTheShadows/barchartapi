

const numberToLetters = [, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const drawBarChart = function (data, options, element) {
    
}

function buttonPush( ) {  
    $("#graphOne").removeClass("percentage percentage-1");
    $("#graphOne").addClass("percentage percentage-90");
    //$("percentage").after("<dd class="percentage percentage-16"><span class="text">Firefox: 16.09%</span></dd>")

    for(let i = 1; i <= 10; i++){
        let id = '#graph' + numberToLetters[i];
        //alert(id);
       // $(id).removeClass("percentage percentage-1");
    }
}

