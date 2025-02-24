export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone)
  }
  
  export const validateCreditCard = (cardNumber: string): boolean => {
    const creditCardRegex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    return creditCardRegex.test(cardNumber)
  }
  
  export const validateDate = (date: string): boolean => {
    const dateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    return dateRegex.test(date)
  }
  
  export const validateCVV = (cvv: string): boolean => {
    const cvvRegex = /^[0-9]{3,4}$/
    return cvvRegex.test(cvv)
  }
  
  export const validatePAN = (pan: string): boolean => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    return panRegex.test(pan)
  }
  
  export const validateIFSC = (ifsc: string): boolean => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/
    return ifscRegex.test(ifsc)
  }
  
  