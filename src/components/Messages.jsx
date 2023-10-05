import { useState } from "react";
import { APIURL } from "../API/api";

export default function Messages({ post, token }) {
  const [messageText, setMessageText] = useState("");

  const postMessage = async () => {
    try {
      const response = await fetch(`${APIURL}/posts/${post._id}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: messageText,
          },
        }),
      });
      const result = await response.json();

      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (messageText.length === 0) {
      alert("Message text is empty. Please enter text.");
      return;
    }
    const result = await postMessage();

    console.log("Message Send:", result);
  }
  return (
    <div>
      <h3>{token ? "Message" : "Login to see messages"}</h3>
      <div>
        {token && (
          <div>
            <h4>Send Message</h4>
            <form onSubmit={handleSubmit}>
              <label>
                message to Send
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>

      <div>
        {post.messages &&
          post.messages.map((message) => {
            <div>{message.content}</div>;
          })}
      </div>
    </div>
  );
}
