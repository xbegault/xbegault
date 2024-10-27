AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

const birthdate = '08/07/1987';

const calculateAge = (birthdate) => {
  const [day, month, year] = birthdate.split('/');
  const birth = new Date(year, month - 1, day);
  
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();

  if (
      today.getMonth() < birth.getMonth() || 
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
      age--;
  }
  
  return age;
}

document.querySelector('#age').textContent = calculateAge(birthdate);
