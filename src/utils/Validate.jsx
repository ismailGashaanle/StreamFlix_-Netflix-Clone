export const CheckValidate = (email, password,name,confirmpassword) => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]).{8,}$/.test(password);
    //const isValidConfirmPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]).{8,}$/.test(confirmpassword);
  

    if (!isValidEmail) return "Email ID is not valid";
    if (!isValidPassword) return "Password is not valid";
  
//    if(!isValidConfirmPassword) return "confirm password is incorrect"
 

if(name !==undefined){

      const isValidName=/^([a-zA-Z ]){2,30}$/.test(name)

      if(!isValidName) return "Name is not valid Name use correct Name"

    if(password !==confirmpassword) return "password does not matched !!!"

}

    return null;
}
