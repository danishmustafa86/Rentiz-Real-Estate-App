import React from 'react'

export default function Renting() {
  return (
    <div>Renting</div>
  )
}


























// import React from 'react';
// import './renting.css'; // Import CSS for styling

// export default function RentingPage() {
//     // Sample property data
//     const properties = [
//         {
//             id: 1,
//             type: "Apartment",
//             image: "/h4.jpg",
//             title: "Luxury 3-Bedroom Apartment",
//             location: "Downtown, City A",
//             price: "$1,200/month",
//             description: "Spacious and modern apartment with stunning city views.",
//             amenities: ["Wi-Fi", "Parking", "Gym", "Pool"],
//         },
//         {
//             id: 2,
//             type: "House",
//             image: "/h1.jpg",
//             title: "Cozy 2-Bedroom House",
//             location: "Suburban, City B",
//             price: "$900/month",
//             description: "Perfect for small families, with a beautiful garden.",
//             amenities: ["Wi-Fi", "Parking", "Garden"],
//         },
//         {
//             id: 3,
//             type: "Restaurant",
//             image: "/h3.jpg",
//             title: "Vibrant Restaurant Space",
//             location: "City Center, City C",
//             price: "$2,500/month",
//             description: "Ideal for food businesses, fully equipped kitchen.",
//             amenities: ["Wi-Fi", "Parking", "Kitchen"],
//         },
//     ];

//     return (
//         <div className="renting-page">
//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>List Your Property with Rentiz</h1>
//                 <p>Reach thousands of potential tenants and grow your business with Rentiz.</p>
//                 <button>List Your Property</button>
//             </div>

//             {/* Advanced Filters */}
//             <div className="filters-section">
//                 <h2>Find the Perfect Tenant</h2>
//                 <div className="filters-grid">
//                     <select>
//                         <option value="">Property Type</option>
//                         <option value="apartment">Apartment</option>
//                         <option value="house">House</option>
//                         <option value="restaurant">Restaurant</option>
//                     </select>
//                     <select>
//                         <option value="">Location</option>
//                         <option value="city-a">City A</option>
//                         <option value="city-b">City B</option>
//                         <option value="city-c">City C</option>
//                     </select>
//                     <input type="number" placeholder="Max Price" />
//                     <button>Apply Filters</button>
//                 </div>
//             </div>

//             {/* Featured Properties */}
//             <div className="featured-properties">
//                 <h2>Featured Properties</h2>
//                 <div className="properties-grid">
//                     {properties.map((property) => (
//                         <div key={property.id} className="property-card">
//                             <img src={property.image} alt={property.title} />
//                             <div className="property-details">
//                                 <h3>{property.title}</h3>
//                                 <p><strong>Location:</strong> {property.location}</p>
//                                 <p><strong>Price:</strong> {property.price}</p>
//                                 <p>{property.description}</p>
//                                 <div className="amenities">
//                                     {property.amenities.map((amenity, index) => (
//                                         <span key={index}>{amenity}</span>
//                                     ))}
//                                 </div>
//                                 <button>Contact Owner</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Testimonials Section */}
//             <div className="testimonials-section">
//                 <h2>What Our Landlords Say</h2>
//                 <div className="testimonials-grid">
//                     <div className="testimonial">
//                         <img src="/c1.jpg" alt="Landlord 1" />
//                         <p>"Rentiz helped me find reliable tenants quickly. Highly recommended!"</p>
//                         <h4>- Sarah Johnson</h4>
//                     </div>
//                     <div className="testimonial">
//                         <img src="/c2.jpg" alt="Landlord 2" />
//                         <p>"The platform is easy to use, and I got multiple offers within days."</p>
//                         <h4>- Michael Brown</h4>
//                     </div>
//                     <div className="testimonial">
//                         <img src="/c3.jpg" alt="Landlord 3" />
//                         <p>"Great service and support. My property was rented in no time!"</p>
//                         <h4>- Emily Davis</h4>
//                     </div>
//                 </div>
//             </div>

//             {/* Call to Action Section */}
//             <div className="cta-section">
//                 <h2>Ready to List Your Property?</h2>
//                 <p>Join thousands of landlords and start earning with Rentiz today.</p>
//                 <button>List Your Property</button>
//             </div>
//         </div>
//     );
// }