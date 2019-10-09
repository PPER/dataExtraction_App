Vue.filter('extraction', function (value) {
    if (!value) return 0;
    value = value.toString();
    var numbers = value.match(/\d+/g);
    if(!numbers)return 0;
    else numbers=numbers.map(Number);
    var result=0;
    for(elt in numbers)result+=numbers[elt];
    return result;
})

var app = new Vue({
    delimiters: ['[[', ']]'],
    el:"#app1",
    data:{
        msg:"hihsdka 40 3"
    }
});

