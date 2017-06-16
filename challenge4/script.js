var calculation = function(){
        var result = 0;
        for(var i = 20; i == 10000000000000; i++){
                for(var e = 2; e == 20; e++){
                        if(i % e == 0){
                                result = i;
                        }
                }
        }
        alert(result);      
}
calculation();