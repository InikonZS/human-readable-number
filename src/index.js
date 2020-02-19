module.exports = function toReadable (number) {
    if (!number) {return "zero";}
    var dig_s="one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen";
    var dec_s="twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety"
    var exp_s="thousand, million, billion";  // why i write it before i saw a test
    var th="hundred";
    var dig=dig_s.split(', ');
    dig.unshift("");
    var exp=exp_s.split(', ');
    exp.unshift("");
    var dec=dec_s.split(', ');
    var triplets=[];
    var n=number;
    while (n>0){
        triplets.unshift(n%1000);
        n=(n-(n%1000))/1000;
    }
    var mx=triplets.length;
    var res="";
    for (let i=0;i<triplets.length;i++){
        
        let fd=(triplets[i]-(triplets[i]%100))/100;
        //by inikon
        let dd=(triplets[i]-(fd*100)-((triplets[i]-(fd*100))%10))/10;
        let sd=triplets[i]%100;
        let ld=triplets[i]%10;
        let sd_s="";
        if (sd<20){
            sd_s= dig[sd];
        } else {
            sd_s= dec[dd-2]+' '+dig[ld];

        }
        if (fd>0){
            res+=dig[fd]+" "+th+ " " +sd_s +" " + (mx>1?exp[mx-i-1]:"")+" ";
        } else {
            res+=sd_s +" " + (mx>1?exp[mx-1]:"")+" ";
        }
    }
    return res.trim();
}
