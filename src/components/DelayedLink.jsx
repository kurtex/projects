import { Link } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import ItemsType from './ItemsType.d';
import { useContext } from 'react';
import { DelayedLinkContext } from '../contexts/DelayedLinkContext';

const HASH_NAVIGATION = '/projects/#/';

const DelayedLink = (props) => {
  const { to, target, delay } = props;
  const { setPlay } = useContext(DelayedLinkContext);
  const clickHandler = () => {
    if (delay && delay > 0) {
      setTimeout(() => {
        window.open(HASH_NAVIGATION + to, target || '_self');
      }, delay);
    }
  };

  const [, drop] = useDrop(() => ({
    accept: ItemsType.COIN,
    drop: (item, monitor) => {
      setPlay(true);
      clickHandler();
    }
  }));

  return (<Link {...props} to={to} style={{ cursor: 'auto' }} onClick={(e) => e.preventDefault()} ref={drop} />);
};

export default DelayedLink;
