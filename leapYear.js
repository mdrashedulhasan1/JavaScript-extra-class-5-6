function leapYear(year){
    if((year%4 == 0) && (year%100 != 0)){
        console.log(year,"is a leap year");
    }
    else if(year%400 == 0){
        console.log(year,"is a leap year")
    }
    else{
        console.log(year,"is not a leap year")
    }
}
leapYear(2000);
leapYear(1700);
leapYear(2100);
leapYear(1900);
