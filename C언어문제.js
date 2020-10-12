function loadScript() {
  $(function(){
    const shuffle = () => Math.random() - Math.random();
    qList.sort(shuffle);
    var allThings = [];
    var correctThings = [];
    var wrongThings = [];
    $('#start').click(function(){
      $('#title, #start').remove();
      function nextFunc() {
        $('#storage').text($('#objAnsList').text()).empty();
        $('#storage').text($('#objAnsList2').text()).empty();
        $('#storage').text($('#objAnsList3').text()).empty();
        $('#storage').text($('#objAnsList4').text()).empty();
        $('#answerChoice div').slideDown();
        $('#a').hide();
        algorism();
      }
      $('#question, #answerChoice, #grid div').show();
      $('#grid div').css('display', 'inline-block');
      $('#answerChoice div').show();
      algorism();
      function algorism() {
        if(qList == false) {
          $('#question, #storageFrame, #storage, #a, #wrong, #answerChoice div, #answerChoice div span, #correct, #grid, #grid div, #message').hide().remove();
          $('#consequenceA div').slideDown(function(){
            $('#scoreA').text('당신이 맞춘 문제 : ' + correctThings.length);
            $('#scoreB').text('당신이 틀린 문제 : ' + wrongThings.length);
            $('#sum').text('지금까지 푼 문제 : ' + allThings.length);
            $('#complete').show();
          });
        } else {
          var fList = qList.shift();
          fList.question().text();
          fList.answer().text();
          fList.objAnsList().text();
          fList.objAnsList2().text();
          fList.objAnsList3().text();
          fList.objAnsList4().text();
          $('#storageFrame').show();
          $('#answer').click(function(){
            if(fList.answer().text() != false) {
              $('#a').show();
              $('#a').text("정답은 : " + fList.answer().text());
            } else {
              alert("오류가 발생하였습니다!");
            }
          });
          $('#answerList').click(function(){
            $('#storage').text($('#objAnsList').text());
          });
          $('#answerList2').click(function(){
            $('#storage').text($('#objAnsList2').text());
          });
          $('#answerList3').click(function(){
            $('#storage').text($('#objAnsList3').text());
          });
          $('#answerList4').click(function(){
            $('#storage').text($('#objAnsList4').text());
          });
        }
      }
      $('#next').click(function(){
        if($('#storage').text() == false) {
          $('#message').slideDown().fadeOut();
        } else if($('#answer').text() == $('#storage').text()) {
          allThings.push($('#storage').text());
          correctThings.push($('#storage').text());
          alert($('#correct').text());
          nextFunc();
        } else {
          $('#wrong').slideDown().fadeOut(function(){
            allThings.push('WRONG');
            wrongThings.push('WRONG');
            nextFunc();
          });
        }
      });
      $('#consequence').click(function(){
        $('#question, #storageFrame, #storage, #a, #wrong, #answerChoice div, #answerChoice div span, #correct, #grid, #grid div, #message').hide().remove();
        $('#consequenceA div').slideDown(function(){
          $('#scoreA').text('당신이 맞춘 문제 : ' + correctThings.length);
          $('#scoreB').text('당신이 틀린 문제 : ' + wrongThings.length);
          $('#sum').text('지금까지 푼 문제 : ' + allThings.length);
          $('#complete').show();
        });
      });
    })
  })
}
