import React from 'react';

export default function SizeChanger(props) {
  return (
    <select onChange={e=> props.update(e.target.value)} className="dropDownContainer">
      <option value="12px"> 12 </option>
      <option value="13px"> 13 </option>
      <option value="14px"> 14 </option>
    </select>
  )
}