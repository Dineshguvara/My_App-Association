export const emailValidator = email =>{
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email);  
}

export const  passwordValidator = password =>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}