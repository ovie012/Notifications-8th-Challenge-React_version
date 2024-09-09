import { useState } from 'react'
import './App.css'

function App() {
  // const [notificationCount, setNotificationCount] = useState(7)
  // const [read1, setRead1] = useState(false)
  // const [read2, setRead2] = useState(false)
  // const [read3, setRead3] = useState(false)
  // const [read4, setRead4] = useState(false)
  // const [read5, setRead5] = useState(false)
  // const [read6, setRead6] = useState(false)
  // const [read7, setRead7] = useState(false)
  // const [messageRead, setMessageRead] = useState(false);

  // const removeNotification1 = () => {
  //   if(read1) return;
  //   setRead1(true)
  //   setNotificationCount(notificationCount - 1)
  // };
  
  // const removeNotification2 = () => {
  //   if(read2) return;
  //   setRead2(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotification3 = () => {
  //   if(read3) return;
  //   setRead3(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotification4 = () => {
  //   setMessageRead(!messageRead)
  //   if(read4) return;
  //   setRead4(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotification5 = () => {
  //   if(read5) return;
  //   setRead5(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotification6 = () => {
  //   if(read6) return;
  //   setRead6(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotification7 = () => {
  //   if(read7) return;
  //   setRead7(true)
  //   setNotificationCount(notificationCount - 1)
  // };

  // const removeNotificationAll = () => {
  //   setRead1(true)
  //   setRead2(true)
  //   setRead3(true)
  //   setRead4(true)
  //   setRead5(true)
  //   setRead6(true)
  //   setRead7(true)
  //   setNotificationCount(0)
  // };

  //simplified version below

  const [notificationCount, setNotificationCount] = useState(7);
  const [readStatus, setReadStatus] = useState(Array(7).fill(false));
  const [messageRead, setMessageRead] = useState(false);

  const removeNotification = (index) => {
    if (readStatus[index]) return

    const updateReadStatus = [...readStatus]
    updateReadStatus[index] = true;

    setReadStatus(updateReadStatus);
    setNotificationCount(notificationCount - 1);
  };

  const removeNotificationAll = () => {
    setReadStatus(Array(7).fill(true))
    setNotificationCount(0)
  };

  const toggleMessageRead = () => {
    setMessageRead(!messageRead)
  };

  

  return (
    <>
      <main>
        <div className="container">
          <header className="header">
              <div>
                  <h1>Notifications</h1>
                  <span className="notification-count">{notificationCount}</span>
              </div>
              <p onClick={removeNotificationAll} className="mark-all">Mark all as read</p>
          </header>
          <div className="notifications">
              <section onClick={() => removeNotification(0)} className={`notification ${!readStatus[0] ? 'active' : ''}`}>
                  <img src="/avatar-mark-webber.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Mark Webber</span>&nbsp; &nbsp;reacted to your post&nbsp; &nbsp;<span>My first tournament today!</span>&nbsp; &nbsp;<span className="span"></span></p>
                      <h4>1m ago</h4>
                  </div>
              </section>
              <section onClick={() => removeNotification(1)} className={`notification ${!readStatus[1] ? 'active' : ''}`}>
                  <img src="/avatar-angela-gray.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Angela Gray</span>&nbsp; &nbsp;followed you&nbsp; &nbsp;<span className="span"></span></p>
                      <h4>5m ago</h4>
                  </div>
              </section>
              <section onClick={() => removeNotification(2)} className={`notification ${!readStatus[2] ? 'active' : ''}`}>
                  <img src="/avatar-jacob-thompson.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Jacob Thompson</span>&nbsp; &nbsp;has joined your group&nbsp; &nbsp;<span>Chess Club</span>&nbsp; &nbsp;<span className="span"></span></p>
                      <h4>1 day ago</h4>
                  </div>
              </section>
              <section onClick={() => { removeNotification(3); toggleMessageRead(); }} className={`notification message-notification ${!readStatus[3] ? 'active' : ''}`}>
                  <img src="/avatar-rizky-hasanuddin.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Rizky Hasanuddin</span>&nbsp; &nbsp;sent you a private message&nbsp; &nbsp;<span className="span"></span></p>
                      <h4>5 days ago</h4>
                  </div>
              </section>
              <div className={`open ${!messageRead ? 'active' : ''}`}>
                  <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                      I'm already having lots of fun and improving my game.</p>
              </div>
              <section onClick={() => removeNotification(4)} className={`notification ${!readStatus[4] ? 'active' : ''}`}>
                  <img src="/avatar-kimberly-smith.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Kimberly Smith</span>&nbsp; &nbsp;commented <br className="br" />on your picture&nbsp; &nbsp;<span className="span"></span></p>
                      <img src="/image-chess.webp" alt="my pic" />
                      <h4>1 week ago</h4>
                  </div>
              </section>
              <section onClick={() => removeNotification(5)} className={`notification ${!readStatus[5] ? 'active' : ''}`}>
                  <img src="/avatar-nathan-peterson.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Nathan Peterson</span>&nbsp; &nbsp;reacted to your recent post&nbsp; &nbsp;<span>5 end-game strategies to increase your win rate</span>&nbsp;<span className="span"></span></p>
                      <h4>2 weeks ago</h4>
                  </div>
              </section>
              <section onClick={() => removeNotification(6)} className={`notification ${!readStatus[6] ? 'active' : ''}`}>
                  <img src="/avatar-anna-kim.webp" alt="profile pic" />
                  <div className="notification-text">
                      <p><span>Anna Kim</span>&nbsp; &nbsp;left the group&nbsp; &nbsp;<span>Chess Club</span>&nbsp; &nbsp;<span className="span"></span></p>
                      <h4>2 weeks ago</h4>
                  </div>
              </section>
          </div>
        </div>
      </main>
    </>
  )
};

export default App

//LEGEND.DEV coded this










//Below is a senior dev way of writing the above

// import { useState, useCallback } from 'react';
// import './App.css';

// function App() {
//   const [notificationCount, setNotificationCount] = useState(7);
//   const [readStatus, setReadStatus] = useState(Array(7).fill(false));
//   const [messageRead, setMessageRead] = useState(false);

//   const removeNotification = useCallback((index) => {
//     if (readStatus[index]) return;

//     const updatedReadStatus = [...readStatus];
//     updatedReadStatus[index] = true;
//     setReadStatus(updatedReadStatus);
//     setNotificationCount((prev) => prev - 1);
//   }, [readStatus]);

//   const removeNotificationAll = useCallback(() => {
//     setReadStatus(Array(7).fill(true));
//     setNotificationCount(0);
//   }, []);

//   const toggleMessageRead = useCallback(() => {
//     setMessageRead((prev) => !prev);
//   }, []);

//   return (
//     <main>
//       <div className="container">
//         <header className="header">
//           <div>
//             <h1>Notifications</h1>
//             <span className="notification-count">{notificationCount}</span>
//           </div>
//           <p onClick={removeNotificationAll} className="mark-all">Mark all as read</p>
//         </header>
//         <div className="notifications">
//           {[
//             { img: "/avatar-mark-webber.webp", text: "Mark Webber reacted to your post", post: "My first tournament today!", time: "1m ago" },
//             { img: "/avatar-angela-gray.webp", text: "Angela Gray followed you", time: "5m ago" },
//             { img: "/avatar-jacob-thompson.webp", text: "Jacob Thompson has joined your group", group: "Chess Club", time: "1 day ago" },
//             { img: "/avatar-rizky-hasanuddin.webp", text: "Rizky Hasanuddin sent you a private message", time: "5 days ago" },
//             { img: "/avatar-kimberly-smith.webp", text: "Kimberly Smith commented on your picture", time: "1 week ago", imgComment: "/image-chess.webp" },
//             { img: "/avatar-nathan-peterson.webp", text: "Nathan Peterson reacted to your recent post", post: "5 end-game strategies to increase your win rate", time: "2 weeks ago" },
//             { img: "/avatar-anna-kim.webp", text: "Anna Kim left the group", group: "Chess Club", time: "2 weeks ago" }
//           ].map(({ img, text, post, group, time, imgComment }, index) => (
//             <section
//               key={index}
//               onClick={() => {
//                 removeNotification(index);
//                 if (index === 3) toggleMessageRead();
//               }}
//               className={`notification ${!readStatus[index] ? 'active' : ''}`}
//             >
//               <img src={img} alt="profile pic" />
//               <div className="notification-text">
//                 <p>
//                   <span>{text}</span>
//                   {post && <span>&nbsp;{post}</span>}
//                   {group && <span>&nbsp;{group}</span>}
//                 </p>
//                 <h4>{time}</h4>
//                 {imgComment && <img src={imgComment} alt="commented pic" />}
//               </div>
//             </section>
//           ))}
//           <div className={`open ${!messageRead ? 'active' : ''}`}>
//             <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
