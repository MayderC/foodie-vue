export const passwordValid = (password1: string, password2: string) => {
  if (password1.length < 6) return false;
  if (password1 !== password2) return false;
  return true;
};
