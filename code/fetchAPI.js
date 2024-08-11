// fetchAPI Example -

const fetchUserInfo = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users?page=2');
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // parse JSON
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

// Call the function
fetchUserInfo();