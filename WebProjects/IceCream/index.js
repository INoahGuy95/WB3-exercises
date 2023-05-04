function on25OptionChange() {
  const row = document.getElementById('Cup');
  if (document.getElementById('Cup').checked) {
    row.style.display = 'table-row';
  } else {
    row.style.display = 'none';
  }
}