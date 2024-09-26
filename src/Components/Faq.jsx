import React, { useState } from "react";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(index);
    };


  //  const toggleButton = (index)=>{
  //   setOpenIndex(openIndex ===index ? null : index)
  //  }



    const FAQItem = ({ question, answer, isOpen, toggle }) => (
     
        <div className="border-b-2 border-gray-200">
          <button onClick={toggle} className="w-full text-left p-4 focus:outline-none hover:bg-gray-900 ">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-white">{question}</h3>
          </button>
          {isOpen && <p className="px-4 pb-4 text-gray-700">{answer}</p>}
        </div>
      );
      console.log('abss',openIndex)
    const faqData = [
        {
          question: 'What is the best time to travel?',
          answer: 'The best time to travel depends on your destination. Generally, spring and fall offer pleasant weather and fewer crowds.',
        },
        {
          question: 'How do I find cheap flights?',
          answer: 'You can find cheap flights by booking in advance, being flexible with your travel dates, and using flight comparison websites.',
        },
        {
          question: 'What should I pack for a trip?',
          answer: 'Pack essentials like clothing, toiletries, and important documents. Research your destination for specific items you might need.',
        },
        {
          question: 'Do I need travel insurance?',
          answer: 'Travel insurance is recommended as it can cover unexpected events such as trip cancellations, medical emergencies, and lost luggage.',
        },
        {
          question: 'How can I stay safe while traveling?',
          answer: 'Stay safe by being aware of your surroundings, keeping your valuables secure, and researching the safety of your destination beforehand.',
        },
      ];
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (

  
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
    </>
  );
}

export default Faq;
