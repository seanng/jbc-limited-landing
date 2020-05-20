/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { motion, AnimatePresence } from 'framer-motion';

const cn = (...args) => args.filter(Boolean).join(' ');

const PRODUCTS = [
  {
    label: 'Protective Equipment',
  },
  {
    label: 'Seafood',
  },
  {
    label: 'Durian',
  },
];

const Tab = ({ children, width }) => {
  const { isActive, onClick } = useTabState();

  return (
    <div
      onClick={onClick}
      className={cn('tab', isActive && 'active')}
      style={{ width }}
    >
      <div className="tab-text">{children}</div>
    </div>
  );
};

const PanelList = ({ state, children }) => {
  const panelRef = useRef();
  const [height, set] = useState(0);
  const [activeIndex] = state;

  useEffect(() => {
    panelRef.current && set(panelRef.current.offsetHeight);
  }, [activeIndex, set]);

  return (
    <motion.div className="tab-panel-list" animate={{ height }}>
      <AnimatePresence initial={false}>
        <motion.div
          ref={panelRef}
          className="tab-panel"
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.1, ease: 'easeInOut', duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: { ease: 'easeInOut', duration: 0.2 },
          }}
        >
          {cloneElement(children[activeIndex], { active: true })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProductsTabsList({ products = PRODUCTS }) {
  const state = useState(0);

  return (
    <Tabs state={state}>
      <div className="tabs">
        <div className="tab-list">
          {products.map(product => (
            <Tab
              width={`${100 / products.length}%`}
              key={`${product.label}-tab`}
            >
              {product.label}
            </Tab>
          ))}
        </div>
        <PanelList state={state}>
          {products.map(product => (
            <Panel key={`${product.label}-panel`}>
              <div className="tab-panel-content-wrapper">
                <div className="tab-panel-content-left">
                  yooo 
                </div>
                <div className="tab-panel-content-right">
                  {product.label}
                </div>
              </div>
            </Panel>
          ))}
        </PanelList>
      </div>
    </Tabs>
  );
}
