

const numberToLetters = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven'];

//const dataToGraph = [88, 33, 53, 7, 93, 5, 15, 1, 18, 66];
const dataToGraph = [88, 33, 53, 7, 93, 5, 15, 1, 18, 66, 8, 9 , 10, 11, 12, 13, 14];

const drawVerticalBarChart = function (data, show, options, element) {
    console.log('draw vertical bar chart ran');
    
    for(let i = 1; i <= 20; i++) {
        let id = '#vG' + i;
        $(id).hide();
        console.log('we hid ' + id);
    }

    for(let i = 1; i <= data.length; i++) {
        let id = '#vG' + i;
        $(id).show();
        $(id).css("width", 50 / data.length + "%");
        console.log('we unhid ' + id);
    }
}

const drawHorizontalBarChart = function (data, show, options, element) {

    console.log('draw horizontal bar chart ran');

    for (let i = 1; i <= data.length && data[i - 1]; i++) {
        let id = '#graph' + numberToLetters[i - 1];
        let newClass = "percentage percentage-" + data[i];

        //console.log(i + ' ' + id);

        $(id).removeClass("percentage percentage-1");
        $(id).addClass(newClass);
        if (!show) {
            $(id).hide();
        }

        $(id + " > span.text").append(data[i - 1]);
        $(id + " > span.text").css("left", 200);
    }
}

function buttonPush() {
    //  $("#graphOne").removeClass("percentage percentage-1");
    //   $("#graphOne").addClass("percentage percentage-90");
    //$("percentage").after("<dd class="percentage percentage-16"><span class="text">Firefox: 16.09%</span></dd>")




}

