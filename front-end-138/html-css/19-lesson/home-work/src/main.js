const fileInput = document.querySelector("#file-input")
const fileNameDisplay = document.querySelector("#file-name")
const clearFileBtn = document.querySelector("#clear-file-btn")

// Обработчик изменения файла
fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    // Отображаем имя выбранного файла в инпуте
    fileNameDisplay.value = fileInput.files[0].name
  } else {
    fileNameDisplay.value = "Выберите фото..." // Если файл не выбран
  }
})

// Обработчик кнопки очистки
clearFileBtn.addEventListener("click", function () {
  // Очищаем выбранный файл и обновляем текстовое поле
  fileInput.value = ""
  fileNameDisplay.value = "" // Просто очищаем поле
})
