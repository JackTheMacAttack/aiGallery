import React, {useState} from 'react'
import GalleryCenter from './galleryImage'
import './galleryStyles.css'

const galleryImages = [
    {
        name: 'Cat photo 1', 
        image: 'galleryImages/aiCatPhoto3.jpg',
        comments: [
            'This cat is soooooo cuuuute <3',
            'Pretty cool',
            "wowowowowowowo",
            "uwu whats this?"
        ]
    },
    {
        name: 'Dog photo 2', 
        image: 'galleryImages/dog2.png'
    }, 
    {
        name: 'Cat photo 2', 
        image: 'galleryImages/catPhoto1.png' 
    },
    {
        name: 'Cat photo 3', 
        image: 'galleryImages/catPhoto2.png' 
    },
]


const Gallery = () => {

    const [count, setCount] = useState(0);

    const counterCount = (direction) => {
        if (direction === 'positive') {
            setCount(count + 1)
            if (count >= galleryImages.length - 1) {
                setCount(0)
            }
        } else if (direction === 'negative') {
            setCount(count - 1)
            if (count <= 0) {
                setCount(galleryImages.length - 1)
            }
        }
    }

    return(
        <div className="gallery"> 
            <div>
                {galleryImages[count].name}
            </div>
            <div className="container">

        <button onClick={() => counterCount('negative')}>
            <h1>-1</h1>
        </button>
            <GalleryCenter 
                image={galleryImages[count].image}
                comments = {galleryImages[count].comments}
                
            />
            <button onClick={() => counterCount('positive')}>
            <h1>+1</h1>
        </button>
            </div>
        </div>
    )
}

export default Gallery