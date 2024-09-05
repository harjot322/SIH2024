import { useEffect, useState } from "react";
import "./chat.scss";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addMessage, setConversations, setSelectedConversation } from "../../Context/Slices/ConversationSlice";

function Chat() {

	const res = useLoaderData();
	const [loading , setLoading] = useState(false);
	const [chat, setChat] = useState([]);
	const id = useSelector(state => state.users.user._id);
	const messages = useSelector(state => state.conversation.messages);
	const reciId = useSelector(state => state.conversation.selectedConversation);

	const dispatch = useDispatch();

	const [isActivePolicy, setIsActivePolicy] = useState(false);

	const handleOptionChat = async (reciverId) => {

		const resp = await fetch(`http://localhost:5000/api/messages/${reciverId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		}).then(response => response.json());

		console.log(resp);

		if (resp.status === 200) {

			dispatch(setConversations(resp.data.messages));
			dispatch(setSelectedConversation(reciverId));
			console.log(resp.data.messages);

			setChat({ ...resp.data.messages });

		}



	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const text = form.get("text");
		if(!text) return;

		try {
			
			setLoading(true);
			console.log(reciId);
			const response = await fetch(`http://localhost:5000/api/messages/send/${reciId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({ message : text })
			}).then(response => response.json());

			if (response.status === 200) {
				console.log(response.data);
				e.target.reset();

				
				dispatch(addMessage(response.data));
				
			}
			
		} catch (error) {
			console.log(error);
			
		}finally{
			setLoading(false);
		}
	}



	return (
		<div className="chat">
			<div className="messages">
				{
					res.data.map((user) => (
						<div key={user._id} onClick={() => handleOptionChat(user._id)}>
							{/* <h1></h1> */}
							<div className="message">
								<img
									src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
								/>
								<span>{user.name}</span>
								{/* <p>Lorem ipsum dolor sit amet...</p> */}
							</div>

						</div>
					))
				}
			</div>
			{reciId &&  (
				<div className="chatBox">
					<div className="top">
						<div className="user">
							<img
								src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
							/>
							demo
						</div>
						<span className="close" onClick={() => dispatch(setSelectedConversation(null))}>X</span>
					</div>
					<div className="center">
						{!loading && messages.map((item) => (
							<div className={`charMessage ${item._id == id ? "own" : ""}`} key={item._id}>
								<p>{item.message}</p>
								<span>1 hour ago</span>
							</div>
						))}
						{isActivePolicy && <Link to="/pdf" className="policy">See Policy</Link>}
					</div>
					<form className="bottom" onSubmit={handleSubmit}>
						<textarea name="text"></textarea>
						<button>Send</button>
						<button onClick={()=>setIsActivePolicy(!isActivePolicy)}>Send Policy</button>
					</form>

				</div>
			)}
		</div>
	);
}

export default Chat;