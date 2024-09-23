import React from "react";
import "./Testimonial.css"; // Import CSS khusus untuk styling layout

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <div className="testimonial">
        <h2 className="testimonial-title">Testimonial</h2>
        <div className="testimonial-content">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-text">
                <p>
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </p>
              </div>
              <div className="testimonial-footer">
                <img
                  src="/img/client.png" // Ganti dengan path yang benar untuk gambar
                  alt="Avatar"
                  className="testimonial-avatar"
                />
                <div className="testimonial-keterangan">
                  <div className="testimonial-start">
                    <img
                      src="/img/Star.png"
                      alt="Star"
                      className="testimonial-star"
                    />
                    <img
                      src="/img/Star.png"
                      alt="Star"
                      className="testimonial-star"
                    />
                    <img
                      src="/img/Star.png"
                      alt="Star"
                      className="testimonial-star"
                    />
                    <img
                      src="/img/Star.png"
                      alt="Star"
                      className="testimonial-star"
                    />
                    <img
                      src="/img/Star.png"
                      alt="Star"
                      className="testimonial-star"
                    />
                  </div>
                  <div className="testimonial-nama-company">
                    <p className="nama">Gemma Nolen</p>
                    <p className="company">Google</p>
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

export default Testimonial;
