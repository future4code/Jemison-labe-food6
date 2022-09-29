export const validateEmail = new RegExp('^[a-zA-Z0-9._:$!%-]{3,}@[a-zA-Z0-9.-]{2,}[.][a-z]{2,3}$');

export const validatePassword = new RegExp('^(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$ ');

export const validateName = new RegExp('^[A-Za-z]+.*$');

export const validateCpf = new RegExp('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$');

export const  validateStreet = new RegExp('^[a-zA-Z_\s.A-zÀ-ú]+$')

export const validateNumber = new RegExp('^[0-9]+[a-zA-Z]?$')

export const validateComp = new RegExp('^(Bloco|BLOCO|BL.|APTO.|AP.|Apartamento|Casa|casa|Sobrado)([a-zA-Z_.A-zÀ-ú0-9]+)?$')

export const validateNeighbourhood = new RegExp('^[A-Z][a-z]+.*$');

export const validateCity = new RegExp('^[A-Z][a-z]+.*$');

export const validateState = new RegExp('^[A-Z]{2}.*$');
