// import * as React from 'react';

// function A() {

//     const [selectedOption, setSelectedOption] = useState<number>(() => {
//       return parseInt(sessionStorage.getItem('selectedOption') || '1')
//     })
  
//     const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//       setSelectedOption(parseInt(e.target.value))
//       sessionStorage.setItem('selectedOption', e.target.value)
//     }
  
//     return (
//       <select onChange={handleOnChange}>
//         <option value="5" >Five</option>
//         <option value="3" >Three</option>
//       </select>
//     )
//   }
//   export default A