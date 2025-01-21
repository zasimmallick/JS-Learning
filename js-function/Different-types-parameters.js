function evenSizedString(str) {
    const length = str.length;
    console.log(str, length);

    if (length % 2 === 0) {
        console.log("String is not even sized");
        return false;
       
    }else{
        console.log("String is even sized");
    }
    return true;
   
}

evenSizedString("Hello");
evenSizedString("Zasim Mallick");


