/// <reference path="jquery-1.10.2.js" />
$(document).ready(function () {
    //*************************************************
    //snap
    //*************************************************
    $(document).scrollsnap({
        snaps: '.snap',
        proximity: 400,
        easing: 'easeOutBack'
    });
    //*************************************************
    //header
    //*************************************************
    $('.buttonStyle').hide();
    $('.header').on('mouseover', function () {
        if (!$('.buttonStyle').is(":visible")) {
            $('.buttonStyle').slideDown(function () {
                $('.buttonStyle').css('color', '#D7E9ED');
            });//css('display','block');
            
            //
        }
    });
    $('.header').on('mouseleave', function () {
        if ($('.buttonStyle').is(':visible')) {
            $('.buttonStyle').css('color', '#1C2329');
            $('.buttonStyle').slideUp();
        }
    });
    $('.buttonStyle').on('click', function (event) {
        switch (event.currentTarget.innerHTML) {
            case 'Experience':
                //console.log($(this));
                $('html, body').animate({
                    scrollTop: $('.sectionTwo').offset().top
                }, 1000);
                break;
            case 'Projects And Sites':
                $('html, body').animate({
                    scrollTop: $('.sectionThree').offset().top
                }, 1000);
                break;
        }
    });
    //*************************************************
    //chart
    //*************************************************
    var data = {
        labels: ["Javascript", "ExtJS", "C#", ".Net", "HTML", "CSS","SQL"],
        datasets: [
            {
                fillColor: "#7A90A8",
                //strokeColor: "rgba(220,220,220,1)",
                strokeColor: "white",
                data: [8, 10, 10, 9, 8, 7 ,7]
            }
        ]
    }
    options = {

        //Boolean - If we show the scale above the chart data			
        scaleOverlay: false,

        //Boolean - If we want to override with a hard coded scale
        scaleOverride: true,

        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps: 10,
        //Number - The value jump in the hard coded scale
        scaleStepWidth: 1,
        //Number - The scale starting value
        scaleStartValue: 0,

        //String - Colour of the scale line	
        scaleLineColor: "rgba(0,0,0,.1)",

        //Number - Pixel width of the scale line	
        scaleLineWidth: 1,

        //Boolean - Whether to show labels on the scale	
        scaleShowLabels: false,

        //Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        //String - Scale label font declaration for the scale label
        scaleFontFamily: "'Arial'",

        //Number - Scale label font size in pixels	
        scaleFontSize: 12,

        //String - Scale label font weight style	
        scaleFontStyle: "normal",

        //String - Scale label font colour	
        scaleFontColor: "#D7E9ED",

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - If there is a stroke on each bar	
        barShowStroke: true,

        //Number - Pixel width of the bar stroke	
        barStrokeWidth: 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,

        //Boolean - Whether to animate the chart
        animation: true,

        //Number - Number of animation steps
        animationSteps: 60,

        //String - Animation easing effect
        animationEasing: "easeOutQuart",

        //Function - Fires when the animation is complete
        onAnimationComplete: null

    }
    var ctx = document.getElementById("skillsChart").getContext("2d");
    var skillsChart = new Chart(ctx).Bar(data, options);

});
