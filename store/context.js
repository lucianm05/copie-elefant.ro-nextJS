import { createContext, useState } from 'react';
import { getSelectedCategory } from '../data/dummy-categories';

const Context = createContext({
  showSidebar: false,
  setShowSidebar: function () {},
  showSidebarSublist: false,
  setShowSidebarSublist: function () {},
  sidebarSublistContent: { id: 0, title: '', subcategories: [] },
  setSidebarSublistContent: function () {},
  showDesktopSublist: false,
  setShowDesktopSublist: function () {},
  desktopSublistContent: [],
  setDesktopSublistContent: function () {},
});

export const ContextProvider = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarSublist, setShowSidebarSublist] = useState(false);
  const [sidebarSublistContent, setSidebarSublistContent] = useState({ id: 0, title: '', subcategories: [] });
  const [showDesktopSublist, setShowDesktopSublist] = useState(false);
  const [desktopSublistContent, setDesktopSublistContent] = useState([]);

  const setShowSidebarHandler = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const setShowSidebarSublistHandler = () => {
    setShowSidebarSublist((prevState) => !prevState);
  };

  const setSidebarSublistContentHandler = (event) => {
    const targetId = event.target.dataset.id;
    const selectedCategory = getSelectedCategory(targetId);
    setSidebarSublistContent(selectedCategory);
  };

  const setShowDesktopSublistHandler = (state) => {
    setShowDesktopSublist(state);
  };

  const setDesktopSublistContentHandler = (event) => {
    const target = event.target;
    if(target.dataset.categoryid) {
      const id = target.dataset.categoryid;
      const selectedCategory = getSelectedCategory(id);
      setDesktopSublistContent(selectedCategory.subcategories);
      setShowDesktopSublist(true);
    } else if(!target.dataset.identifier) {
      setDesktopSublistContent([]);
      setShowDesktopSublist(false);
    }
  };

  const context = {
    showSidebar: showSidebar,
    setShowSidebar: setShowSidebarHandler,
    showSidebarSublist: showSidebarSublist,
    setShowSidebarSublist: setShowSidebarSublistHandler,
    sidebarSublistContent: sidebarSublistContent,
    setSidebarSublistContent: setSidebarSublistContentHandler,
    showDesktopSublist: showDesktopSublist,
    setShowDesktopSublist: setShowDesktopSublistHandler,
    desktopSublistContent: desktopSublistContent,
    setDesktopSublistContent: setDesktopSublistContentHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
