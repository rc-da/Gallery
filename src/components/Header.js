import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

const categoryList = [
  { item: "music", id: 1 },
  { item: "sports", id: 2 },
  { item: "animation", id: 3 },
  { item: "nature", id: 4 },
  { item: "cartoon", id: 5 },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <div className="head">
      <div className="title">
        <div className="wel">
          <NavLink to="/">
            <i>Gallery</i>
          </NavLink>
        </div>
      </div>
      <div className="searchbar">
        <input
          id="searchbar"
          type="text"
          placeholder="Search for Images"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") navigate(`/search?q=${name}`);
          }}
        />
      </div>
      <div
        className="category"
        style={{ position: "relative" }}
        onClickCapture={() => setIsOpen(false)}
      >
        <CDropdown>
          <CDropdownToggle
            style={{
              background: "none",
              cursor: "pointer",
              color: "aliceblue",
              fontSize: "20px",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Categories
          </CDropdownToggle>
          <CDropdownMenu
            className="menu"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              zIndex: 1,
              display: isOpen ? "block" : "none",
            }}
          >
            {categoryList.map((i) => (
              <CategoryItem itemName={i.item} key={i.id} name={name} />
            ))}
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  );
}

function CategoryItem({ itemName, name }) {
  const navigate = useNavigate();
  return (
    <CDropdownItem
      id="item"
      onClick={() =>
        name != null ? navigate(`/search?q=${name}&c=${itemName}`) : null
      }
    >
      {itemName}
    </CDropdownItem>
  );
}
