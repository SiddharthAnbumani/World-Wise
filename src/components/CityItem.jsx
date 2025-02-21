import React from 'react'
import styles from './CityItem.module.css'

export default function CityItem({ cities, handleDelete}) {
    return (
      <ul className={styles.cityList}>
        {cities.length > 0 ? (
          cities.map((city, index) => (
            <li key={index} className={styles.cityItem}>
              <span className={styles.emoji}>
                <h4>{city.name}</h4>
              </span>
              <button 
                onClick={() => handleDelete(city.name)}  // Pass city name to delete function
                className={styles.deleteBtn}
              >
                &times;
              </button>
            </li>
          ))
        ) : (
          <p>No cities found</p>
        )}
      </ul>
    );
}

// export default function CityItem({cities}) {
//   return (
//     <ul className={styles.cityList}>
//         <li className={styles.cityItem}>
//         <span className={styles.emoji}>
//             <h3>{cities.name}</h3>
//         </span>
//         </li>
//     </ul>
//   )
// }
// function handleDelete (){
    
// }
// export default function CityItem({ cities }) {
//     return (
//       <ul className={styles.cityList}>
//         {cities.length > 0 ? (
//           cities.map((city, index) => (
//             <li key={index} className={styles.cityItem}>
//               <span className={styles.emoji}>
//                 <h4>{city.name}</h4>
//               </span>
//               <button 
//               onClick={handleDelete}
//               className={styles.deleteBtn}>
//                 &times;
//                 </button>
//             </li>
//           ))
//         ) : (
//           <p>No cities found</p>
//         )}
//       </ul>
//     );
//   }
  