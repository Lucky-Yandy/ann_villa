import React, { useState, useEffect,useRef } from 'react';
import Airtable from "airtable";
import theChangableBase from'../base.js';
import ReviewSuccessPopup from './ReviewSuccessPopup.js';
import "./ReviewSection.css";
import Card from 'react-bootstrap/Card';
import { useTranslation} from 'react-i18next'; 


	
function ReviewSection() {

  const {i18n,t} = useTranslation(); 
  const [reviews,setReviews]=useState([]);      
  const[showMore,setShowMore]=useState(false);
  const[showAllReviews,setShowAllReviews]=useState(false);
  
  const [reviewStates, setReviewStates] = useState({});
  const[isShowCommentForm,setIsShowCommentForm]=useState(false);
  
  const [reviewername, setReviewername] = useState('');
  const [reviewercomment, setReviewercomment] = useState('');
 
  const[showCommentSuccessfully,setShowCommentSuccessfully]=useState(false);
  
  useEffect(() => {
    const fetchReviews = async () => {
      const allRecords = [];

      await theChangableBase('ReviewsForHostEdit')
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
  ////////////////////////////////////
   const toggleShowMore = (reviewId) => {
    setReviewStates((prevStates) => ({
      ...prevStates,
      [reviewId]: !prevStates[reviewId],
    }));
  };	
  const toggleItems = () => {
    setShowAllReviews((prevShowAll) => !prevShowAll);
  };
  
  
  const handleComment=()=>{
    setIsShowCommentForm(!isShowCommentForm);
  }
  //////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = {
      "fields": {
        "Name": reviewername,
        "Comment": reviewercomment,
        
      }
    };
    fetch(`https://api.airtable.com/v0/appPrmFJzdWiFnCpN/ReviewsGuestSubmit`, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Authorization': `Bearer patjcE0Oa54kfWtFE.820c3b5107a690a0160fa2730a0d1a7354c09bdecad6625f180f671b19e2c4e2`,
	  },
	  body: JSON.stringify(formData),
	})
	  .then(response => {
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    return response.json();
	  })
	  .then(data => {
	    console.log(data);
	   //alert('Form submitted successfully!');
	     setIsShowCommentForm(!isShowCommentForm);
	     if (reviewername && reviewercomment){
	       setShowCommentSuccessfully(true);
	     }
	     setReviewername('');
             setReviewercomment('');
      
	  })
	  .catch(error => {
	    //console.error('Error:', error);
	    alert(`Error submitting the form. Please try again. Error details: ${error.message}`);
	  });
	};
  
 
  return (
    
   <section id="Reviews" className="reviewSection text-lg">
   <h2>{t('Reviews')}</h2>
    {showCommentSuccessfully && (
    <ReviewSuccessPopup  onClose={() => setShowCommentSuccessfully(false)}/>
   )}
   <div  className="card--content">
    {reviews.slice(0, showAllReviews?reviews.length : 4).map((review) =>(
    <Card key={review.id} className="singleCard">
      <Card.Body >
        <Card.Title className="reviewerTitleBox"> 
        <img className="reviewProfileImg" src="./img/profile.png" alt="Profile"/>
        <div> {review.fields.Name}</div>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-lg">{review.fields.date}</Card.Subtitle>
         <Card.Text >
                {reviewStates[review.id]
                  ? review.fields.Comment
                  : `${review.fields.Comment.substring(0, 250)}...`}
                {review.fields.Comment.length > 250 && ( 
                 <>
                  <button  className="rewiewsmallButton" 
                           onClick={() => toggleShowMore(review.id)}>
                    {reviewStates[review.id] ? t('ShowLessButton') : t('ShowMoreButton')}
                  </button>
                   <img src="./img/next.png"style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} alt="Description of the image" />
    </>
                )}
              </Card.Text>
       
         
          
      </Card.Body>
    </Card>
 ))}
    
        
    </div>
    <div>
      {reviews.length > 4 && (
          <button   className="reviewButton"onClick={toggleItems}>
            {showAllReviews ? t('showlessreviews') : t('showmorereviews')}
          </button>
        )} 
      
     </div>
     <div>
     <button className="reviewButton" onClick={handleComment}>{t('leaveAcomment')}</button></div>
    {isShowCommentForm && (
   <div className="card--content"  >
     <form onSubmit={handleSubmit } className="newCommentContent"  style={{padding:"30px"}} >
        <div >
          <label htmlFor="first-name" className="reviewLabel">
            <span >{t('yourname')}</span>
            <input
              type="text"
              className="commentInput text-md"
              name="name"
              value={reviewername}
               onChange={(e) => setReviewername(e.target.value)}
              id="reviewername"
              placeholder={t('enteryourname')}
              required
            />
          </label>
          
        </div>
        <label htmlFor="message" className="reviewLabel">
          <span className="text-md">{t('yourcomment')}</span>
          <textarea
            className="commentInput text-md"
            id="comment"
            name="comment"
             value={reviewercomment}
            onChange={(e) => setReviewercomment(e.target.value)} 
            rows="8"
            placeholder={t('writeyourcomment')}
            required
          />
        </label>

        <div style={{marginTop:"20px"}}>
          <button className="reviewButton" type="submit">{t('leaveAcomment')}</button>
        </div>
      </form>     
  </div>
  )}

    </section>
    
  );
};

export default ReviewSection;


  




