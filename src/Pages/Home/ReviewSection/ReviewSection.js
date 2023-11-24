import React, { useState, useEffect,useRef } from 'react';
import Airtable from "airtable";
import theChangableBase from'../base.js';

import "./ReviewSection.css";
import Card from 'react-bootstrap/Card';

const paragraphStyle = {
	  WebkitLineClamp: 2,
	  WebkitBoxOrient: 'vertical',
	  overflow: 'hidden',
	  display: '-webkit-box',
};

	
function ReviewSection() {
  const [reviews,setReviews]=useState([]);      
  const[showMore,setShowMore]=useState(false);
  const[showAllReviews,setShowAllReviews]=useState(false);
  
  const [reviewStates, setReviewStates] = useState({});
  
 
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
  
   const toggleShowMore = (reviewId) => {
    setReviewStates((prevStates) => ({
      ...prevStates,
      [reviewId]: !prevStates[reviewId],
    }));
  };	
  const toggleItems = () => {
    setShowAllReviews((prevShowAll) => !prevShowAll);
  };
  return (
    
   <section id="reviews" className="reviewSection">
   <h2>Reviews</h2>
   <div  className="card--content">
    {reviews.slice(0, showAllReviews?reviews.length : 3).map((review) =>(
    <Card key={review.id} className="singleCard">
      <Card.Body >
        <Card.Title className="reviewerTitleBox"> 
        <img className="reviewProfileImg" src="./img/profile.png" alt="Profile"/>
        <div> {review.fields.Name}</div>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.fields.date}</Card.Subtitle>
         <Card.Text>
                {reviewStates[review.id]
                  ? review.fields.Comment
                  : `${review.fields.Comment.substring(0, 250)}...`}
                {review.fields.Comment.length > 250 && (
                  <button className="showMoreButton"onClick={() => toggleShowMore(review.id)}>
                    {reviewStates[review.id] ? 'Show less' : 'Show more'}
                  </button>
                )}
              </Card.Text>
       
         
          
      </Card.Body>
    </Card>
 ))}
     {reviews.length > 3 && (
          <button  onClick={toggleItems}>
            {showAllReviews ? 'Show Less Reviews' : 'Show More Reviews'}
          </button>
        )}
    </div>
   
    </section>
    
  );
};

export default ReviewSection;


  




