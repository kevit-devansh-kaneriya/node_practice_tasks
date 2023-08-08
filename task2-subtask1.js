const axios = require('axios');
let username = "Bret";
let users = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jsonplaceholder.typicode.com/users?username=${username}`,
    headers: {}
};
// const userids =[];
var tempData = {
    username: "",
    name: "",
    email: "",
    city: "",
    posts: []
};
axios.request(users)
    .then((response) => {

        response.data.forEach(element => {
            tempData.username = element.username;
            tempData.name = element.name;
            tempData.email = element.email;
            tempData.city = element.address.city;
            // tempData.posts.push(element.address.city);
            let userid = element.id;

            // fetchPosts(userid);

            let posts = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://jsonplaceholder.typicode.com/posts?userId=${userid}`,
                headers: {}
            };

            axios.request(posts)
                .then((response) => {
                    // console.log(response.data);
                    response.data.forEach(element => {
                        tempData.posts.title = element.title;
                        console.log(tempData)
                    })
                })
                .catch((error) => {
                    console.log(error);
                });


        });
        // userIds.forEach(userId => fetchPosts(userId));

    })
    .catch((error) => {
        console.log(error);
    });



// async function fetchPosts(userId) {
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         response.data.forEach(element => {
//             tempData.posts.title = element.title;
//             let postid = element.id;
//         })
//         console.log(tempData)
//     } catch (error) {
//         console.error(`Error fetching posts for User ID ${userId}:`, error.message);
//     }
// }



