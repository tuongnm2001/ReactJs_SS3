import './Product.scss'
import { useState } from 'react'
import sneaker from '../../assets/image/sneaker.jpg'
import sneaker1 from '../../assets/image/sneaker1.jpg'
import sneaker2 from '../../assets/image/sneaker2.jpg'
import sneaker3 from '../../assets/image/sneaker3.jpg'
import sneaker4 from '../../assets/image/sneaker4.jpg'
import Lightbox from 'react-image-lightbox'

const images = [
    sneaker,
    sneaker1,
    sneaker2,
    sneaker3,
    sneaker4
]

const Product = () => {

    const [currentUpImg, setCurrentUpImg] = useState(sneaker)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const handleClickPreview = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index)
        setIsOpen(true)
    }

    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className='img-up'>
                        <img src={currentUpImg} onClick={() => handleClickPreview()} />
                    </div>

                    <div className='img-down'>
                        <div className='img-small'>
                            <img src={sneaker} onClick={() => setCurrentUpImg(sneaker)} className={currentUpImg === sneaker ? "active" : ""} />
                        </div>

                        <div className='img-small'>
                            <img src={sneaker1} onClick={() => setCurrentUpImg(sneaker1)} className={currentUpImg === sneaker1 ? "active" : ""} />
                        </div>

                        <div className='img-small'>
                            <img src={sneaker2} onClick={() => setCurrentUpImg(sneaker2)} className={currentUpImg === sneaker2 ? "active" : ""} />
                        </div>

                        <div className='img-small'>
                            <img src={sneaker3} onClick={() => setCurrentUpImg(sneaker3)} className={currentUpImg === sneaker3 ? "active" : ""} />
                        </div>

                        <div className='img-small'>
                            <img src={sneaker4} onClick={() => setCurrentUpImg(sneaker4)} className={currentUpImg === sneaker4 ? "active" : ""} />
                        </div>
                    </div>
                </div>

                <div className="content-right">
                    <div className='title'>
                        Giày chạy bộ nam New Balance - M860E11
                    </div>
                    <div className='price'>3.695.000 ₫</div>
                    <div className='size'>Size :40</div>
                    <div className='action'>
                        <label className='quatity'>Số lượng</label>
                        <input type={'number'} min='1' value={1} />
                        <button>Chọn mua</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}

        </div>
    )
}

export default Product;