import { createContext, useState } from 'react';
import { getSelectedCategory } from '../data/dummy-categories';

const Context = createContext({
  showSidebar: false,
  setShowSidebar: function () {},
  showSidebarSublist: false,
  setShowSidebarSublist: function () {},
  sidebarSublistContent: { id: 0, title: '', subcategories: [] },
  setSidebarSublistContent: function () {},
});

export const ContextProvider = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarSublist, setShowSidebarSublist] = useState(false);
  const [sidebarSublistContent, setSidebarSublistContent] = useState({ id: 0, title: '', subcategories: [] });

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

  const context = {
    showSidebar: showSidebar,
    setShowSidebar: setShowSidebarHandler,
    showSidebarSublist: showSidebarSublist,
    setShowSidebarSublist: setShowSidebarSublistHandler,
    sidebarSublistContent: sidebarSublistContent,
    setSidebarSublistContent: setSidebarSublistContentHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
