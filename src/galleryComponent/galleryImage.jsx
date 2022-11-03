import React from 'react'



const GalleryCenter = (image, comments) => {
    console.log(image.comments)
    return(
        <div>
            <img src={image.image} alt="dog1.png" height="500" />
            {/* <p>{image.comments[0]}</p> */}
            {/* {
                <>
                image.comments ? ( return
                
                    image.comments.map((comment) => { <p>{comment}</p> })
                    
                ) : (<p>No comments</p>)
           </> } */}
        </div>
    )
}

export default GalleryCenter