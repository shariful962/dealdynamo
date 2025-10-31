// import React, { useState } from 'react';

// const TermsConditions = () => {
//   const [content, setContent] = useState(`
//     Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas dui id nisl sed ante congue scelerisque. 
//     Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl 
//     consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar.
//     Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris.
//     Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed...
//   `);

//   const handleEdit = () => {
//     const newContent = prompt('Edit your Terms & Conditions:', content);
//     if (newContent !== null) {
//       setContent(newContent);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-semibold text-center mb-4">Terms & Conditions</h1>
//       <p className="text-base text-gray-700 leading-relaxed mb-4">{content}</p>
//       <button
//         onClick={handleEdit}
//         className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
//       >
//         Edit
//       </button>
//     </div>
//   );
// };

// export default TermsConditions;

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TermsConditions = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(`
    Lorem ipsum dolor sit amet consectetur. Augue nisl sed nulla habitant nisl vel diam eleifend porta. Nec sagittis convallis commodo nisi convallis eu. Nec nibh aliquam euismod nunc bibendum non posuere. Ipsum donec enim quis magna proin pulvinar. Tellus egestas vulputate sit scelerisque. Volutpat maecenas in purus quisque arcu consequat augue. Quis maecenas euismod quis nec iaculis pellentesque. Amet id praesent ut vulputate curabitur. Posuere tellus at nisl sit velit ut pulvinar sed. Eiusmod eu nec tincidunt tincidunt ut lacinia nunc dui. Duis vulputate tellus a cras.
  `);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you could send the updated content to an API or save it
    console.log('Updated content:', content);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Terms & Conditions</h1>
      
      {isEditing ? (
        <div>
          <ReactQuill value={content} onChange={setContent} />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 mt-4"
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          <p className="text-base text-gray-700 leading-relaxed mb-4">{content}</p>
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default TermsConditions;
