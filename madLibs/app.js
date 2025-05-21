const wNodes = document.querySelectorAll('input[type=text]');
const pars = document.querySelectorAll('p');

// Store original paragraph text so we can re-fill blanks
const originalText = Array.from(pars).map(p => p.innerHTML);

wNodes.forEach(input => input.addEventListener('blur', update));

function twoDigit(n) {
    return n.toString().padStart(2, '0');
}

function update() {
    let wordIndex = 1;

    pars.forEach((par, i) => {
        let text = originalText[i]; // Reset to original
        const blankRegex = /________________/g;

        text = text.replace(blankRegex, () => {
            const inputId = 'word' + twoDigit(wordIndex++);
            const input = document.getElementById(inputId);
            // Only replace with input value if it's not empty
            if (input && input.value !== '') {
                return input.value;  // Replace (blank) with input value
            }
            return '________________';  // Keep placeholder if input is empty
        });

        par.innerHTML = text;
    });
}

document.querySelectorAll('input.number').forEach(input => {
    input.addEventListener('input', () => formatNumberInput(input));
});

function formatNumberInput(input) {
    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;
    const originalValue = input.value;

    // Remove commas and thin spaces for clean parsing
    let cleaned = originalValue.replace(/,/g, '').replace(/\u2009/g, '');

    // Detect if user has typed a decimal but no digits after it yet
    const endsWithDecimal = cleaned.endsWith('.');

    // Split into integer and decimal parts
    let [integerPart, decimalPart] = cleaned.split('.');

    // Clean integer part
    integerPart = integerPart.replace(/\D/g, '');

    // Format integer part with commas
    const formattedInt = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Format decimal part with thin spaces
    let formattedDec = '';
    if (decimalPart !== undefined) {
        decimalPart = decimalPart.replace(/\D/g, '');
        formattedDec = decimalPart.replace(/(.{3})/g, '$1\u2009');
    }

    // Build the final value
    let formatted = formattedInt;
    if (endsWithDecimal && formattedDec === '') {
        formatted += '.'; // keep just the dot
    } else if (decimalPart !== undefined) {
        formatted += '.' + formattedDec;
    }

    // Update value and restore cursor position
    input.value = formatted;
    const diff = formatted.length - originalValue.length;
    input.setSelectionRange(selectionStart + diff, selectionEnd + diff);
}
