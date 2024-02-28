const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    console.log(phones.length);

    //display show all button if there are more than 12 phones 
    const showAllContainer = document.getElementById('show-all-container');

    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');

    } else {
        showAllContainer.classList.add('hidden');
    }
    console.log('isShowAll', isShowAll);

    // display 1st 12 phones if not show all
    if(!isShowAll){
        phones = phones.slice(0, 12);
    }

    //1.get parent div
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone);

        //2.creat a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-5 bg-gray-100 shadow-xl`;
        //3.set inner html

        phoneCard.innerHTML = `
    <figure>
    <img src="${phone.image}" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone.
                phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
    
    `
        //4.append child
        phoneContainer.appendChild(phoneCard);

    });

    // hide loading spinner
    toggleLoadingSpinner(false);



}

//handle search button
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}


const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText, isShowAll);

}


// loading spinner function
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('load-spinner');
    // loadingSpinner.classList.remove('hidden');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');
    }
}

//handle show all button
const handleShowAll = () => {
    handleSearch(true);
}

// loadPhone();