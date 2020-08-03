function check(){
    var score = 0;
    var q1_rightAns = document.getElementById("q1_a1");
    var q1_ans2  = document.getElementById("q1_a2");
    var q1_ans3  = document.getElementById("q1_a3");
    var q1_ans3  = document.getElementById("q1_a4");
    if (q1_rightAns.checked == true){
        score++
        alert("Question#1 is correct")
    }
    else{
        alert("Question#1 is incorrect")
    }

    var q2_ans1 = document.getElementById("q2_a1");
    var q2_ans2 = document.getElementById("q2_a2");
    var q2_ans2 = document.getElementById("q2_a3");
    var q2_rightAns = document.getElementById("q2_a4");
    if (q2_rightAns.checked == true){
        score++
        alert("Question#2 is correct")
    }
    else{
        alert("Question#2 is incorrect")
    }

    var q3_ans1 = document.getElementById("q3_a1");
    var q3_rightAns = document.getElementById("q3_a2");
    var q3_ans3 = document.getElementById("q3_a3");
    var q3_ans4 = document.getElementById("q4_a4");
    if (q3_rightAns.checked == true){
        score++
        alert("Question#3 is correct")
    }
    else{
        alert("Question#3 is incorrect")
    }

    var q4_ans1 = document.getElementById("q4_a1");
    var q4_ans2 = document.getElementById("q4_a2");
    var q4_rightAns = document.getElementById("q4_a3");
    var q4_ans4 = document.getElementById("q4_a4");
    if (q4_rightAns.checked == true){
        score++
        alert("Question#4 is correct")
    }
    else{
        alert("Question#4 is incorrect")
    }

    var q5_ans1 = document.getElementById("q5_a1");
    var q5_ans2 = document.getElementById("q5_a2");
    var q5_rightAns = document.getElementById("q5_a3");
    var q5_ans4 = document.getElementById("q5_a4");
    if (q5_rightAns.checked == true){
        score++
        alert("Question#5 is correct")
    }
    else{
        alert("Question#5 is incorrect")
    }

    var q6_ans1 = document.getElementById("q6_a1");
    var q6_ans2 = document.getElementById("q6_a2");
    var q6_ans2 = document.getElementById("q6_a3");
    var q6_rightAns = document.getElementById("q6_a4");
    if (q6_rightAns.checked == true){
        score++
        alert("Question#6 is correct")
    }
    else{
        alert("Question#6 is incorrect")
    }

}