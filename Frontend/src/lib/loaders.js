import toast from "react-hot-toast";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
  try {
    const response = await fetch(`http://localhost:5000/api/posts/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',

    }).then(response => response.json());

    if(response.status === 200){
      return response;
    }else{
      toast.error("No post found");
      return [];
    }

    

  } catch (error) {
    console.error("Error fetching post:", error);
    toast.error("Error fetching post: " + error);
  }
};


export const listPageLoader = async ({ request }) => {
  // const query = request.url.split("?")[1];


  const postPromise = await fetch(`http://localhost:5000/api/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(response => response.json());
  if(postPromise.status === 400){
    toast.error("No posts found");
    return [];
  }else{

    return postPromise;
  }

};


export const chatUserLoader = ()=>{
  return fetch(`http://localhost:5000/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(response => response.json());
}


// export const profilePageLoader = async () => {
//   const postPromise = apiRequest("/users/profilePosts");
//   const chatPromise = apiRequest("/chats");
//   return defer({
//     postResponse: postPromise,
//     chatResponse: chatPromise,
  // });
// };