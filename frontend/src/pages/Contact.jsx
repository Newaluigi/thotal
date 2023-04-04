// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Burger from "../components/Burger";

// function Contact() {
//   const addClass = () => {
//     document.body.classList.add("sent");
//   };
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post(
//         "https://api.sendgrid.com/v3/mail/send",
//         {
//           personalizations: [
//             {
//               to: [{ email: "alexperche20@gmail.com" }],
//               subject: "Contact",
//             },
//           ],
//           from: { email: "sender@example.com", name },
//           content: [{ type: "text/plain", value: message }],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then(() => {
//         setName("");
//         setEmail("");
//         setMessage("");
//         addClass();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="contactAll">
//       <Header />
//       <p id="titleHeadEshop">Contact</p>
//       <div className="contactBody">
//         <div className="wrapper centered">
//           <article className="letter" onSubmit={handleSubmit}>
//             <div className="side">
//               <h1 className="contacttittle">Contactez-moi</h1>
//               <p className="contactph">
//                 <textarea
//                   className="contactextarea"
//                   placeholder="Votre message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </p>
//             </div>
//             <div className="side">
//               <p className="contactph">
//                 <input
//                   className="contactinput"
//                   type="text"
//                   placeholder="Votre nom"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </p>
//               <p className="contactph">
//                 <input
//                   className="contactinput"
//                   type="email"
//                   placeholder="Votre email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </p>
//               <p className="contactph">
//                 <button id="sendLetter" onClick={addClass} type="submit">
//                   Envoyer
//                 </button>
//               </p>
//             </div>
//           </article>
//           <div className="envelope front" />
//           <div className="envelope back" />
//         </div>
//         <p className="result-message centered">Merci pour votre message</p>
//         <Burger />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;
