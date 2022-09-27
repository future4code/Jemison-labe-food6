export const validateEmail = new RegExp('^[\w.\-]{3,}@[\w.\-]{2,}\.[a-z]{2,3}$');
export const validatePassword = new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$');