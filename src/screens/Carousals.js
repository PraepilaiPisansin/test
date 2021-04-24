import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        "_id": "dress1",
        "image": "/images/dress1.jpg",
        "title": "jeans dress",
        "description": "เดรสยีนส์แขนยาว กระโปรงคลุมเข่า ขนาดโอเวอร์ไซต์ จัดว่าเป็นไอเทมยอดฮิตตลอดกาลเลยก็ว่าได้กางเกงยีนส์อาจให้ลุคที่เท่หน่อย แต่สำหรับสาวกยีนส์ทั้งหลายนั้น วันไหนถ้าอยากจะดูเป็นสาวหวานขึ้นมาหน่อย ก็ต้องเป็นเดรสยีนส์นี่ล่ะ",
        "availableSizes": [
            "X",
            "L",
            "XL",
            "XXL"
        ],
        "price": 299
    },
    {
        "_id": "dress2",
        "image": "/images/dress2.jpg",
        "title": "black dress",
        "description": "เดรสเปิดไหล่ แขนยาวพอง สีดำ ช่วยเรื่องของการพรางตัวได้ดีอยู่แล้ว เพราะฉะนั้นสาว ๆ จะเลือกเป็นเดรสรัดรูป หรือพอดีตัวก็เหมาะค่ะ แต่สำหรับสาวที่อวบหน่อย แนะนำให้เลือกแบบที่พอดีตัวหรือใหญ่กว่าหน่อย จะดีกว่านะ แต่ก็ไม่ถึงขั้นโอเวอร์ไซซ์ล่ะ ! จะยิ่งดูอวบกว่าเดิม",
        "availableSizes": [
            "X",
            "M",
            "L"
        ],
        "price": 380
    },
    {
        "_id": "dress3",
        "image": "/images/dress3.jpg",
        "title": "blue dress",
        "description": "เดรสสีฟ้าอ่อน ปลายกระโปรงบาน แขนสั้น ทำจากผ้าฝ้าย",
        "availableSizes": [
            "X",
            "M",
            "L"
        ],
        "price": 149
    },
    {
        "_id": "dress4",
        "image": "/images/dress4.jpg",
        "title": "pink dress",
        "description": "เดรสสั้นสีชมพูเลยเข่า แขนยาว ปลายพลิ้วเล็กน้อย ทำจากลินิน",
        "availableSizes": [
            "XL",
            "X",
            "M",
            "L"
        ],
        "price": 259
    },
    {
        "_id": "dress5",
        "image": "/images/dress5.jpg",
        "title": "white dresss",
        "description": "เดรสยาวคลุมเข่าสีขาว แขนสั้น ลายทางตรง เหมาะกับสาว ๆ ที่ต้องการปิดบังร่างกายให้เพรียวลง",
        "availableSizes": [
            "X",
            "L",
            "XL"
        ],
        "price": 239
    },
    {
        "_id": "dress6",
        "image": "/images/dress6.jpg",
        "title": "maxi dress",
        "description": "เดรสแมกซี่ผ้าชีฟอง แขนกุด มีระบายพลิ้วบริเวณน่าอก เหมาะใส่ไปทะเลใน",
        "availableSizes": [
            "S",
            "XL",
            "L",
            "XXL"
        ],
        "price": 499
    },
    {
        "_id": "dress7",
        "image": "/images/dress7.jpg",
        "title": "checkered dress",
        "description": "เดรสลายหมากรุก สีดำ-ขาว เป็นเชิ้ตแขนยาว คอปก",
        "availableSizes": [
            "M",
            "X",
            "L",
            "XL"
        ],
        "price": 209
    },
    {
        "_id": "dress8",
        "image": "/images/dress8.jpg",
        "title": "checkered dress",
        "description": "เดรสลายหมากรุก สีดำ-แดง เป็นเชิ้ตแขนยาว คอปก มีเชือกผูกเอว",
        "availableSizes": [
            "XL",
            "XXL"
        ],
        "price": 279
    }
];

const Carousals = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.image}
            >
                <img src={item.image} alt={item.title} />
                <CarouselCaption className="custom-caption"
                    captionText={item.title} />
                
            </CarouselItem>
        );
    });

    return (
        <div>
            
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
                <CarouselIndicators className="custom-control" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl 
                    className="custom-control"
            direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
    );
}

export default Carousals;