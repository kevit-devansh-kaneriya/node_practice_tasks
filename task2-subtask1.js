const axios = require('axios');
const emptyStructure = {
    userid: "",
    username: "",
    name: "",
    email: "",
    city: "",
    posts: [
        {
            postid: "",
            title: "",
            comments: [

            ]
        }
    ]
};
const user = { ...emptyStructure };
const postids = [];

let username = "Moriah.Stanton";

let users = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jsonplaceholder.typicode.com/users?username=${username}`,
    headers: {}
};
axios.request(users)
    .then((response) => {

        response.data.forEach(element => {
            user.userid = element.id;
            user.username = element.username;
            user.name = element.name;
            user.email = element.email;
            user.city = element.address.city;
            let userid = element.id;

            let posts = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://jsonplaceholder.typicode.com/posts?userId=${userid}`,
                headers: {}
            };
            axios.request(posts)
                .then((response) => {
                    response.data.forEach(element => {
                        user.posts[0].postid = element.id;
                        user.posts[0].title = element.title;

                        let comments = {
                            method: 'get',
                            maxBodyLength: Infinity,
                            url: `https://jsonplaceholder.typicode.com/comments?postId=${element.id}`,
                            headers: {}
                        };
                        axios.request(comments)
                            .then((response) => {
                                response.data.forEach(element => {
                                    user.posts[0].comments.push({
                                        name: element.name,
                                        body: element.body
                                    });
                                });
                                console.log(JSON.stringify(user, null, 2))
            
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });

                })
                .catch((error) => {
                    console.log(error);
                });
        });
    })
    .catch((error) => {
        console.log(error);
    });



// async function fetchComments(commentpostid) {
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentpostid}`);
//         response.data.forEach(element => {
//             user.posts[0].comments.push({
//                 name: element.name,
//                 body: element.body
//             });
//             console.log(JSON.stringify(user, null, 2))

//         })
//     } catch (error) {
//         console.error(`Error fetching posts for User ID ${userId}:`, error.message);
//     }
// }


