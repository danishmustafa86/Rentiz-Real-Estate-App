import React from 'react';
import './choseus.css'; // Import the CSS file

export default function ChoseUS() {
    const choseUs = {
        div1: {
            img1: '/circle.png',
            title: 'Easy To Find',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        div2: {
            img1: '/circle.png',
            title: 'Affordable Prices',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        div3: {
            img1: '/circle.png',
            title: 'Quickly Process',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
    };

    return (
        <div className="why-choose-us">
            <h1>Why To Choose Us</h1>
            <div className="choseus">
                {Object.values(choseUs).map((divValue, index) => (
                    <div className="chosediv" key={index}>
                        <img src={divValue.img1} alt="Circle" className="chose-icon" />
                        <h4>{divValue.title}</h4>
                        <p>{divValue.desc}</p>
                    </div>
                ))}
            </div>

            {/* New Testimonial Section */}
            <div className="testimonial-section">
                <div className="testimonial-content">
                    <img src="/quotes.png" alt="Quote" />
                    <p className="testimonial-quote">
                        Massa Semper Non Rutrum Orci Facilisi Sit. Lectus Porta Quam  
                        A Fringilla Eget Viverra Sem. Vulputate Massa Hendrerit Turpis  
                        Gravida Tempor, Porttitor.
                    </p>
                    <div className="testimonial-author">
                        <h4>Elena Pravo</h4>
                        <p>Ceco, Upstate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}