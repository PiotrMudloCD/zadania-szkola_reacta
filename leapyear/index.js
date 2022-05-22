const myYear = 1980;
const msgTrue = 'Ten rok jest przestępny';
const msgFalse = 'Ten rok nie jest przestępny';

const leapYear = () => {
  if (myYear % 4 == 0) {
    if (myYear % 100 == 0) {
      if (myYear % 400 == 0) {
        return msgTrue;
      }else {
        return msgFalse;
      };
    }else {
      return msgTrue
    };
  }else {
    return msgFalse;
  };
};

console.log(leapYear(myYear));