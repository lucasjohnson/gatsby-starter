import React from 'react';
import { motion } from 'framer-motion';
import Context from '../../context/Context';
import Portal from './Portal';
import Button from '../Core/Button';
import Icon from '../Core/Icon';
import { ButtonVariant } from '../../enums/Index';
import { IconType } from '../../enums/Index';

interface OverlayProps {
  visibility: string;
  opacity: number;
}

interface OverlayState {
  open: OverlayProps;
  closed: OverlayProps;
}

const Modal: React.FC = () => {
  const overlayState: OverlayState = {
    open: { visibility: `visible`, opacity: 1 },
    closed: { visibility: `hidden`, opacity: 0 },
  };

  return (
    <Context.Consumer>
      {({ isModalActive, toggleModal }) => (
        <Portal>
          <motion.div
            className="overlay"
            initial="closed"
            animate={isModalActive ? 'open' : 'closed'}
            variants={overlayState}
            transition={{ duration: 0.4 }}
          >
            {isModalActive}
            <div className="modal">
              <div className="modalInner">
                <Button
                  variant={ButtonVariant.ICON}
                  onClickFunction={toggleModal}
                >
                  <Icon type={IconType.CROSS} />
                </Button>
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </Context.Consumer>
  );
};

export default Modal;
