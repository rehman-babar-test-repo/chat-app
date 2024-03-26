import React from 'react';

function GenderCheckBox({ onCheckBoxChange, selectedGender }) {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className=' label-text'>male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={()=>onCheckBoxChange("male")}
            className="checkbox border-white border-1.5 mt-2"
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className=' label-text'>female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={()=>onCheckBoxChange("female")}
            className="checkbox border-white border-1.5 ml-1 mt-2"
          />
        </label>
      </div>
      <div></div>
    </div>
  );
}

export default GenderCheckBox;
