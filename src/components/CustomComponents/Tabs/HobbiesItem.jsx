import React, { memo, useEffect, useState } from "react";

import ApiLoader from "../../Loader/ApiLoader";
import {  books, trips } from "../../../utils/hobbies";

const HobbiesItem = memo(({ menu, selectedTab, menuContent }) => {
  const [menuItems, setMenuItems] = useState(menuContent);
  const [isLoading, setLoading] = useState(false);

  const isSelected = (tab) => {
    return selectedTab === tab;
  };

  const switchTabs = async () => {
    switch (selectedTab) {
      case "travel":
        setMenuItems(trips);
        break;
      case "books":
        setMenuItems(books);
        break;
      case "Learning":
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    switchTabs();
    return () => {
      setLoading(false);
    };
  }, [selectedTab]);

  if (isLoading) {
    return (
      <div className="loader__container">
        <ApiLoader />
      </div>
    );
  }
  return (
    <>
      {menu.map((tab, i) => (
        <div
          className={`tab__pane ${isSelected(tab) ? "active" : ""}`}
          style={{
            opacity: isSelected(tab) ? 1 : 0,
            transition: isSelected(tab) ? "opacity 300ms ease 0s" : "",
          }}
          key={tab + i + (i + 1)}
        >
          <div className="tabs__list">
            <div className="hobbies__portfolio__collection__list">
              {menuItems.map((listItem, i) => (
                <div
                  key={listItem.imageUrl + (i * 10 + 1)}
                  className="home__portfolio__collection__item"
                >
                  <div className="home__portfolio__item">
                    <img
                      loading="lazy"
                      src={listItem.imageUrl}
                      className="home__portfolio__image"
                      sizes="(max-width: 479px) 80vw, (max-width: 767px) 87vw, (max-width: 991px) 51vw, 255px"
                      srcSet={`${listItem.imageUrl} 640w`}
                    />
                    <div className="hobbies__portfolio__item__hover__overlay">
                      <p className="home__portfolio__name">{listItem.hobby}</p>
                      <div className="home__portfolio__category">
                        {listItem.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default HobbiesItem;
