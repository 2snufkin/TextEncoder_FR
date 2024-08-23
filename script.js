document.getElementById('convertButton').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;

    let convertedText = inputText
        .replace(/é/g, 'Ã©')
        .replace(/è/g, 'Ã¨')
        .replace(/à/g, 'Ã ')
        .replace(/ï/g, 'Ã¯')
        .replace(/ô/g, 'Ã´')
        .replace(/ç/g, 'Ã§')
        .replace(/ê/g, 'Ãª')
        .replace(/ù/g, 'Ã¹')
        .replace(/û/g, 'Ã»')
        .replace(/î/g, 'Ã®');

    document.getElementById('outputText').value = convertedText;
});
