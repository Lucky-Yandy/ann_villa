
.bookingSection{
  display: flex;
  flex-direction:column;
  padding: 33.333px 85.333px;
  padding-bottom:0px;
  height:100%;
  gap:10px;
}
.bookingContent{
 display: flex;
 flex-direction:row;
gap:10px;
}


.leftPart{ 
  border:1px solid lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
  max-height:759px;
  overflow-y: scroll;
  border-radius: 10px;
 
}

.rdrMonthsVertical {
  flex-direction: row !important;
  gap:10px;
  flex-wrap:wrap;
  }
  
 .rdrMonthsVertical {
  flex-direction: column;
  justify-content: center!important ;
}
.rightPart{
  border:1px solid lightgray;
  display:flex;
  flex-direction:column;
  padding: 20px 20px;
  border-radius: 10px;
  align-items:center;

}


.rightPart--title{
  margin-bottom:20px;
  font-weight:600;
  text-align:center;
  
}



.rightPart--dateChooseBox{
 display:flex;
 margin-bottom:20px;
 border-radius: 10px;
 justify-content:space-between;
 
}

.highlighted-range {
   background-color: #FF5A5F !important;
  
}
.custom-date-picker{
  border: none !important;
}



.rightPart--checkInBox,
.rightPart--checkOutBox
{
 display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  justify-content: space-between; 
  align-items: flex-start; 
  
}


/*.rightPart--formSection{
 display:flex;
 flex-direction:column;
 justify-content:center;
 margin-bottom:20px;
 gap:5px;
 color:DarkSlateGrey ;


}*/
.form-style{
  display:flex;
 flex-direction:column;
 justify-content:center;
 margin-bottom:20px;

 gap:5px;
 color:DarkSlateGrey ;


}

.inbox {
  border: none;
  background-color:Snow ;
  
 
}
.bookingbutton{
border-radius: 10px;
margin-top:30px;
background-color:#FF5A5F;
width:100%;
height:40px;
}

/* Section styling */
.forSummary p{  text-align:Center;
  align-items: center;
  margin-top:5px;
  margin-bottom:5px;
  }

.summary--section{
  display:flex;
  justify-content:space-between;
  text-align:Center;
  align-items: center;
  margin-top:10px;
  font-family: 'Arial', sans-serif;
  color:DarkSlateGrey ;
 
}
.price-section {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  
}


.totalPrice {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  border-top: 2px solid #ddd;
}



@media only screen and (max-width: 1200px) {
.bookingContent{
 display: flex;
 flex-direction:column;
 gap:0px;
}

.leftPart{
  
  max-height:500px;
  overflow: scroll;
  margin-bottom:10px;
 
}
  .rightPart--dateChooseBox {
    flex-direction: column; 
  }

  .rightPart--checkInBox,
  .rightPart--checkOutBox { 
    margin-bottom: 10px; 
  }
  .bookingSection {
    padding-left: 85px ;
    padding-right: 85px ; 
    padding-top:35px;
  }

  

 

  .rightPart--dateChooseBox {
    flex-direction: column; 
  }

  

  .rightPart--formSection,
  .form-style {
    width: 100%; 
  }

  .rightPart--formSection button {
    width: 100%; 
  }

  .forSummary {
    width: 100%; 
  }

 .rightPart--checkInBox{
  
  flex-direction: row;
  
}
.rightPart--checkOutBox {
 
  flex-direction: row;
}
.bookingbutton{
border-radius: 10px;
margin-top:30px;
background-color:#FF5A5F;
width:100%;
height:30px;
}
}
/************************************************/
@media only screen and (max-width: 1024px) {
.bookingSection {
 
    padding-left: 15px ;
    padding-right: 15px ; 
    
  }
  .form-style{
 
 margin-bottom:10px;
 gap:5px;
 color:DarkSlateGrey ;
}

.bookingbutton{
border-radius: 10px;
margin-top:30px;
background-color:#FF5A5F;
width:100%;
margin-bottom:20px;
}
 } 
 
 @media only screen and (max-width: 460px){
 .leftPart{
 
  max-height:300px;
  overflow: scroll;
 
}
 
 .rightPart--title{
  margin-top:20px;
  text-align:center;


}
 
 .rightPart--checkInBox{
  flex-direction: row; 
  
}
.rightPart--checkOutBox {
  flex-direction: row;
 
}
 }
 
 
 
@media only screen and (max-width: 400px) {
 .rightPart{
  padding: 0px 0px;

}

.rightPart--dateChooseBox{
 padding:5px;
}
.form-style {
 margin-bottom:5px;
 gap:5px;
}
.rightPart--formPadding{
 padding:10px;
}
.summary--section{
   padding-top:0px;
   padding-left:20px;
   padding-right:20px;
   padding-bottom:0px;
}


.totalPrice {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  border-top: 2px solid #ddd;
}

.bookingbutton{
 border-radius: 10px;
margin-top:5px;

background-color:#FF5A5F;




}

}







