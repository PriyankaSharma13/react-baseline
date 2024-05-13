import React from 'react';

function Frontend() {
  const frontendTechnologies = [
    {
      name: "HTML",
      description: "HTML stands for HyperText Markup Language. It is used to design the front end portion of web pages using markup language. It acts as a skeleton for a website since it is used to make the structure of a website."
    },
    {
      name: "CSS",
      description: "Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. It is used to style our website."
    },
    {
      name: "JavaScript",
      description: "JavaScript is a scripting language used to provide dynamic behavior to our website."
    },
    {
      name: "Bootstrap",
      description: "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular CSS framework for developing responsive, mobile-first websites. Nowadays, websites are perfect for all browsers (IE, Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones)."
    },
    {
      name: "Bootstrap 4",
      description: ""
    },
    {
      name: "Bootstrap 5",
      description: ""
    }
  ];

  return (
    <div style={{ display: 'flex' , marginTop:"20px"}}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 500, color: '#f1d625', textAlign: 'center' }}>Frontend Development</h1>
        <p style={{ fontSize: '20px', fontFamily: 'sans-serif', color: 'white', textAlign: 'center' }}>
          The part of a website where the user interacts directly is termed as front end. It is also referred to as the ‘client side’ of the application.
        </p>

       
      </div>
      <div style={{ flex: 1, backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px', fontFamily: '-moz-initial', color: '#f1d625', fontWeight: 600, textDecoration: 'underline' }}>
          Popular Frontend Technologies
        </h2>
        {frontendTechnologies.map((technology, index) => (
          <p key={index} style={{ fontFamily: 'sans-serif', color: 'white' }}>
            {technology.description ? (
              <strong style={{ color: 'black', textDecoration: 'underline' }}>{technology.name}:</strong>
            ) : (
              <strong style={{ color: 'black', fontWeight: 600 }}>{technology.name}</strong>
            )} {technology.description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Frontend;
