// onChangeイベントで入ってくる
function calc() {

    // 画面入力した値を日付型に変換
    lastday = new Date($('#lastday').val());
    today   = new Date($('#today').val());

    // getTime 経過ミリ秒を取得
    // console.log(lastday.getTime());
    // console.log(today.getTime());
    // console.log(lastday);
    // console.log(today);

    var keika_mm = lastday.getTime() - today.getTime();

    // getTimeで日付⇒経過秒に変換
    // Math.floorで小数点の切捨て
    // 1000 * 60 * 60 *24の計算で秒⇒日にする
    if (keika_mm > 0) {
        var days = Math.floor(keika_mm / (1000 * 60 * 60 *24));
    } else {
        var days = 0;
    }
    // 計算結果をID=daysのテキスト項目に表示
    $('#days').val(days);  
}

function formatdate(date) {

    // 先頭0埋めをしている
    var toTwoDigits = function (num, digit) {
        num += ''
        if (num.length < digit) {
        num = '0' + num
        }
        return num
    };

    // date変数が日付型かどうか確認 日付型でなければ日付型にしている
    // trueなら、date変数 falseなら、システム日付
    date = date ? date : new Date()
    // システム日付から年を取得
    var year  = date.getFullYear()
    // システム日付から月を取得（0～11月なので+1する事）
    var month = date.getMonth() + 1
    // システム日付から日を取得
    var day   = date.getDate()

    var yyyy  = toTwoDigits(year, 4)
    var mm    = toTwoDigits(month, 2)
    var dd    = toTwoDigits(day, 2)
    var ymd   = yyyy + "-" + mm + "-" + dd;
    return ymd;
}

// Form_Load時の入ってくると思われる
// システム日付を初期表示
$(function() {
    $('#lastday').val(formatdate());
    $('#today').val(formatdate());
    $('#days').val("");
}());
