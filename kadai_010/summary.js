$(function() {

    // 文字色変化
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });
    // 文字内容変更
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });
    // フェードアウト
    $('#fade-out').on('click', function(){
        $('#target').hide();
    });
    // フェードイン
    $('#fade-in').on('click', function(){
        $('#target').show();
    });
});



