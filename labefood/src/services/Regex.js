export const validateEmail = new RegExp('^[a-zA-Z0-9._:$!%-]{3,}@[a-zA-Z0-9.-]{2,}[.][a-z]{2,3}$');

export const validatePassword = new RegExp('^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$ ');

export const validateName = new RegExp('^[A-Z][a-z].* [A-Z][a-z].*');

export const validateCpf = new RegExp('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$');

export const  validateStreet = new RegExp('^(RUA|Rua|R.|AVENIDA|Avenida|AV.|TRAVESSA|Travessa|TRAV.|Trav.) ([a-zA-Z_]+)[, ]+(\d+)\s?([-/\da-zDA-Z\\ ]+)?$');