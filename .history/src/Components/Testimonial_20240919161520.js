import React from "react";
import "./Testimoni.css"; // Import CSS untuk styling

const testimonials = [
  {
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "/img/client.png",
    stars: 5,
  },
  // Tambahkan 5 data testimonial lainnya dengan isi yang sama atau berbeda
];

const Testimoni = () => {
  return (
    <section id="Testimoni">
      <div className="testimoni">
        <h2 className="testimoni-title">Testimonial</h2>
        <div className="testimoni-content">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimoni-item">
              <div className="testimoni-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimoni-footer">
                <img
                  src={testimonial.image}
                  alt={`Avatar ${index + 1}`}
                  className="testimoni-avatar"
                />
                <div className="testimoni-keterangan">
                  <div className="testimoni-stars">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <img
                        key={i}
                        src="/img/star.png"
                        alt="Star"
                        className="testimoni-star"
                      />
                    ))}
                  </div>
                  <div className="testimoni-nama-company">
                    <p className="nama">{testimonial.name}</p>
                    <p className="company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
