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

    });

    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response}`);
      console.log("Error fetching post:", response);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching post:", error);
    toast.error("Error fetching post: " + error);
  }
};


export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];


  const postPromise = fetch(`http://localhost:5000/api/posts/?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(response => {
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
      toast.error("Error fetching posts: " + response.status);
    }
    return response.json();
  });

  return defer({
    postResponse: postPromise,
  });
};


// export const profilePageLoader = async () => {
//   const postPromise = apiRequest("/users/profilePosts");
//   const chatPromise = apiRequest("/chats");
//   return defer({
//     postResponse: postPromise,
//     chatResponse: chatPromise,
  // });
// };