const loadPhone = async (searchPhone) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await response.json();
    const phone = data.data;
    // console.log(phone);
    displayPhone(phone);
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = '';

    const showAllButton = document.getElementById('Show-all-container')
    if(phones.length > 9){
        showAllButton.classList.remove('hidden');
    }
    else{
        showAllButton.classList.add('hidden');
    }


    phones = phones.slice(0, 9);
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = `card bg-gray-100 shadow-xl`
        phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    })
}

const handleSearch = () => {
    const searchField = document.getElementById('search-Field');
    const searchText = searchField.value;
    loadPhone(searchText);
}

// loadPhone();