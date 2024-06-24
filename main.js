let mailto2 = document.getElementById('mailto2').innerHTML;
let mailto1 = document.getElementById('mailto1').innerHTML;
let phone1 = document.getElementById('phone1').innerHTML;
let phone2 = document.getElementById('phone2').innerHTML;
const copyContentmailto2 = async () => {
  try {
    await navigator.clipboard.writeText(mailto2);
    alert(true);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
const copyContentmailto1 = async () => {
  try {
    await navigator.clipboard.writeText(mailto1);
    alert(true);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
const copyContentphone1 = async () => {
  try {
    await navigator.clipboard.writeText(phone1);
    alert(true);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
const copyContentphone2 = async () => {
  try {
    await navigator.clipboard.writeText(phone2);
    alert(true);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}