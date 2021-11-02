document.addEventListener("DOMContentLoaded", function() {
    const accountData = [];
    const usageButtons = [...document.querySelectorAll('.usage-button')];
    const moneyTextArea = document.querySelector('.money');
    const accountBook1 = document.querySelector('.book1');
    const accountBook2 = document.querySelector('.book2');

    

    usageButtons.forEach(function(usageButton) {
       
        usageButton.addEventListener('click', function() {
            const moneyUsed = moneyTextArea.value;
            const usageButtonText = usageButton.textContent;
            accountData.push(moneyUsed +' '+ usageButtonText);
            accountBook1.innerHTML = '';
            accountData.forEach(function(accountDataElement) {
                accountBook1.innerHTML += accountDataElement + '<br>';
            });
        });
    });
});

// accountBook.style.display = 'none';
// accountBook.style.display = 'block';