

const numberToLetters = [, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const dataToGraph = [88, 33, 53, 7, 93, 5, 15, 1, 18, 66];

const drawBarChart = function (data, options, element) {

    console.log('draw bar chart ran');


    for(let i = 1; i <= 10 && data[i]; i++){

        console.log('this ran');

        let id = '#graph' + numberToLetters[i];
        let newClass = "percentage percentage-" + data[i];
        //alert(id);
        $(id).removeClass("percentage percentage-1");
        $(id).addClass(newClass);
        $(id + " > span.text").append(data[i]);
    }
}

function buttonPush( ) {  
  //  $("#graphOne").removeClass("percentage percentage-1");
 //   $("#graphOne").addClass("percentage percentage-90");
    //$("percentage").after("<dd class="percentage percentage-16"><span class="text">Firefox: 16.09%</span></dd>")

    drawBarChart(dataToGraph);


}

