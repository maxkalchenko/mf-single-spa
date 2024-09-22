import { useState, useEffect } from 'react';
import { useMedia } from './useMedia';

const { routes } = require('@maxkalchenko/utils');

export default function Root() {
  const { isMobile } = useMedia();

  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    const onRoutingEvent = () => {
      const currentPath = window.location.pathname;
      const matchedRoute = routes.find(route => currentPath.startsWith(route.url));

      if (matchedRoute) {
        setSelectedRoute(matchedRoute.url);
      }
    };

    window.addEventListener('single-spa:routing-event', onRoutingEvent);

    onRoutingEvent();

    return () => {
      window.removeEventListener('single-spa:routing-event', onRoutingEvent);
    };
  }, [routes]);

  const handleNavigation = (url) => {
    (window as any).singleSpaNavigate(url);
  };


  const sidebarCollapsed = <div id='sidebar-nav-collapsed' />
    
  const sidebarExpanded = 
    <nav id='sidebar-nav-expanded' style={{ width: 300 }}>
      <ul>
        {routes.map(route => (
          <li
            key={route.url}
            onClick={() => handleNavigation(route.url)}
            style={{
              cursor: 'pointer',
              fontWeight: route.url === selectedRoute ? 'bold' : 'normal',
              color: route.url === selectedRoute ? 'blue' : 'black',
              listStyleType: "none",
              margin: "16px 0",
            }}
          >
            {route.text}
          </li>
        ))}
      </ul>
    </nav>

  return isMobile ? sidebarCollapsed : sidebarExpanded
}
