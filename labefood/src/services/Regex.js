export const validateEmail = new RegExp('^[a-zA-Z0-9._:$!%-]{3,}@[a-zA-Z0-9.-]{2,}[.][a-z]{2,3}$');

export const validatePassword = new RegExp('^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$ ')