import React, { useContext, useState } from "react";
import Img from "../../img/img.png";
import Attach from "../../img/attach.png";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, store } from "../../firebase/config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [texts, setTexts] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  let now = +new Date();

  const updateUChat = async (text) => {
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setTexts("");
    setImg(null);
  };

  const handleSend = async (event) => {
    event.preventDefault();
    const text = texts;
    setTexts("");
    if (img) {
      const storageRef = ref(store, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: now.toLocaleString(),
                img: downloadURL,
              }),
            });
          });
        }
      );
      updateUChat(texts);
    } else if (text.trim().length > 0) {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: now,
        }),
      });
      updateUChat(text);
    }
  };
  return (
      <form className="input h-12 bg-white flex items-center content-between" onSubmit={handleSend}>
        <input
          className="w-full outline-none border-none text-emerald-600 text-lg placeholder-gray-400"
          type="text"
          placeholder="Type something..."
          onChange={(e) => setTexts(e.target.value)}
          value={texts}
        />
        <div className="send flex items-center gap-2.5">
          {/* <img className="h-6 cursor-pointer" src={Attach} alt="" />
          <input
            className="hidden"
            type="file"
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img className="h-6 w-16 cursor-pointer" src={Img} alt="" />
          </label> */}
          <button
            className="border-none py-2.5 px-3.5 text-white bg-violet-300 cursor-pointer"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </form>
  );
};

export default Input;
