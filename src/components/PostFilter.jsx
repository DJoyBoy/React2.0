import React from "react";
import MySelect from "./UI/select/MeSelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Пошук"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectSort) => setFilter({ ...filter, sort: selectSort })}
        defaulValue="Сортування"
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
