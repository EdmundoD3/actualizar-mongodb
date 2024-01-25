function formatDate(DateString) {
  const dateParts = DateString.split("/");
  const bigEndianFormat = dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2];
  const formatedDate = new Date(bigEndianFormat);
  return formatedDate
}

export {formatDate}