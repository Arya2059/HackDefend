import React from "react";
import Footer from "../components/RootLayout/Footer";
import logo from "../images/logo4.png";
import { Link } from "react-router-dom";
import CategoriesCard from "../components/UI/CategoriesCard";
import { useDataContext } from "../context/dataContext";
import { useFilterContext } from "../context/filterContext";
import { TYPE } from "../utils/constants";

const HomePage = () => {
  const { categories } = useDataContext();
  const { filterDispatch } = useFilterContext();

  const categoryFilterHandler = ({ categoryName }) => {
    filterDispatch({
      type: TYPE.ADD_CATEGORY_FILTER,
      payload: categoryName
    });
  };

  return (
    <>
      <main className="home">
        <section className="home-container">
          <div className="home-container__info">
            <div className="info-header">
              <p>Welcome to HackDefend.</p>
              <h1>One stop for all your Cybersecurity Learnings.</h1>
              <p>
                Discover a world of digital fortification with our cybersecurity
                course website. Gain the knowledge and skills to defend against
                cyber threats, protect sensitive data, and safeguard vital
                information. From beginner-friendly fundamentals to advanced
                techniques, our comprehensive courses empower you to navigate
                the ever-evolving landscape of cybersecurity with confidence.
                Join our community of aspiring professionals, learn from
                industry experts, and embark on a transformative journey to
                become a cybersecurity guardian. Enroll today and unlock a
                future of secure possibilities.
              </p>
            </div>
            <button className="shop-btn">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
          <div className="course-img">
            <img src={logo} alt="" />
          </div>
        </section>
        {categories && (
          <section className="categories">
            <h1 className="categories__title">Explore Categories</h1>
            <div className="categories__container">
              {categories.map((item) => {
                return (
                  <Link
                    to="/products"
                    key={item.id}
                    onClick={() => categoryFilterHandler(item)}
                  >
                    <CategoriesCard category={item} />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
