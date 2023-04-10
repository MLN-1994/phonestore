import { useEffect, useState } from "react";
import { getCategories } from "../../Helpers/getDatos";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
        console.log(res)
      });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory)
  };

  return (
    <>
      <div className="">
        <select
          className="rounded bg-slate-300 p-2"
          name=""
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Navbar;