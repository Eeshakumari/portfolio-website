import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TabItem = memo(({ menu, selectedTab, menuContent }) => {
  const [menuItems, setMenuItems] = useState(menuContent);

  const isSelected = (tab) => {
    return selectedTab === tab;
  };

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".home__portfolio__item");
    if (blurDivs.length !== 0) {
      blurDivs.forEach((div) => {
        const img = div.querySelector("img");

        function loaded() {
          div.classList.add("loaded");
        }

        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", loaded);
        }
      });
    }
    return () => {};
  }, [selectedTab, menuItems]);

  useEffect(() => {
    if (selectedTab !== "all") {
      const newContent = menuContent.filter((item) =>
        item.category?.toLowerCase().includes(selectedTab?.toLowerCase())
      );
      setMenuItems(newContent);
    }
    if (selectedTab === "all") {
      setMenuItems(menuContent);
    }

    return () => {};
  }, [selectedTab]);

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
            <div className="home__portfolio__collection__list">
              {menuItems.map((listItem, i) => (
                <div
                  key={listItem.imageUrl + (i * 10 + 1)}
                  className="home__portfolio__collection__item"
                >
                  <div
                    className="home__portfolio__item"
                    style={{ backgroundImage: `url(${listItem.srcImageUrl})` }}
                  >
                    <img
                      loading="lazy"
                      src={listItem.imageUrl}
                      className="home__portfolio__image"
                      sizes="(max-width: 479px) 80vw, (max-width: 767px) 87vw, (max-width: 991px) 51vw, 255px"
                      // srcSet={`${listItem.srcImageUrl}`}
                    />
                    <div className="home__portfolio__item__hover__overlay">
                      <Link to={listItem.id} className="home__portfolio__name">
                        {listItem.title}
                      </Link>
                      <div className="home__portfolio__category">
                        {listItem.category}
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

export default TabItem;
