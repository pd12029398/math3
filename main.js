function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    question_word="<h4 id='word_display'> Q."+remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    }
    