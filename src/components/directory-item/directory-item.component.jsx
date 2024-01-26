import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
