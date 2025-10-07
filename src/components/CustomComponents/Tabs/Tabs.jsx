import React, { useEffect, useState } from "react";

import "./Tabs.scss";
import TabItem from "./TabItem";
import HobbiesItem from "./HobbiesItem";
import { useGlobalContext } from "../../../store/store";

const Tabs = (props) => {
  const [menuList, setMenuList] = useState([]);
  const [selectedTab, setSelectedTab] = useState(props.defaultSelected);
  const [menuContentList, setMenuContentList] = useState(props.mapValue);

  const { setProject, setHobby } = useGlobalContext();

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
    if (props.from === "projects_page") {
      setProject(tabName);
    } else {
      setHobby(tabName);
    }
  };
  useEffect(() => {
    setMenuList(props.menu);
    setSelectedTab(props.defaultSelected);
    setMenuContentList(props.mapValue);
    return () => {};
  }, []);

  return (
    <div
      data-current="all"
      data-easing="ease"
      data-duration-in="300"
      data-duration-out="100"
      className="home__project__tabs tabs"
    >
      <div className="tabs__menu">
        {menuList.map((menu) => (
          <div
            key={menu}
            className={`tab__link__portfolio tab__inline__block tab__tab__link ${
              selectedTab === menu ? "selected" : ""
            }`}
            onClick={() => handleTabChange(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
      <div className="tabs__content">
        {props.from === "projects_page" ? (
          <TabItem
            menu={menuList}
            selectedTab={selectedTab}
            menuContent={menuContentList}
          />
        ) : (
          <HobbiesItem
            menu={menuList}
            selectedTab={selectedTab}
            menuContent={menuContentList}
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
