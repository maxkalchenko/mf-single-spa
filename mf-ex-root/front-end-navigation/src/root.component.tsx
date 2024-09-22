import { useState, useEffect } from 'react';
import { useMedia } from './useMedia';

const { routes } = require('@maxkalchenko/utils');

export default function Root() {
  const current = (routes.find(route => route.children.some(child => child.url === window.location.pathname)) || routes[0]).label;

  const { isMobile } = useMedia();

  const [opened, setOpened] = useState(current);
  const [selectedRoute, setRoute] = useState(window.location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isOpened = (route: { label: string, children: Array<{url: string}>}): boolean =>
    route.label === opened || route.children.some(child => window.location.pathname.indexOf(child.url) === 0);

  useEffect(() => {
    const onRoutingEvent = () => {
      const newParent = routes.find(route => route.children.some(child => window.location.pathname.indexOf(child.url) === 0)) || routes[0];
      const newUrl = newParent.children.find(child => window.location.pathname.indexOf(child.url) === 0)?.url || window.location.pathname;
      const newOpened = newParent.label;

      setRoute(newUrl);
      setOpened(newOpened);
    };

    window.addEventListener('single-spa:routing-event', onRoutingEvent);

    return () => window.removeEventListener('single-spa:routing-event', onRoutingEvent);
}, []);

  const routeStyle = {
    width: '100%',
    cursor: 'pointer',
    minHeight: '40px',
    display: 'grid',
  };

  const routeTextStyle = {
    fontWeight: '600',
    fontSize: '14px',
    padding: '8px 0',
  };

  const navButtonStyle = {
    width: '100%',
    margin: '4px 0',
  };

  const sidebarCollapsed = <div id='sidebar-nav-collapsed' />
    

  const sidebarExpanded = 
    <div id='sidebar-nav-expanded'>
      <h3>Navigation panel</h3>
      {routes.map(route => 
        <div style={routeStyle} key={route.label}>
          <span onClick={() => setOpened(route.label)} style={routeTextStyle}>
            Label: {route.label}
          </span>

          {isOpened(route) && route.children.map(child => {
            const active = selectedRoute === child.url || window.location.pathname.indexOf(child.url) === 0
            return (
            <div
              style={{
                ...navButtonStyle,
                ...((selectedRoute === child.url || window.location.pathname.indexOf(child.url) === 0) && { backgroundColor: active ? '#ccc' : '#0000000'}),
              }}
              key={child.url}
              onClick={() => {
                (window as any).singleSpaNavigate(`${child.url}`);
                setRoute(child.url);
                isMobile && setIsCollapsed(true);
              }}
            >
              {child.text}
            </div>
          )}
        )}
        </div>
      )}
    </div>

  return <div>
    {isMobile && isCollapsed ? sidebarCollapsed : sidebarExpanded}
  </div> 
}
