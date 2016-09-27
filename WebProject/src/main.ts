var S1 : number = 0;
 var S2 : number = 0;
 var S3 : number = 5;
 var S4 : number = 0;


 
 var aaa = "";
 var bbb= "";
 var ccc= " ";
 var ddd = "*";





 S4 = HOME(S3);


 
 
     function play(n : number) : void{
            for(S1 = 0 ; S1 < n; S1++){
                for(S2 = 0; S2< n - S1; S2++){
                        aaa = aaa + ccc;
            }
            for(S2 = 0; S2 < 2 * S1 + 1; S2++){
                    bbb = bbb + ddd;
            }
    
    
    console.log(aaa + bbb);
    aaa = ""
    bbb = ""
        }
    }


function HOME(LOL : number) : number{
        return LOL;
}
window.onload = () => {
     play(S4);
};