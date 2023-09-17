import { errorSelector } from "recoil";
import { InputError } from "../interfaces/errors";

export const generateInputErrors = (inputs: string[], errors: string[]) => {

  const errorsInput: InputError[] = [];

  inputs.forEach((input) => {

    errors.forEach((error) => {

      const finded = error.match("\\b"+input+"\\b");

      if ( finded ) {

        errorsInput.push({ name: input, text: error });

      }

    })

  })

  return errorsInput;

}

export const getError = (errors: InputError[], name: string): false | InputError => {

  const inputError = errors.find(error => error.name === name);

  if ( !inputError ) return false;

  return inputError;

}