/** @format */
import DirectoryItem from "../category-item/directory-item";
import './directory.style.scss'

const Directory = ({ categories }) => {
	return (
      <div className="directory-container">
         {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
         ))}
      </div>
   );
};

export default Directory;
 