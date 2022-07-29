/**
 * @module @manenderk/js-utils/password
 */

/**
 * Enum for PassswordStrength
 */
export enum PasswordStrength {
  weak = "weak",
  medium = "medium",
  strong = "strong",
}

/**
 * Enum for Password Strength
 */
export enum StrengthFactors {
  hasUpperCase = "hasUpperCase",
  hasLowerCase = "hasLowerCase",
  hasDigit = "hasDigit",
  hasSpecialCharacter = "hasSpecialCharacter",
  hasMinimum6CharacterLength = "hasMinimum6CharacterLength",
}

/**
 * Function that determines the strength of provided password
 * @example
 * checkPasswordStrength('thisIsPassword')
 * returns
 * {
 *    strength: PasswordStrength.weak,
 *    failingFactors= [
 *        StrengthFactors.hasDigit,
 *        StrengthFactors.hasSpecialCharacter
 *    ]
 * }
 * @param password - Password to Validate
 * @returns - Returns Strength of Password And Missing Strengh Factors
 */
export const checkPasswordStrength = (
  password: string
): {
  strength: PasswordStrength;
  failingFactors: StrengthFactors[];
} => {
  let strength: PasswordStrength = PasswordStrength.weak;
  let failingFactors: StrengthFactors[] = [];

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialCharacter = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
  const passwordLength = password.length;

  if (
    hasUpperCase &&
    hasLowerCase &&
    hasDigit &&
    hasSpecialCharacter &&
    passwordLength >= 8
  ) {
    strength = PasswordStrength.strong;
  } else if (
    hasUpperCase &&
    hasLowerCase &&
    hasDigit &&
    hasSpecialCharacter &&
    passwordLength >= 6
  ) {
    strength = PasswordStrength.medium;
  } else if (
    hasUpperCase &&
    hasLowerCase &&
    hasSpecialCharacter &&
    passwordLength >= 8
  ) {
    strength = PasswordStrength.medium;
  } else {
    strength = PasswordStrength.weak;
  }

  if (!hasUpperCase) {
    failingFactors.push(StrengthFactors.hasUpperCase);
  }
  if (!hasLowerCase) {
    failingFactors.push(StrengthFactors.hasLowerCase);
  }
  if (!hasDigit) {
    failingFactors.push(StrengthFactors.hasDigit);
  }
  if (!hasSpecialCharacter) {
    failingFactors.push(StrengthFactors.hasSpecialCharacter);
  }
  if (passwordLength < 6) {
    failingFactors.push(StrengthFactors.hasMinimum6CharacterLength);
  }

  return {
    strength,
    failingFactors,
  };
};
