const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const resultSpan = document.getElementById('result');
document.getElementById('text').focus();
document.getElementById('text').select();
encryptButton.addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const password = document.getElementById('password').value;
  const encryptedText = encryptWithPassword(text, password);
  resultSpan.textContent = encryptedText;
  navigator.clipboard.writeText(encryptedText);
  document.getElementById('text').focus();
  document.getElementById('text').select();
});
decryptButton.addEventListener('click', () => {
  const encryptedText = document.getElementById('text').value;
  const password = document.getElementById('password').value;
  const decryptedText = decryptWithPassword(encryptedText, password);
  resultSpan.textContent = decryptedText;
  navigator.clipboard.writeText(decryptedText);
  document.getElementById('text').focus();
  document.getElementById('text').select();
});
function encryptWithPassword(text, password) {
  const encrypted = CryptoJS.AES.encrypt(text, password);
  return encrypted.toString();
}
function decryptWithPassword(encryptedText, password) {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, password);
  return decrypted.toString(CryptoJS.enc.Utf8);
} 