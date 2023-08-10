const axios = require('axios');
const emptyStructure = {
    username: "",
    name: "",
    email: "",
};
const user = { ...emptyStructure };

let name = "consectetur totam fugit et occaecati minima aliquid hic adipisci";
let email = "Ashleigh@annette.ca";

let comments = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://jsonplaceholder.typicode.com/comments?name=${name}&email=${email}`,
    headers: {}
};
axios.request(comments)
    .then((response) => {

        response.data.forEach(element => {
            let post_id = element.postId;

            let posts = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://jsonplaceholder.typicode.com/posts?id=${post_id}`,
                headers: {}
            };
            axios.request(posts)
                .then((response) => {
                    response.data.forEach(element => {
                        let user_id = element.userId;


                        let users = {
                            method: 'get',
                            maxBodyLength: Infinity,
                            url: `https://jsonplaceholder.typicode.com/users?id=${user_id}`,
                            headers: {}
                        };
                        axios.request(users)
                            .then((response) => {
                                response.data.forEach(element => {
                                    user.name = element.name;
                                    user.email = element.email;
                                    user.username = element.username;
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
