import React, { useState, useEffect } from 'react';
import Airtable from "airtable";
import theChangableBase from'../base.js';

import "./ReviewSection.css";
import Card from 'react-bootstrap/Card';

function ReviewSection() {
  const [reviews,setReviews]=useState([]);
  
  useEffect(() => {
    const fetchReviews = async () => {
      const allRecords = [];

      await theChangableBase('Reviews')
        .select({ view: "All features" })
        .eachPage((records, fetchNextPage) => {
          allRecords.push(...records);
          fetchNextPage();
        }, async (err) => {
          if (err) {
            console.error('Error fetching records:', err);
          } else {
            setReviews(allRecords);
          }
        });
    };

    fetchReviews();
  }, []); 
              
	  
	 
  return (
    
   <section id="reviews" className="reviewSection">
   <h2>Reviews</h2>
   <div  className="card--content">
    {reviews.map((review) =>(
    <Card key={review.id} className="singleCard">
      <Card.Body >
        <Card.Title className="reviewerTitleBox"> 
        <img className="reviewProfileImg" src="./img/profile.png" alt="Profile"/>
        <div> {review.fields.Name}</div>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.fields.date}</Card.Subtitle>
        <Card.Text>
         {review.fields.Comment}
        </Card.Text>
        
      </Card.Body>
    </Card>
 ))}
    
    </div>
    </section>
    
  );
};

export default ReviewSection;


  




