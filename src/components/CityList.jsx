import React from 'react'
import styles from './CityList.module.css'
import CityItem from './CityItem';

export default function CityList({ name, setName, query, setQuery, cities, setCities, handleDelete }) {

    function handleSearch(evt) {
        evt.preventDefault();
        setName(query);
    }

    function handleDelete(cityName) {
        setCities(prevCities => prevCities.filter(city => city.name !== cityName));
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <CityItem cities={cities} handleDelete={handleDelete} />
        </div>
    );
}




// import React from 'react'
// import styles from './CityList.module.css'
// import CityItem from './CityItem';

// export default function CityList({name,setName,query,setQuery,cities}) {

//     function handleSearch(evt){
//         evt.preventDefault();
//         setName(query)
//     }

//   return (
//     <div>
//         <form action="">
//         <input type="text"
//         value={query}
//         onChange={(evt) => setQuery(evt.target.value)}/>
//         <button onClick={handleSearch}>Search</button>
//         </form>

//         <CityItem cities={cities}/>
//     </div>
//   )
// }

