function isAakash(number, text) {
  return `<a
      href="https://api.whatsapp.com/send?phone=${number}&text=${text}"
      target="_blank"
    >
      Send WhatsApp Message
    </a>`;
}
module.exports = { isAakash };
