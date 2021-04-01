import './index.scss';
import React, { FC, ReactElement } from 'react';

const Preloader: FC = (): ReactElement => {
  const renderUseTags = (...rest) => {
    return rest.map(() => '<use class="preloader__text" xlink:href="#s-text"/>');
  };

  const renderSymbolContent = (n, a, m, e, s) => {
    return `
     <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            <tspan class="bold">${n}</tspan>${a}${m}<tspan class="bold">${e}${s}</tspan>
          </text>
        </symbol>
        ${renderUseTags(n, a, m, e, s)}
    `;
  };

  return (
    <div className="preloader">
      <svg viewBox="0 0 600 300" dangerouslySetInnerHTML={{ __html: renderSymbolContent('t', 'e', 's', 't', 's') }} />
    </div>
  );
};

export default Preloader;
