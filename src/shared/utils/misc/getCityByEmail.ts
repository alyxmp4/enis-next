/**
 * @deprecated The email is not always NIS provided (user@city.nis.edu.kz), it can be changes
 */

const getCityByEmail = (email: string): string => {
  // Check if the email is valid and has the *.nis.edu.kz domain
  if (!/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.(nis\.edu\.kz)\b/.test(email)) {
    throw new Error('Invalid email')
  }

  const match = email.match(/@([^.]+)\.nis\.edu\.kz/)

  return match?.[1] ?? ''
}

export default getCityByEmail
