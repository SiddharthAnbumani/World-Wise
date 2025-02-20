

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';

const BASE_URL = '';

export default function App() {
    const [cities, setCities] = useState([]);
    const [name, setName] = useState('New York');
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const apiKey = 'GfUkV23UhZmrbDFvxk2EYg==M4WjFi1ptvvYfJmq';

    useEffect(() => {
        const fetchCityData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.api-ninjas.com/v1/city?name=${name}`,
                    { headers: { 'X-Api-Key': apiKey } }
                );
                console.log(response.data);
                setCities((prevCities) => [...prevCities, ...response.data]);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCityData(); 
    }, [name]); 

    const handleDelete = (cityName) => {
      setCities((prevCities) => prevCities.filter(city => city.name !== cityName));
  };
  
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='product' element={<Product />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='login' element={<Login />} />
                <Route path='app' element={<AppLayout />}>
                    <Route index 
                    element={<CityList 
                    name={name} 
                    setName={setName}
                    query={query}
                    setQuery={setQuery}
                    cities={cities}/>} 
                    setCities={setCities}
                    handleDelete={handleDelete}/>

                    <Route path='cities' element={<CityList 
                      name={name} 
                      setName={setName}
                      query={query}
                      setQuery={setQuery}
                      cities={cities}
                      handleDelete={handleDelete}/>} />
                    <Route path='countries' element={<p>List of countries</p>} />
                    <Route path='form' element={<p>Form</p>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
