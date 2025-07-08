// import { useState } from "react";
// import { useChatAssistantMutation } from "../../redux/api/chat";
// import DOMPurify from "dompurify";
// const cleanHtml = DOMPurify.sanitize(responseHtml)
//   .replace(/^```html\s*/i, "")   
//   .replace(/```$/i, "")         
//   .trim();


// export default function EnergyChatbot() {
//   const [question, setQuestion] = useState("");
//   const [chatAnswer, setChatAnswer] = useState("");
//   const [sendPrompt, { isLoading }] = useChatAssistantMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!question.trim()) return;

//     try {
//       const res = await sendPrompt({ question }).unwrap();
//       setChatAnswer(res?.data || "");
//     } catch (err) {
//       setChatAnswer(`<p style="color: red;">Failed to get a response. Try again later.</p>`);
//     }
//   };

//   return (
//     <div className="bg-white shadow p-6 rounded-xl max-w-3xl mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Ask Your Energy Assistant</h2>

//       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="e.g. Which device used the most energy?"
//           className="flex-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//         />
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="bg-primary text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
//         >
//           {isLoading ? "Thinking..." : "Ask"}
//         </button>
//       </form>

//       <div
//         className="prose prose-sm max-w-none"
//         dangerouslySetInnerHTML={{ __html: cleanHtml }}
//       />
//     </div>
//   );
// }
import { useState } from "react";
import { useChatAssistantMutation } from "../../redux/api/chat";
import DOMPurify from "dompurify";

export default function EnergyChatbot() {
  const [question, setQuestion] = useState("");
  const [chatAnswer, setChatAnswer] = useState("");
  const [sendPrompt, { isLoading }] = useChatAssistantMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    try {
      const res = await sendPrompt({ question }).unwrap();
      setChatAnswer(res?.data || "");
    } catch (err) {
      setChatAnswer(`<p style="color: red;">Failed to get a response. Try again later.</p>`);
    }
  };

  // 👇 Clean the chatAnswer each render
  const cleanHtml = DOMPurify.sanitize(chatAnswer)
    .replace(/^```html\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  return (
    <div className="bg-white shadow p-6 rounded-xl max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Ask Your Energy Assistant</h2>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Which device used the most energy?"
          className="flex-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
        >
          {isLoading ? "Thinking..." : "Ask"}
        </button>
      </form>

      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </div>
  );
}
