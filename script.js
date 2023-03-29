// const body = document.body;
const { body } = document;

function changeBg(number) {
  let prevBg;
  body.className = '';

  if (body.className) {
    prevBg = body.className;
  }

  switch (number) {
    case '1':
      return (prevBg === 'bg-1' ? false : body.classList.add('bg-1'));
      
    case '2':
      return (prevBg === 'bg-2' ? false : body.classList.add('bg-2'));
    case '3':
      return (prevBg === 'bg-3' ? false : body.classList.add('bg-3'));

    default:
      break;
  }
}