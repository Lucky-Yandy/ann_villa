import React from 'react';
import data from "../../../data/index.json";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    
   <section id="info" className="info--section">
     <div>
     <h2>Intro</h2>
     <p>A wonderful fully equipped beachfront villa in Lazio, the home of Rome, 
        where you’ll can get your best vacation memories.
     This huge villa features a terrace and a garden with a seasonal outdoor pool.</p>
     <p>The kitchen is equipped with a dishwasher, an oven and a microwave, as well as a coffee machine and a kettle. A flat-screen TV is provided. There is a private bathroom with a bathtub, so all guests can enjoy the stay. The villa features a modern design with a lot of free space for your perfect vacation. The property is 10 miles from the city center and shops. The villa is perfect for long-term stay of both families and a group of friends.
      </p> 
    </div>
   
    <div>
     <h2>Details</h2>
     <ul className="details-table">
     {data?.details?.map((item, index)=>(       
	     <li key={index}>
		<span className="attribute">{item.title} </span> 
		<span className="attributeValue"> {item.value}</span>
	     </li>)
      )}
     </ul>
    </div>
  
   
    
    </section>
    
  );
};

export default InfoSection;


  




